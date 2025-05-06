<?php
require_once 'db_connect.php';

header('Content-Type: application/json');

// Handle CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

try {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Get JSON data from request body
        $data = json_decode(file_get_contents('php://input'), true);
        
        if (!$data) {
            throw new Exception('Invalid JSON data');
        }

        // Validate required fields
        $required_fields = ['landlord_name', 'email', 'unit_number', 'rent_amount'];
        foreach ($required_fields as $field) {
            if (empty($data[$field])) {
                throw new Exception("Missing required field: $field");
            }
        }

        // Insert new rental unit
        $stmt = $pdo->prepare("
            INSERT INTO rental_units (landlord_name, email, unit_number, rent_amount)
            VALUES (?, ?, ?, ?)
        ");
        
        $stmt->execute([
            $data['landlord_name'],
            $data['email'],
            $data['unit_number'],
            $data['rent_amount']
        ]);

        echo json_encode(['success' => true, 'message' => 'Rental unit listed successfully']);
    } 
    else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        // Fetch all available rental units
        $stmt = $pdo->query("
            SELECT * FROM rental_units 
            WHERE status = 'available' 
            ORDER BY created_at DESC
        ");
        
        $rental_units = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($rental_units);
    }
    else {
        throw new Exception('Method not allowed');
    }
} catch (Exception $e) {
    http_response_code(400);
    echo json_encode(['error' => $e->getMessage()]);
} 