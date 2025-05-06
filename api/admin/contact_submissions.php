<?php
require_once '../db_connect.php';

// Basic authentication
session_start();
if (!isset($_SESSION['admin']) || $_SESSION['admin'] !== true) {
    header('Location: /login');
    exit;
}

// Handle status updates
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['submission_id'], $_POST['status'])) {
    $stmt = $pdo->prepare("UPDATE contact_submissions SET status = ? WHERE id = ?");
    $stmt->execute([$_POST['status'], $_POST['submission_id']]);
}

// Fetch all submissions
$stmt = $pdo->query("SELECT * FROM contact_submissions ORDER BY created_at DESC");
$submissions = $stmt->fetchAll();
?>
<!DOCTYPE html>
<html>
<head>
    <title>Contact Submissions</title>
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
        .submissions {
            display: grid;
            gap: 20px;
        }
        .submission {
            background: #1A1A1A;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        .submission-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
            padding-bottom: 16px;
            border-bottom: 1px solid #333;
        }
        .submission-info {
            display: grid;
            gap: 12px;
        }
        .info-group {
            display: flex;
            gap: 8px;
        }
        .label {
            color: #B0B0B0;
            min-width: 100px;
        }
        .value {
            color: #f5f5f5;
        }
        .status-form {
            display: flex;
            gap: 8px;
            align-items: center;
        }
        select {
            padding: 8px 12px;
            border-radius: 6px;
            border: 1px solid #333;
            background-color: #0D0D0D;
            color: #f5f5f5;
            font-family: 'Inter', sans-serif;
        }
        button {
            padding: 8px 16px;
            background-color: #D4AF37;
            color: #0D0D0D;
            border: none;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
            font-family: 'Inter', sans-serif;
        }
        .status-pending {
            color: #ffc107;
        }
        .status-in-progress {
            color: #17a2b8;
        }
        .status-completed {
            color: #28a745;
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
    </style>
</head>
<body>
    <div class="container">
        <a href="/" class="back-link">Back to Home</a>
        <h1>Contact Submissions</h1>
        
        <div class="submissions">
            <?php foreach ($submissions as $submission): ?>
                <div class="submission">
                    <div class="submission-header">
                        <h3 style="margin: 0; color: #D4AF37;"><?= htmlspecialchars($submission['subject']) ?></h3>
                        <form method="POST" class="status-form">
                            <input type="hidden" name="submission_id" value="<?= $submission['id'] ?>">
                            <select name="status" onchange="this.form.submit()">
                                <option value="pending" <?= $submission['status'] === 'pending' ? 'selected' : '' ?>>Pending</option>
                                <option value="in-progress" <?= $submission['status'] === 'in-progress' ? 'selected' : '' ?>>In Progress</option>
                                <option value="completed" <?= $submission['status'] === 'completed' ? 'selected' : '' ?>>Completed</option>
                            </select>
                        </form>
                    </div>
                    
                    <div class="submission-info">
                        <div class="info-group">
                            <span class="label">Name:</span>
                            <span class="value"><?= htmlspecialchars($submission['name']) ?></span>
                        </div>
                        <div class="info-group">
                            <span class="label">Email:</span>
                            <span class="value"><?= htmlspecialchars($submission['email']) ?></span>
                        </div>
                        <?php if ($submission['phone']): ?>
                            <div class="info-group">
                                <span class="label">Phone:</span>
                                <span class="value"><?= htmlspecialchars($submission['phone']) ?></span>
                            </div>
                        <?php endif; ?>
                        <div class="info-group">
                            <span class="label">Message:</span>
                            <span class="value"><?= nl2br(htmlspecialchars($submission['message'])) ?></span>
                        </div>
                        <div class="info-group">
                            <span class="label">Submitted:</span>
                            <span class="value"><?= date('F j, Y g:i A', strtotime($submission['created_at'])) ?></span>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</body>
</html> 