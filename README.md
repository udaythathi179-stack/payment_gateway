# BRIL Online Fee Payment Portal

Official Online Fee Payment Portal for **Brilliant Institute of Engineering & Technology (BRIL), Hyderabad** — B.Tech CSE Batch 2024–2028.

Pay Tuition (₹72,000/yr), JNTU University Fee (₹6,500/yr), combined package (₹78,500), plus Exam/Transcript, Transport, Hostel and custom dues via PhonePe, Google Pay, Paytm, UPI QR, Cards and Net Banking with instant verifiable e-receipts.

## Project structure

| File | Purpose |
|---|---|
| `index.html` | Portal UI (form, gateway modal, receipt, directory, FAQ, footer) |
| `style.css` | Full portal stylesheet |
| `payment.js` | Frontend gateway engine + embedded CSE student DB fallback |
| `students_data.json` | 199 CSE 2024–2028 student records (source of truth for future API use) |
| `server.js` | Zero-dependency production static server (Node 18+) |
| `submit-fee-payment.php` | Optional PHP backend for order creation / verification on a LAMP/cPanel host |
| `package.json` / `vercel.json` / `render.yaml` / `Procfile` / `Dockerfile` | Deployment configs |

## Run locally

```bash
npm install   # no dependencies, validates setup
npm start     # serves http://localhost:3000
# or
PORT=4000 npm start
```

Health check: `GET /health` → `{"status":"ok",...}`

Useful routes:

- `/` → portal
- `/payment.js`, `/style.css`, `/students_data.json`, `/robots.txt`
- `/health`, `/api/health`, `/api/config`
- Blocked (403/404): `/.git/*`, `/.env`, `/*.php`, `/package.json`

## Test checklist (pre-deploy)

```bash
npm test                      # Runs syntax checks + 22 automated endpoint & security tests
node test/test_portal.js      # Direct test suite execution
```

Manual:

1. Open `/`, enter roll `501`, `561`, `5D4`, full `24QA1A0501` → student card verifies.
2. Switch Tuition / JNTU / Combined / Other fees → amount, summary and QR update.
3. Open gateway modal → UPI / QR / Card / NetBanking tabs render.
4. Complete payment (demo) → receipt modal, print, Find Receipt lookup.
5. Open Directory (199) → filter A/B/C/Mgmt + search works.
6. Check `/health` returns 200 JSON.
7. Confirm traversal blocked: `/..%2Fserver.js` and `/../package.json` do NOT leak files.
8. Confirm `submit-fee-payment.php` is NOT served by Node (403).

## Deploy

### Option A — Render / Railway / any Node host

- Build: `npm install`
- Start: `npm start`
- Env: `NODE_ENV=production`, `PORT` is auto-injected (code respects `process.env.PORT`)
- Health check path: `/health`
- `render.yaml` is included for one-click Render deploys.

### Option B — Vercel (static)

```bash
npx vercel --prod
```

`vercel.json` sets security headers and caching. Note: `server.js` is not used on Vercel; static files are served from the repo root.

### Option C — Netlify / Cloudflare Pages / S3 static

- Publish directory: repo root (`.`).
- No build command needed. Optional: `npm test` as build check.

### Option D — Docker / VPS

```bash
docker build -t bril-fee-portal .
docker run -p 3000:3000 -e NODE_ENV=production bril-fee-portal
curl http://localhost:3000/health
```

### Option E — cPanel shared hosting (PHP)

Upload `index.html`, `style.css`, `payment.js`, `students_data.json`, `robots.txt` to `public_html/`.
Upload `submit-fee-payment.php` separately and set env vars in cPanel (never hardcode secrets):

`DB_HOST`, `DB_USER`, `DB_PASS`, `DB_NAME`, `PHONEPE_MERCHANT_ID`, `PHONEPE_SALT_KEY`, `PHONEPE_SALT_INDEX`, `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`

The Node `server.js` intentionally refuses to serve `*.php` so secrets can't leak from the Node deployment.

## Security notes

- Fixed: previous `server.js` joined `req.url` directly → path traversal (`/../server.js` leaked source). Now uses `path.normalize` + `path.relative` containment, blocks dotfiles, `*.php`, `*.bat`, `package.json`.
- Security headers enabled: `nosniff`, `SAMEORIGIN`, `Referrer-Policy`, scoped `Content-Security-Policy` allowing only cdnjs/jsdelivr/Google Fonts.
- No `X-Powered-By` leak, method whitelist (GET/HEAD + `/health`), no directory listing, graceful shutdown.
- `submit-fee-payment.php` no longer ships default passwords/keys; missing env = empty string (fail closed).
- Frontend uses `innerHTML` for dynamic sub-options — keep student data trusted, or migrate to `textContent` templating before accepting external input.

## Known limitations / next steps

- `payment.js` embeds the student DB (~150 KB) duplicated in `students_data.json` for offline demo. For production, switch to `fetch('/students_data.json')` with embedded fallback to cut bundle size.
- Payments are currently simulated client-side (`simulatePaymentSuccess`). Wire `create_order` / `verify_payment` to Razorpay/PhonePe server verification before collecting live money.
- Add real `favicon.ico`, Open Graph image, and analytics if required.
