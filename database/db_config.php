<?php
/**
 * =====================================================================
 * BRILLIANT INSTITUTE OF ENGINEERING & TECHNOLOGY (BRIL), HYDERABAD
 * College ERP Database Connection Helper (PHP PDO & MySQLi)
 * =====================================================================
 */

function getErpDatabaseConnection() {
    $dbHost = getenv('DB_HOST') ?: '127.0.0.1';
    $dbPort = getenv('DB_PORT') ?: '3306';
    $dbUser = getenv('DB_USER') ?: 'root';
    $dbPass = getenv('DB_PASS') ?: '';
    $dbName = getenv('DB_NAME') ?: 'bril_college_erp';

    try {
        $dsn = "mysql:host={$dbHost};port={$dbPort};dbname={$dbName};charset=utf8mb4";
        $pdo = new PDO($dsn, $dbUser, $dbPass, [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ]);
        return $pdo;
    } catch (PDOException $e) {
        error_log("ERP Database Connection Error: " . $e->getMessage());
        return null;
    }
}
?>
