<?php
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "sass";

$conn = new mysqli($host, $user, $pass, $dbname);
if ($conn->connect_error) die("❌ DB connection failed");

$fullName = "Admin Teacher";
$email = "admin@school.edu";
$plainPassword = "admin@admin";

// Hash the password
$hashedPassword = password_hash($plainPassword, PASSWORD_DEFAULT);

// Check if teacher already exists
$check = $conn->prepare("SELECT * FROM teachers WHERE email = ?");
$check->bind_param("s", $email);
$check->execute();
$result = $check->get_result();

if ($result->num_rows > 0) {
    echo "⚠️ Teacher already exists. Delete and recreate if needed.";
    exit;
}

$stmt = $conn->prepare("INSERT INTO teachers (full_name, email, password) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $fullName, $email, $hashedPassword);

if ($stmt->execute()) {
    echo "✅ Teacher created successfully. Use email: admin@school.edu and password: admin@admin";
} else {
    echo "❌ Failed to create teacher.";
}
?>
