/**
 * BRIL Online Fee Payment Portal - Production Static Server
 * Brilliant Institute of Engineering & Technology, Hyderabad
 * Zero-dependency Node.js server, hardened for deployment
 * (Render / Railway / VPS / Docker / cPanel Node).
 */

'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');

const BACKEND_DIR = __dirname;
const ROOT_DIR = path.resolve(__dirname, '..');
const FRONTEND_DIR = path.join(ROOT_DIR, 'frontend');
const DATABASE_DIR = path.join(ROOT_DIR, 'database');

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT !== undefined && !Number.isNaN(Number.parseInt(process.env.PORT, 10))
  ? Number.parseInt(process.env.PORT, 10)
  : 3000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

// Never serve these as static files (secrets / server code / tooling / database scripts).
const BLOCKED_EXTENSIONS = new Set(['.php', '.bat', '.env', '.log', '.sql']);
const BLOCKED_BASENAMES = new Set([
  '.env',
  '.env.example',
  '.gitignore',
  '.dockerignore',
  'package.json',
  'package-lock.json',
  'server.js',
  'Dockerfile',
  'render.yaml',
  'Procfile',
  'vercel.json',
  'submit-fee-payment.php',
  'schema.sql',
  'seed.sql',
  'db.js',
  'db_config.php',
]);

const CACHE_CONTROL = {
  '.html': 'no-cache',
  '.json': 'no-cache',
  '.css': 'no-cache',
  '.js': 'no-cache',
  '.png': 'public, max-age=86400',
  '.jpg': 'public, max-age=86400',
  '.webp': 'public, max-age=86400',
  '.svg': 'public, max-age=86400',
  '.ico': 'public, max-age=86400',
};

const serverStartTime = Date.now();

function setSecurityHeaders(res) {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  res.setHeader(
    'Content-Security-Policy',
    [
      "default-src 'self' https: data:",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdnjs.cloudflare.com https://cdn.jsdelivr.net https://unpkg.com https://b-iet.ac.in",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com https://cdn.jsdelivr.net https://unpkg.com https://b-iet.ac.in",
      "font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com https://cdn.jsdelivr.net https://b-iet.ac.in data:",
      "img-src 'self' data: https: http: blob:",
      "connect-src 'self' https: http:",
      "frame-ancestors 'self'",
      "form-action 'self' https:",
    ].join('; ')
  );
  if (process.env.NODE_ENV === 'production') {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  }
}

function sendJson(res, statusCode, obj) {
  const body = JSON.stringify(obj);
  setSecurityHeaders(res);
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'Content-Length': Buffer.byteLength(body),
  });
  res.end(body);
}

function sendText(res, statusCode, text) {
  setSecurityHeaders(res);
  res.writeHead(statusCode, {
    'Content-Type': 'text/plain; charset=utf-8',
    'Cache-Control': 'no-store',
    'Content-Length': Buffer.byteLength(text),
  });
  res.end(text);
}

function sanitizeForLog(value, maxLen = 120) {
  return String(value).replace(/[\r\n]/g, '').slice(0, maxLen);
}

function resolveSafePath(urlPathname) {
  let decoded;
  try {
    decoded = decodeURIComponent(urlPathname);
  } catch {
    return null; // malformed encoding
  }
  if (decoded.includes('\0')) return null;

  // Reject any traversal attempt outright (encoded or plain).
  const segments = decoded.split(/[/\\]+/);
  if (segments.includes('..')) return null;

  const normalized = path.normalize(decoded).replace(/^(\.\.[/\\])+/, '');
  const basename = path.basename(normalized);

  // Block dotfiles (.git, .env) and explicit blocked files
  if (basename.startsWith('.')) return null;
  if (BLOCKED_BASENAMES.has(basename)) return null;
  if (BLOCKED_EXTENSIONS.has(path.extname(normalized).toLowerCase())) return null;

  // Direct access to backend internals or sensitive folders is forbidden
  if (normalized.startsWith('backend') || normalized.startsWith('/backend') ||
      normalized.startsWith('test') || normalized.startsWith('/test')) {
    return null;
  }

  // 1. Check in database directory if requesting students_data.json
  if (basename === 'students_data.json') {
    return path.join(DATABASE_DIR, 'students_data.json');
  }

  // 2. Normalize path inside frontend directory
  let targetPath;
  if (normalized.startsWith('frontend') || normalized.startsWith('/frontend')) {
    const subPath = normalized.replace(/^[/\\]?frontend[/\\]?/, '');
    targetPath = path.join(FRONTEND_DIR, subPath);
  } else {
    targetPath = path.join(FRONTEND_DIR, normalized);
  }

  const relative = path.relative(FRONTEND_DIR, targetPath);
  if (relative.startsWith('..') || path.isAbsolute(relative)) return null;

  return targetPath;
}

function serveFile(req, res, filePath, stats) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  const stream = fs.createReadStream(filePath);
  setSecurityHeaders(res);
  res.writeHead(200, {
    'Content-Type': contentType,
    'Content-Length': stats.size,
    'Cache-Control': CACHE_CONTROL[ext] || 'public, max-age=3600',
  });
  if (req.method === 'HEAD') {
    stream.destroy();
    res.end();
    return;
  }
  stream.on('error', () => {
    if (!res.headersSent) sendText(res, 500, '500 Internal Server Error');
    else res.destroy();
  });
  stream.pipe(res);
}

