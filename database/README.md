# BRIL Fee Payment Database Layer

Database models, schema definitions, seed data, and query utilities for the **Brilliant Institute of Engineering & Technology (BRIL)** Online Fee Payment Portal.

## Directory Contents

| File | Purpose |
| :--- | :--- |
| `students_data.json` | Student Master Directory (199 B.Tech CSE Batch 2024–2028 records across Sections A, B, C & Lateral Entries) |
| `schema.sql` | Production DDL schema for MySQL 8.0+ / MariaDB / Cloud SQL with tables, indexes, views, and audit triggers |
| `seed.sql` | SQL seed script populating fee structures, all 199 student records, and sample verified payments |
| `db.js` | Zero-dependency Node.js data layer for student queries and fee lookups |
| `db_config.php` | PHP PDO database connection helper for backend payment verification |

---

## Database Tables

1. **`students`**: Master student profiles, quota, section, contact info, total annual fee, and payment status (`UNPAID`, `PARTIAL`, `PAID`).
2. **`fee_structures`**: Academic batch fee schedules (Tuition Fee ₹72,000, JNTU Fee ₹6,500, Special Fee).
3. **`fee_payments`**: Transaction ledger of payments made via UPI QR, PhonePe, Google Pay, Paytm, or NetBanking.
4. **`payment_transactions`**: Gateway API request/response payloads, callback verification logs, and audit data.
5. **`audit_logs`**: Tamper-evident ledger logs for finance reconciliation.

---

## Views

- **`vw_student_fee_summary`**: Aggregates total paid, balance remaining, and payment status for every student.
- **`vw_daily_collection_summary`**: Daily fee collections grouped by fee head and gateway.

---

## How to Import into MySQL / MariaDB

```bash
# 1. Create database and schema
mysql -u root -p < database/schema.sql

# 2. Populate students and seed data
mysql -u root -p < database/seed.sql
```
