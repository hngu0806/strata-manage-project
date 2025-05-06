<?php
// Get database connection string from environment variable
$connection_string = getenv('DATABASE_URL');

if (!$connection_string) {
    die("DATABASE_URL environment variable is not set");
}

try {
    $pdo = new PDO($connection_string);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch(PDOException $e) {
    die("Connection failed: " . $e->getMessage());
} 