function handleRequest(req, res) {
  const method = (req.method || 'GET').toUpperCase();
  const rawUrl = req.url || '/';
  const pathname = rawUrl.split('?')[0].split('#')[0] || '/';

  // Explicit security block check for protected names requested at root
  const baseRequested = path.basename(pathname);
  if (BLOCKED_BASENAMES.has(baseRequested) || BLOCKED_EXTENSIONS.has(path.extname(pathname).toLowerCase())) {
    return sendText(res, 403, '403 Forbidden');
  }

  // Path traversal check
  if (pathname.includes('..') || rawUrl.includes('%2e%2e') || rawUrl.includes('%2E%2E')) {
    return sendText(res, 403, '403 Forbidden');
  }

  // Health checks (load balancers / Docker / Render / uptime monitors).
  if (pathname === '/health' || pathname === '/api/health') {
    if (method !== 'GET' && method !== 'HEAD') return sendText(res, 405, '405 Method Not Allowed');
    return sendJson(res, 200, {
      status: 'ok',
      service: 'bril-fee-payment-portal',
      uptimeSeconds: Math.floor((Date.now() - serverStartTime) / 1000),
      time: new Date().toISOString(),
    });
  }

  // Lightweight portal metadata for ops dashboards.
  if (pathname === '/api/config') {
    if (method !== 'GET' && method !== 'HEAD') return sendText(res, 405, '405 Method Not Allowed');
    return sendJson(res, 200, {
      college: 'Brilliant Institute of Engineering & Technology',
      batch: 'CSE 2024-2028',
      tuitionFee: 72000,
      jntuFee: 6500,
    });
  }

  // JSON API for student records from database
  if (pathname === '/api/students' || pathname === '/students_data.json') {
    if (method !== 'GET' && method !== 'HEAD') return sendText(res, 405, '405 Method Not Allowed');
    const jsonPath = path.join(DATABASE_DIR, 'students_data.json');
    fs.stat(jsonPath, (err, stats) => {
      if (err || !stats.isFile()) return sendText(res, 404, '404 Not Found');
      return serveFile(req, res, jsonPath, stats);
    });
    return;
  }

  if (method !== 'GET' && method !== 'HEAD') {
    return sendText(res, 405, '405 Method Not Allowed');
  }

  // Friendly favicon: avoid noisy 404s when no icon file is shipped.
  if (pathname === '/favicon.ico') {
    const localIcon = path.join(FRONTEND_DIR, 'favicon.ico');
    fs.stat(localIcon, (err, stats) => {
      if (!err && stats.isFile()) return serveFile(req, res, localIcon, stats);
      setSecurityHeaders(res);
      res.writeHead(204, { 'Cache-Control': 'public, max-age=86400' });
      res.end();
    });
    return;
  }

  let filePath;
  if (pathname === '/') {
    filePath = path.join(FRONTEND_DIR, 'index.html');
  } else if (pathname === '/fee-payment' || pathname === '/payment') {
    filePath = path.join(FRONTEND_DIR, 'fee-payment.html');
  } else {
    const safe = resolveSafePath(pathname);
    if (!safe) return sendText(res, 403, '403 Forbidden');
    filePath = safe;
  }

  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
      fs.stat(filePath, (dirErr, dirStats) => {
        if (dirErr || !dirStats.isFile()) return sendText(res, 404, '404 Not Found');
        return serveFile(req, res, filePath, dirStats);
      });
      return;
    }
    if (err || !stats.isFile()) return sendText(res, 404, '404 Not Found');
    return serveFile(req, res, filePath, stats);
  });

  const started = Date.now();
  res.on('finish', () => {
    // Minimal access log without PII.
    // eslint-disable-next-line no-console
    console.log(
      `${new Date().toISOString()} ${sanitizeForLog(method, 8)} ${sanitizeForLog(pathname)} -> ${res.statusCode} ${Date.now() - started}ms`
    );
  });
}

const server = http.createServer(handleRequest);

function app(req, res) {
  return handleRequest(req, res);
}

// Mirror http.Server interface on app so both Vercel Serverless (expects function)
// and Node/tests (expect http.Server methods/events) work seamlessly.
['listen', 'close', 'address', 'on', 'once', 'emit', 'removeListener'].forEach((method) => {
  if (typeof server[method] === 'function') {
    app[method] = server[method].bind(server);
  }
});
Object.defineProperty(app, 'listening', {
  get() {
    return server.listening;
  },
});

if (!process.env.VERCEL) {
  server.listen(PORT, HOST, () => {
    // eslint-disable-next-line no-console
    console.log(`BRIL Fee Payment Portal is running at http://${HOST === '0.0.0.0' ? 'localhost' : HOST}:${PORT} (env: ${process.env.NODE_ENV || 'development'})`);
  });
}

function shutdown(signal) {
  // eslint-disable-next-line no-console
  console.log(`Received ${signal}, shutting down gracefully...`);
  server.close(() => process.exit(0));
  setTimeout(() => process.exit(1), 8000).unref();
}

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));

module.exports = app;
module.exports.server = server;
