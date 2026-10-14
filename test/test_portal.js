/**
 * BRIL Fee Payment Portal - Automated Test Suite
 * Tests server, data integrity, security headers, path traversal defense, and APIs.
 */

'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');
const assert = require('assert');

const ROOT_DIR = path.resolve(__dirname, '..');

let passedTests = 0;
let failedTests = 0;

function runTest(name, fn) {
  try {
    fn();
    console.log(`  ✓ ${name}`);
    passedTests++;
  } catch (err) {
    console.error(`  ✗ ${name}:`, err.message);
    failedTests++;
  }
}

async function runAsyncTest(name, fn) {
  try {
    await fn();
    console.log(`  ✓ ${name}`);
    passedTests++;
  } catch (err) {
    console.error(`  ✗ ${name}:`, err.message);
    failedTests++;
  }
}

function request(options, body = null) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => {
        const raw = Buffer.concat(chunks);
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: raw.toString('utf8'),
          raw,
        });
      });
    });
    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

async function main() {
  console.log('=== 1. Static Files & Data Integrity Tests ===');

  runTest('students_data.json exists and is valid JSON', () => {
    const filePath = path.join(ROOT_DIR, 'students_data.json');
    assert(fs.existsSync(filePath), 'students_data.json missing');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    assert(Array.isArray(data), 'students_data.json must be an array');
    assert(data.length > 50, `Expected > 50 students, got ${data.length}`);
    
    // Check records
    const rolls = new Set();
    data.forEach((student, idx) => {
      assert(student.roll, `Student #${idx} missing roll number`);
      assert(student.name, `Student ${student.roll} missing name`);
      assert(student.tuitionFee > 0, `Student ${student.roll} missing tuition fee`);
      assert(student.totalAnnualFee > 0, `Student ${student.roll} missing total fee`);
      assert(!rolls.has(student.roll), `Duplicate roll number found: ${student.roll}`);
      rolls.add(student.roll);
    });
    console.log(`    (Verified ${data.length} student records, 0 duplicates)`);
  });

  runTest('Required portal assets exist', () => {
    const requiredFiles = [
      'index.html',
      'style.css',
      'payment.js',
      'server.js',
      'package.json',
      'Dockerfile',
      'vercel.json',
      'render.yaml',
      'Procfile',
      'robots.txt',
      '.dockerignore',
    ];
    for (const f of requiredFiles) {
      assert(fs.existsSync(path.join(ROOT_DIR, f)), `Missing required file: ${f}`);
    }
  });

  console.log('\n=== 2. HTTP Server & Endpoint Tests ===');

  // Start server on an ephemeral port
  process.env.PORT = '0';
  process.env.HOST = '127.0.0.1';
  process.env.NODE_ENV = 'test';

  const server = require(path.join(ROOT_DIR, 'server.js'));
  
  await new Promise((resolve) => {
    if (server.listening) {
      resolve();
    } else {
      server.on('listening', resolve);
    }
  });

  const address = server.address();
  const port = address.port;
  const host = '127.0.0.1';
  console.log(`    Server listening for tests at http://${host}:${port}`);

  try {
    await runAsyncTest('GET / returns 200 with HTML and security headers', async () => {
      const res = await request({ host, port, path: '/', method: 'GET' });
      assert.strictEqual(res.statusCode, 200);
      assert(res.headers['content-type'].includes('text/html'));
      assert.strictEqual(res.headers['x-content-type-options'], 'nosniff');
      assert.strictEqual(res.headers['x-frame-options'], 'SAMEORIGIN');
      assert(res.headers['content-security-policy'], 'CSP header missing');
      assert(res.body.includes('Brilliant Institute of Engineering and Technology'));
    });

    await runAsyncTest('GET /health returns 200 with healthy status', async () => {
      const res = await request({ host, port, path: '/health', method: 'GET' });
      assert.strictEqual(res.statusCode, 200);
      const json = JSON.parse(res.body);
      assert.strictEqual(json.status, 'ok');
      assert.strictEqual(json.service, 'bril-fee-payment-portal');
      assert(typeof json.uptimeSeconds === 'number');
    });

    await runAsyncTest('GET /api/health returns 200', async () => {
      const res = await request({ host, port, path: '/api/health', method: 'GET' });
      assert.strictEqual(res.statusCode, 200);
      const json = JSON.parse(res.body);
      assert.strictEqual(json.status, 'ok');
    });

    await runAsyncTest('GET /api/config returns fee schedule', async () => {
      const res = await request({ host, port, path: '/api/config', method: 'GET' });
      assert.strictEqual(res.statusCode, 200);
      const json = JSON.parse(res.body);
      assert.strictEqual(json.tuitionFee, 72000);
      assert.strictEqual(json.jntuFee, 6500);
    });

    await runAsyncTest('GET /students_data.json returns valid JSON student data', async () => {
      const res = await request({ host, port, path: '/students_data.json', method: 'GET' });
      assert.strictEqual(res.statusCode, 200);
      assert(res.headers['content-type'].includes('application/json'));
      const list = JSON.parse(res.body);
      assert(Array.isArray(list) && list.length > 50);
    });

    await runAsyncTest('GET /style.css returns CSS stylesheet', async () => {
      const res = await request({ host, port, path: '/style.css', method: 'GET' });
      assert.strictEqual(res.statusCode, 200);
      assert(res.headers['content-type'].includes('text/css'));
      assert(res.body.includes(':root'));
    });

    await runAsyncTest('GET /payment.js returns JavaScript', async () => {
      const res = await request({ host, port, path: '/payment.js', method: 'GET' });
      assert.strictEqual(res.statusCode, 200);
      assert(res.headers['content-type'].includes('javascript'));
    });

    await runAsyncTest('GET /robots.txt returns text/plain', async () => {
      const res = await request({ host, port, path: '/robots.txt', method: 'GET' });
      assert.strictEqual(res.statusCode, 200);
      assert(res.headers['content-type'].includes('text/plain'));
    });

    await runAsyncTest('GET /favicon.ico handles icon cleanly', async () => {
      const res = await request({ host, port, path: '/favicon.ico', method: 'GET' });
      assert([200, 204].includes(res.statusCode), `Expected 200 or 204, got ${res.statusCode}`);
    });

    await runAsyncTest('HEAD / returns 200 with zero-length body', async () => {
      const res = await request({ host, port, path: '/', method: 'HEAD' });
      assert.strictEqual(res.statusCode, 200);
      assert.strictEqual(res.body.length, 0);
    });

    console.log('\n=== 3. Security & Boundary Defense Tests ===');

    await runAsyncTest('POST to static / returns 405 Method Not Allowed', async () => {
      const res = await request({ host, port, path: '/', method: 'POST' });
      assert.strictEqual(res.statusCode, 405);
    });

    await runAsyncTest('GET /nonexistent-page-xyz returns 404 Not Found', async () => {
      const res = await request({ host, port, path: '/nonexistent-page-xyz', method: 'GET' });
      assert.strictEqual(res.statusCode, 404);
    });

    await runAsyncTest('GET /server.js is blocked with 403 Forbidden', async () => {
      const res = await request({ host, port, path: '/server.js', method: 'GET' });
      assert.strictEqual(res.statusCode, 403);
    });

    await runAsyncTest('GET /package.json is blocked with 403 Forbidden', async () => {
      const res = await request({ host, port, path: '/package.json', method: 'GET' });
      assert.strictEqual(res.statusCode, 403);
    });

    await runAsyncTest('GET /Dockerfile is blocked with 403 Forbidden', async () => {
      const res = await request({ host, port, path: '/Dockerfile', method: 'GET' });
      assert.strictEqual(res.statusCode, 403);
    });

    await runAsyncTest('GET /.gitignore is blocked with 403 Forbidden', async () => {
      const res = await request({ host, port, path: '/.gitignore', method: 'GET' });
      assert.strictEqual(res.statusCode, 403);
    });

    await runAsyncTest('GET /.env.example is blocked with 403 Forbidden', async () => {
      const res = await request({ host, port, path: '/.env.example', method: 'GET' });
      assert.strictEqual(res.statusCode, 403);
    });

    await runAsyncTest('GET /.dockerignore is blocked with 403 Forbidden', async () => {
      const res = await request({ host, port, path: '/.dockerignore', method: 'GET' });
      assert.strictEqual(res.statusCode, 403);
    });

    await runAsyncTest('GET /submit-fee-payment.php is blocked with 403 Forbidden', async () => {
      const res = await request({ host, port, path: '/submit-fee-payment.php', method: 'GET' });
      assert.strictEqual(res.statusCode, 403);
    });

    await runAsyncTest('Path traversal /../package.json is blocked with 403', async () => {
      const res = await request({ host, port, path: '/../package.json', method: 'GET' });
      assert([403, 404].includes(res.statusCode));
      assert(!res.body.includes('"name": "bril-fee-payment-portal"'));
    });

    await runAsyncTest('Encoded traversal /%2e%2e/server.js is blocked with 403', async () => {
      const res = await request({ host, port, path: '/%2e%2e/server.js', method: 'GET' });
      assert([403, 404].includes(res.statusCode));
      assert(!res.body.includes('ROOT_DIR'));
    });

  } finally {
    server.close();
  }

  console.log(`\n================================`);
  console.log(`Test Results: ${passedTests} passed, ${failedTests} failed`);
  console.log(`================================\n`);

  if (failedTests > 0) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
