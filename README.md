# BRIL Online Fee Payment Portal

Official Online Fee Payment Portal for **Brilliant Institute of Engineering & Technology (BRIL), Hyderabad** — B.Tech CSE Batch 2024–2028.

Pay Tuition (₹72,000/yr), JNTU University Fee (₹6,500/yr), combined package (₹78,500), plus Exam/Transcript, Transport, Hostel and custom dues via PhonePe, Google Pay, Paytm, UPI QR, Cards and Net Banking with instant verifiable e-receipts.

---

## Clean 3-Tier Architecture

The project is organized into three dedicated modules: **Frontend**, **Backend**, and **Database**.

```
BRIL/
├── frontend/                     # Client application UI & assets
│   ├── css/
│   │   ├── home.css              # Main landing page styles
│   │   └── style.css             # College branding styles
│   ├── index.html                # College portal home & overview
│   ├── fee-payment.html          # Interactive Fee Payment Portal
│   ├── style.css                 # Fee payment portal layout styles
│   ├── payment.js                # Gateway engine, validation & QR generator
│   └── robots.txt                # Search engine directives
│
├── backend/                      # Server-side APIs & payment processing
│   ├── test/                     # Automated unit, integration & boundary tests
│   │   ├── test_portal.js
│   │   ├── test_ui_elements.js
│   │   ├── test_hallticket_verify_flow.js
│   │   └── test_runtime_dom.js
│   ├── server.js                 # Zero-dependency hardened Node.js HTTP server
│   ├── submit-fee-payment.php    # PHP payment order creation & ERP sync handler
│   └── .env.example              # Server environment variable templates
│
├── database/                     # Data models, schemas & seed data
│   ├── students_data.json        # 199 CSE student records (Sections A, B, C)
│   ├── schema.sql                # Production MySQL / MariaDB relational DDL
│   ├── seed.sql                  # Database population script with 199 student records
│   ├── db.js                     # Zero-dependency Node.js data layer
│   ├── db_config.php             # PHP PDO database connection helper
│   └── README.md                 # Database schema documentation & ER details
│
├── package.json                  # Root runner & dependency config
├── Dockerfile                    # Containerization specification
├── Procfile                      # Process file for Heroku / Railway
├── render.yaml                   # Infrastructure-as-code for Render
├── vercel.json                   # Edge routing & security headers for Vercel
└── push_to_github.bat            # One-click batch synchronization with GitHub
```

---

## 1. Frontend (`frontend/`)

- **`index.html`**: College home page highlighting autonomous accreditation, fee schedules, online portals, and campus updates.
- **`fee-payment.html`**: Clean 3-step fee payment workflow:
  1. Hall Ticket verification (auto-populating student profile and fee heads)
  2. Fee option selection (Tuition Fee ₹72,000, JNTU University Fee ₹6,500, or Combined ₹78,500)
  3. Dynamic UPI QR generation and instant digital receipt download.
- **`payment.js`**: Frontend payment engine handling instant calculation, QR generation, UPI intents, and modal transitions.

---

## 2. Backend (`backend/`)

- **`server.js`**: Hardened static server with zero external dependencies. Features:
  - Strict Content-Security-Policy (CSP), nosniff, frame-options, and referrer headers.
  - Path traversal defense (`..` and `%2e%2e` blocked).
  - Secret blocking (`.env`, `*.sql`, `*.php`, tooling files blocked with `403 Forbidden`).
  - Health check endpoints (`/health` and `/api/health`).
  - Fee schedule API (`/api/config`).
  - Student database API (`/api/students` and `/students_data.json`).
- **`submit-fee-payment.php`**: Server-side webhook handler for PhonePe, Razorpay, or custom UPI payment verifications.
- **`test/`**: 27+ automated tests validating data integrity, security boundaries, and payment flows.

---

## 3. Database (`database/`)

- **`students_data.json`**: Complete JSON database of 199 B.Tech CSE students (Batch 2024–2028).
- **`schema.sql`**: Production schema for MySQL / MariaDB / Cloud SQL with tables:
  - `students`: Roll number, full name, section, quota, email, phone, fee ledger, and balance.
  - `fee_structures`: Annual fee schedules per academic year.
  - `fee_payments`: Transaction ledger recording receipt numbers, UTRs, and payment status.
  - `payment_transactions`: Gateway API logs and webhook audit trail.
  - `audit_logs`: Finance audit trail.
  - Reporting views: `vw_student_fee_summary` and `vw_daily_collection_summary`.
- **`seed.sql`**: Comprehensive SQL seed script with all 199 students.
- **`db.js`**: Node.js data helper for query and filter operations.
- **`db_config.php`**: Secure PHP PDO database connection wrapper.

---

## Running Locally

```bash
# 1. Run server (starts on http://localhost:3000)
npm start

# 2. Or run dev mode
npm run dev

# 3. Custom port (optional)
PORT=4000 npm start
```

### URLs
- **Home**: [http://localhost:3000](http://localhost:3000)
- **Fee Payment Portal**: [http://localhost:3000/fee-payment](http://localhost:3000/fee-payment)
- **Health Check**: [http://localhost:3000/health](http://localhost:3000/health)
- **Student Data API**: [http://localhost:3000/api/students](http://localhost:3000/api/students)
- **Portal Config**: [http://localhost:3000/api/config](http://localhost:3000/api/config)

---

## Automated Test Suite

Run all test suites with a single command:

```bash
npm test
```

Verifies:
1. Student master data integrity (199 unique records, 0 duplicates).
2. All portal static endpoints (`/`, `/fee-payment`, `/health`, `/payment.js`, etc.).
3. Security boundary defenses (blocking traversal, source code, and dotfiles).
4. Form validation and Go button hall ticket navigation.
5. DOM simulation tests for all student batches and sections.

---

## Sync with GitHub

Run the included batch script to commit and push changes:

```bat
push_to_github.bat
```
