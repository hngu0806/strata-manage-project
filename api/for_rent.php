<?php
require_once 'db_connect.php';

$success_message = '';
$error_message = '';

// Handle form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $stmt = $pdo->prepare("
            INSERT INTO rental_units (landlord_name, email, unit_number, rent_amount)
            VALUES (?, ?, ?, ?)
        ");
        
        $stmt->execute([
            $_POST['landlord_name'],
            $_POST['email'],
            $_POST['unit_number'],
            $_POST['rent_amount']
        ]);
        
        $success_message = "Your rental unit has been successfully listed!";
    } catch (PDOException $e) {
        $error_message = "Sorry, there was an error submitting your rental unit. Please try again.";
    }
}

// Fetch all available rental units
$stmt = $pdo->query("SELECT * FROM rental_units WHERE status = 'available' ORDER BY created_at DESC");
$rental_units = $stmt->fetchAll();
?>
<!DOCTYPE html>
<html>
<head>
    <title>For Rent - Available Units</title>
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display:600|Inter:400,600" rel="stylesheet">
    <style>
        body {
            min-height: 100vh;
            background: #0D0D0D;
            color: #f5f5f5;
            font-family: 'Inter', sans-serif;
            margin: 0;
            padding: 40px;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        h1 {
            font-size: 32px;
            margin-bottom: 24px;
            color: #f5f5f5;
            font-family: 'Playfair Display', serif;
            font-weight: 600;
            letter-spacing: 0.02em;
        }
        .back-link {
            display: inline-block;
            margin-bottom: 24px;
            padding: 10px 24px;
            background-color: #D4AF37;
            color: #0D0D0D;
            border: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 16px;
            text-decoration: none;
            font-family: 'Inter', sans-serif;
            box-shadow: 0 4px 12px rgba(212, 175, 55, 0.2);
            transition: all 0.3s ease;
        }
        .content-wrapper {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 40px;
            margin-top: 40px;
        }
        .form-section {
            background: #1A1A1A;
            padding: 30px;
            border-radius: 16px;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        }
        .table-section {
            background: #1A1A1A;
            padding: 30px;
            border-radius: 16px;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        }
        form {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        .form-group {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        label {
            color: #B0B0B0;
            font-size: 14px;
        }
        input {
            padding: 12px 16px;
            border-radius: 8px;
            border: 1px solid #333;
            background-color: #0D0D0D;
            color: #f5f5f5;
            font-family: 'Inter', sans-serif;
        }
        button {
            padding: 12px 24px;
            background-color: #D4AF37;
            color: #0D0D0D;
            border: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 16px;
            cursor: pointer;
            font-family: 'Inter', sans-serif;
            box-shadow: 0 8px 16px rgba(212, 175, 55, 0.2);
            transition: all 0.3s ease;
        }
        button:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 20px rgba(212, 175, 55, 0.3);
        }
        .message {
            padding: 12px;
            border-radius: 8px;
            margin-bottom: 20px;
        }
        .success {
            background-color: rgba(40, 167, 69, 0.2);
            border: 1px solid #28a745;
            color: #28a745;
        }
        .error {
            background-color: rgba(220, 53, 69, 0.2);
            border: 1px solid #dc3545;
            color: #dc3545;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #333;
        }
        th {
            color: #D4AF37;
            font-weight: 600;
        }
        tr:hover {
            background-color: #262626;
        }
        .no-units {
            text-align: center;
            color: #B0B0B0;
            padding: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <a href="/" class="back-link">Back to Home</a>
        <h1>For Rent - Available Units</h1>
        
        <div class="content-wrapper">
            <div class="form-section">
                <h2 style="color: #D4AF37; margin-top: 0;">List Your Unit</h2>
                
                <?php if ($success_message): ?>
                    <div class="message success"><?= htmlspecialchars($success_message) ?></div>
                <?php endif; ?>
                
                <?php if ($error_message): ?>
                    <div class="message error"><?= htmlspecialchars($error_message) ?></div>
                <?php endif; ?>

                <form method="POST">
                    <div class="form-group">
                        <label for="landlord_name">Your Name</label>
                        <input type="text" id="landlord_name" name="landlord_name" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="unit_number">Unit Number</label>
                        <input type="text" id="unit_number" name="unit_number" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="rent_amount">Monthly Rent ($)</label>
                        <input type="number" id="rent_amount" name="rent_amount" min="0" step="0.01" required>
                    </div>
                    
                    <button type="submit">List Unit</button>
                </form>
            </div>
            
            <div class="table-section">
                <h2 style="color: #D4AF37; margin-top: 0;">Available Units</h2>
                
                <?php if (empty($rental_units)): ?>
                    <div class="no-units">No units available at the moment.</div>
                <?php else: ?>
                    <table>
                        <thead>
                            <tr>
                                <th>Unit</th>
                                <th>Landlord</th>
                                <th>Contact</th>
                                <th>Monthly Rent</th>
                                <th>Listed On</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($rental_units as $unit): ?>
                                <tr>
                                    <td><?= htmlspecialchars($unit['unit_number']) ?></td>
                                    <td><?= htmlspecialchars($unit['landlord_name']) ?></td>
                                    <td><?= htmlspecialchars($unit['email']) ?></td>
                                    <td>$<?= number_format($unit['rent_amount'], 2) ?></td>
                                    <td><?= date('M j, Y', strtotime($unit['created_at'])) ?></td>
                                </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                <?php endif; ?>
            </div>
        </div>
    </div>
</body>
</html> 