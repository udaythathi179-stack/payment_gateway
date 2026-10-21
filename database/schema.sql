-- =====================================================================
-- BRILLIANT INSTITUTE OF ENGINEERING & TECHNOLOGY (BRIL), HYDERABAD
-- Affiliated to JNTUH • Approved by AICTE • UGC Autonomous • NAAC 'A'
-- College ERP: Fee Payment & Student Ledger Database Schema
-- Compatible with: MySQL 8.0+ / MariaDB 10.5+ / AWS RDS / GCP Cloud SQL
-- =====================================================================

CREATE DATABASE IF NOT EXISTS `bril_college_erp`
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE `bril_college_erp`;

-- ---------------------------------------------------------------------
-- 1. Table: fee_structures
-- Stores annual fee rules per academic batch, quota, and branch
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `fee_structures` (
    `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `academic_year` VARCHAR(20) NOT NULL DEFAULT '2024-2025',
    `batch` VARCHAR(20) NOT NULL DEFAULT '2024-2028',
    `program` VARCHAR(100) NOT NULL DEFAULT 'B.Tech - Computer Science & Engineering (CSE)',
    `branch_code` VARCHAR(10) NOT NULL DEFAULT 'CSE',
    `tuition_fee` DECIMAL(10,2) NOT NULL DEFAULT 72000.00,
    `jntu_fee` DECIMAL(10,2) NOT NULL DEFAULT 6500.00,
    `special_fee` DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    `caution_deposit` DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    `total_annual_fee` DECIMAL(10,2) GENERATED ALWAYS AS (`tuition_fee` + `jntu_fee` + `special_fee` + `caution_deposit`) STORED,
    `is_active` TINYINT(1) NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX `idx_fee_lookup` (`academic_year`, `branch_code`, `is_active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- 2. Table: students
-- Student Master Directory (CSE Batch 2024-2028)
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `students` (
    `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `roll_number` VARCHAR(30) NOT NULL UNIQUE,
    `name` VARCHAR(120) NOT NULL,
    `father_name` VARCHAR(120) DEFAULT NULL,
    `program` VARCHAR(120) NOT NULL DEFAULT 'B.Tech - Computer Science & Engineering (CSE)',
    `branch` VARCHAR(20) NOT NULL DEFAULT 'CSE',
    `batch` VARCHAR(20) NOT NULL DEFAULT '2024 - 2028',
    `section` VARCHAR(30) NOT NULL DEFAULT 'Section A',
    `quota` VARCHAR(60) NOT NULL DEFAULT 'Convenor Quota (EAPCET)',
    `is_management` TINYINT(1) NOT NULL DEFAULT 0,
    `category` VARCHAR(20) DEFAULT 'OC',
    `gender` ENUM('M', 'F', 'O') DEFAULT 'M',
    `mobile` VARCHAR(20) NOT NULL,
    `email` VARCHAR(120) NOT NULL,
    `tuition_fee` DECIMAL(10,2) NOT NULL DEFAULT 72000.00,
    `jntu_fee` DECIMAL(10,2) NOT NULL DEFAULT 6500.00,
    `total_annual_fee` DECIMAL(10,2) NOT NULL DEFAULT 78500.00,
    `paid_amount` DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    `balance_due` DECIMAL(10,2) GENERATED ALWAYS AS (`total_annual_fee` - `paid_amount`) STORED,
    `fee_status` ENUM('UNPAID', 'PARTIAL', 'PAID') NOT NULL DEFAULT 'UNPAID',
    `status` ENUM('ACTIVE', 'DETAINED', 'INACTIVE', 'ALUMNI') NOT NULL DEFAULT 'ACTIVE',
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX `idx_student_section` (`section`),
    INDEX `idx_student_status` (`fee_status`, `status`),
    INDEX `idx_student_mobile` (`mobile`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- 3. Table: fee_payments
-- Official payment ledger recorded through UPI, QR, PhonePe, Razorpay
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `fee_payments` (
    `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `receipt_no` VARCHAR(60) NOT NULL UNIQUE,
    `order_id` VARCHAR(80) NOT NULL UNIQUE,
    `txn_id` VARCHAR(100) DEFAULT NULL,
    `utr_number` VARCHAR(100) DEFAULT NULL,
    `roll_number` VARCHAR(30) NOT NULL,
    `student_name` VARCHAR(120) NOT NULL,
    `fee_head` VARCHAR(60) NOT NULL, -- 'Tuition Fee', 'JNTU University Fee', 'Combined Fee'
    `amount` DECIMAL(10,2) NOT NULL,
    `payment_mode` VARCHAR(50) NOT NULL DEFAULT 'PhonePe / UPI QR',
    `payment_gateway` VARCHAR(50) NOT NULL DEFAULT 'PhonePe',
    `payer_vpa` VARCHAR(100) DEFAULT NULL,
    `payment_status` ENUM('INITIATED', 'PENDING', 'SUCCESS', 'FAILED', 'REFUNDED') NOT NULL DEFAULT 'INITIATED',
    `bank_ref_no` VARCHAR(100) DEFAULT NULL,
    `paid_at` DATETIME DEFAULT NULL,
    `receipt_url` VARCHAR(255) DEFAULT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (`roll_number`) REFERENCES `students` (`roll_number`) ON UPDATE CASCADE ON DELETE RESTRICT,
    INDEX `idx_payment_status` (`payment_status`),
    INDEX `idx_payment_receipt` (`receipt_no`),
    INDEX `idx_payment_dates` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- 4. Table: payment_transactions
-- Gateway API interaction logs, raw payloads, and webhooks
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `payment_transactions` (
    `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `order_id` VARCHAR(80) NOT NULL,
    `gateway` VARCHAR(50) NOT NULL DEFAULT 'PhonePe',
    `event_type` VARCHAR(50) NOT NULL DEFAULT 'PAYMENT_CALLBACK',
    `request_payload` LONGTEXT DEFAULT NULL,
    `response_payload` LONGTEXT DEFAULT NULL,
    `http_code` INT DEFAULT 200,
    `verified` TINYINT(1) NOT NULL DEFAULT 1,
    `client_ip` VARCHAR(45) DEFAULT NULL,
    `user_agent` VARCHAR(255) DEFAULT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX `idx_txn_order` (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- 5. Table: audit_logs
-- ERP compliance, tamper detection, and finance audit trail
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `audit_logs` (
    `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `action` VARCHAR(50) NOT NULL,
    `entity` VARCHAR(50) NOT NULL,
    `entity_id` VARCHAR(100) NOT NULL,
    `performed_by` VARCHAR(100) NOT NULL DEFAULT 'SYSTEM_GATEWAY',
    `details` TEXT DEFAULT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX `idx_audit_action` (`action`, `created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- 6. Views for Reporting & Analytics
-- ---------------------------------------------------------------------

-- View: Student Fee Summary with balance and payment counts
CREATE OR REPLACE VIEW `vw_student_fee_summary` AS
SELECT 
    s.`roll_number`,
    s.`name`,
    s.`section`,
    s.`quota`,
    s.`mobile`,
    s.`email`,
    s.`tuition_fee`,
    s.`jntu_fee`,
    s.`total_annual_fee`,
    COALESCE(SUM(CASE WHEN p.`payment_status` = 'SUCCESS' THEN p.`amount` ELSE 0 END), 0) AS `total_paid`,
    (s.`total_annual_fee` - COALESCE(SUM(CASE WHEN p.`payment_status` = 'SUCCESS' THEN p.`amount` ELSE 0 END), 0)) AS `remaining_due`,
    CASE 
        WHEN COALESCE(SUM(CASE WHEN p.`payment_status` = 'SUCCESS' THEN p.`amount` ELSE 0 END), 0) >= s.`total_annual_fee` THEN 'PAID'
        WHEN COALESCE(SUM(CASE WHEN p.`payment_status` = 'SUCCESS' THEN p.`amount` ELSE 0 END), 0) > 0 THEN 'PARTIAL'
        ELSE 'UNPAID'
    END AS `calculated_status`,
    COUNT(CASE WHEN p.`payment_status` = 'SUCCESS' THEN 1 END) AS `successful_txns`
FROM `students` s
LEFT JOIN `fee_payments` p ON s.`roll_number` = p.`roll_number`
GROUP BY s.`id`;

-- View: Daily Fee Collection Summary
CREATE OR REPLACE VIEW `vw_daily_collection_summary` AS
SELECT 
    DATE(p.`created_at`) AS `collection_date`,
    p.`fee_head`,
    p.`payment_mode`,
    COUNT(p.`id`) AS `transaction_count`,
    SUM(p.`amount`) AS `total_amount_collected`
FROM `fee_payments` p
WHERE p.`payment_status` = 'SUCCESS'
GROUP BY DATE(p.`created_at`), p.`fee_head`, p.`payment_mode`
ORDER BY `collection_date` DESC;

-- ---------------------------------------------------------------------
-- 7. Trigger: Update Student Ledger after successful payment
-- ---------------------------------------------------------------------
DELIMITER $$
CREATE TRIGGER `trg_after_fee_payment_insert`
AFTER INSERT ON `fee_payments`
FOR EACH ROW
BEGIN
    IF NEW.`payment_status` = 'SUCCESS' THEN
        UPDATE `students`
        SET 
            `paid_amount` = `paid_amount` + NEW.`amount`,
            `fee_status` = CASE 
                WHEN (`paid_amount` + NEW.`amount`) >= `total_annual_fee` THEN 'PAID'
                ELSE 'PARTIAL'
            END
        WHERE `roll_number` = NEW.`roll_number`;

        INSERT INTO `audit_logs` (`action`, `entity`, `entity_id`, `performed_by`, `details`)
        VALUES (
            'PAYMENT_RECORDED',
            'fee_payments',
            NEW.`receipt_no`,
            'UPI_GATEWAY',
            CONCAT('Receipt: ', NEW.`receipt_no`, ' | Roll: ', NEW.`roll_number`, ' | Amount: ₹', NEW.`amount`)
        );
    END IF;
END$$
DELIMITER ;
