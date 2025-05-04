<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

$host = getenv('PGHOST');
$dbname = getenv('PGDATABASE');
$username = getenv('PGUSER');
$password = getenv('PGPASSWORD');
$port = getenv('PGPORT') ?: 5432;

try {
    $pdo = new PDO("pgsql:host=$host;port=$port;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo json_encode(['error' => 'Connection failed: ' . $e->getMessage()]);
    exit();
}

// Handle different HTTP methods
$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case 'GET':
        // Get all properties
        $stmt = $pdo->query('SELECT * FROM properties');
        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
        break;
        
    case 'POST':
        // Add new property
        $data = json_decode(file_get_contents('php://input'), true);
        $stmt = $pdo->prepare('INSERT INTO properties (address, unit_number, owner_name) VALUES ($1, $2, $3)');
        $stmt->execute([$data['address'], $data['unit_number'], $data['owner_name']]);
        echo json_encode(['message' => 'Property added successfully']);
        break;
        
    default:
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
        break;
}
?> 