<?php
require_once 'db_connect.php';

$success_message = '';
$error_message = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $stmt = $pdo->prepare("
            INSERT INTO contact_submissions (name, email, phone, subject, message)
            VALUES (?, ?, ?, ?, ?)
        ");
        
        $stmt->execute([
            $_POST['name'],
            $_POST['email'],
            $_POST['phone'],
            $_POST['subject'],
            $_POST['message']
        ]);
        
        $success_message = "Thank you for your message! We'll get back to you soon.";
    } catch (PDOException $e) {
        $error_message = "Sorry, there was an error submitting your message. Please try again.";
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Contact Us</title>
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display:600|Inter:400,600" rel="stylesheet">
    <style>
        body {
            min-height: 100vh;
            background: #0D0D0D;
            color: #f5f5f5;
            font-family: 'Inter', sans-serif;
            margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .contact-container {
            padding: 40px;
            text-align: center;
            max-width: 600px;
            width: 100%;
            margin: 40px auto;
            color: #f5f5f5;
            background-color: #1A1A1A;
            border-radius: 16px;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        }
        h1 {
            font-size: 32px;
            margin-bottom: 24px;
            color: #f5f5f5;
            font-family: 'Playfair Display', serif;
            font-weight: 600;
            letter-spacing: 0.02em;
        }
        form {
            display: flex;
            flex-direction: column;
            gap: 20px;
            text-align: left;
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
        input, textarea {
            padding: 12px 16px;
            border-radius: 8px;
            border: 1px solid #333;
            background-color: #0D0D0D;
            color: #f5f5f5;
            font-family: 'Inter', sans-serif;
        }
        textarea {
            min-height: 120px;
            resize: vertical;
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
    </style>
</head>
<body>
    <div class="contact-container">
        <a href="/" style="
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
        ">Back to Home</a>
        
        <h1>Contact Us</h1>
        
        <?php if ($success_message): ?>
            <div class="message success"><?= htmlspecialchars($success_message) ?></div>
        <?php endif; ?>
        
        <?php if ($error_message): ?>
            <div class="message error"><?= htmlspecialchars($error_message) ?></div>
        <?php endif; ?>

        <form method="POST">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required>
            </div>
            
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
            </div>
            
            <div class="form-group">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone">
            </div>
            
            <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" id="subject" name="subject" required>
            </div>
            
            <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" required></textarea>
            </div>
            
            <button type="submit">Send Message</button>
        </form>
    </div>
</body>
</html> 