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

const ROOT_DIR = __dirname;
const HOST = process.env.HOST || '0.0.0.0';
const PORT = Number.parseInt(process.env.PORT, 10) || 3000;

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

// Never serve these as static files (secrets / server code / tooling).
const BLOCKED_EXTENSIONS = new Set(['.php', '.bat', '.env', '.log', '.sql']);
const BLOCKED_BASENAMES = new Set([
  '.env',
  '.gitignore',
  'package.json',
  'package-lock.json',
  'server.js',
  'Dockerfile',
  'render.yaml',
  'Procfile',
  'vercel.json',
]);

const CACHE_CONTROL = {
  '.html': 'no-cache',
  '.json': 'public, max-age=3600',
  '.css': 'public, max-age=3600',
  '.js': 'public, max-age=3600',
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
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://cdn.jsdelivr.net",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com",
      "font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com data:",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https:",
      "frame-ancestors 'self'",
      "form-action 'self' https:",
    ].join('; ')
  );
  // Only send HSTS when behind HTTPS in production; harmless on plain HTTP.
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
  // Normalizing "/../x" to "/x" would otherwise let "%2e%2e/x" resolve
  // inside the root and leak files like server.js.
  const segments = decoded.split(/[/\\]+/);
  if (segments.includes('..')) return null;

  // Normalize and force containment inside ROOT_DIR (defense in depth).
  const normalized = path.normalize(decoded).replace(/^(\.\.[/\\])+/, '');
  const joined = path.join(ROOT_DIR, normalized);
  const relative = path.relative(ROOT_DIR, joined);
  if (relative.startsWith('..') || path.isAbsolute(relative)) return null;

  const basename = path.basename(joined);
  if (basename.startsWith('.')) return null; // block dotfiles (.git, .env)
  if (BLOCKED_BASENAMES.has(basename)) return null;
  if (BLOCKED_EXTENSIONS.has(path.extname(joined).toLowerCase())) return null;

  return joined;
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

  if (method !== 'GET' && method !== 'HEAD') {
    return sendText(res, 405, '405 Method Not Allowed');
  }

  // Friendly favicon: avoid noisy 404s when no icon file is shipped.
  if (pathname === '/favicon.ico') {
    const localIcon = path.join(ROOT_DIR, 'favicon.ico');
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
    filePath = path.join(ROOT_DIR, 'index.html');
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
