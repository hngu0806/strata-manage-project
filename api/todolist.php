<?php
session_start();

// Initialize the to-do list if it doesn't exist
if (!isset($_SESSION['todos'])) {
    $_SESSION['todos'] = [];
}

// Handle adding a new to-do
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['new_todo'])) {
    $newTodo = trim($_POST['new_todo']);
    if ($newTodo !== '') {
        $_SESSION['todos'][] = $newTodo;
    }
}

// Handle deleting a to-do
if (isset($_GET['delete'])) {
    $index = (int)$_GET['delete'];
    if (isset($_SESSION['todos'][$index])) {
        array_splice($_SESSION['todos'], $index, 1);
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>To-Do List</title>
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
        .todo-container {
            padding: 40px;
            text-align: center;
            max-width: 520px;
            width: 100%;
            margin: 40px auto;
            color: #f5f5f5;
            background-color: #1A1A1A;
            border-radius: 16px;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
            font-size: 15px;
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
            flex-direction: row;
            gap: 12px;
            margin-bottom: 32px;
            justify-content: center;
        }
        input[type="text"] {
            flex: 1;
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
        ul {
            padding: 0;
            list-style: none;
        }
        li {
            background: #262626;
            margin-bottom: 12px;
            padding: 12px 16px;
            border-radius: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .delete-btn {
            background: none;
            border: none;
            color: #D4AF37;
            cursor: pointer;
            font-weight: 600;
            font-size: 15px;
        }
    </style>
</head>
<body>
    <div class="todo-container">
        <h1>To-Do List</h1>
        <form method="POST">
            <input type="text" name="new_todo" placeholder="Enter a new task..." required>
            <button type="submit">Add</button>
        </form>
        <ul>
            <?php foreach ($_SESSION['todos'] as $i => $todo): ?>
                <li>
                    <span><?= htmlspecialchars($todo) ?></span>
                    <a class="delete-btn" href="?delete=<?= $i ?>" onclick="return confirm('Delete this task?');">Delete</a>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
</body>
</html>