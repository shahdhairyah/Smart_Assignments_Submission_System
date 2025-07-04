<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$action = $_GET['action'] ?? '';
$data = json_decode(file_get_contents("php://input"), true);

// DB connection
$host = 'localhost';
$user = 'root';
$pass = ''; // Your MySQL password (e.g., 'root' or '')
$dbname = 'sass';

$conn = new mysqli($host, $user, $pass, $dbname);
if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "Database connection failed"]);
    exit;
}

// Response helper
function respond($success, $message, $user = null) {
    echo json_encode(["success" => $success, "message" => $message, "user" => $user]);
    exit;
}

// === Signup ===
if ($action === 'signup') {
    $fullName = $data['fullName'] ?? '';
    $email = $data['email'] ?? '';
    $password = $data['password'] ?? '';
    $rollNumber = $data['rollNumber'] ?? '';
    $role = $data['role'] ?? 'student';

    if ($role !== 'student') {
        respond(false, 'Only students can sign up');
    }

    $check = $conn->prepare("SELECT * FROM students WHERE email = ? OR roll_number = ?");
    $check->bind_param("ss", $email, $rollNumber);
    $check->execute();
    $res = $check->get_result();
    if ($res->num_rows > 0) {
        respond(false, 'Email or roll number already exists');
    }

    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    $stmt = $conn->prepare("INSERT INTO students (full_name, email, password, roll_number) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $fullName, $email, $hashedPassword, $rollNumber);
    
    if ($stmt->execute()) {
        respond(true, "Signup successful");
    } else {
        respond(false, "Signup failed");
    }
}

// === Login ===
elseif ($action === 'login') {
    $emailOrRoll = $data['emailOrRoll'] ?? '';
    $password = $data['password'] ?? '';
    $role = $data['role'] ?? 'student';

    if ($role === 'student') {
        $stmt = $conn->prepare("SELECT * FROM students WHERE email = ? OR roll_number = ?");
        $stmt->bind_param("ss", $emailOrRoll, $emailOrRoll);
    } else if ($role === 'teacher') {
        $stmt = $conn->prepare("SELECT * FROM teachers WHERE email = ?");
        $stmt->bind_param("s", $emailOrRoll);
    } else {
        respond(false, "Invalid role");
    }

    $stmt->execute();
    $res = $stmt->get_result();
    if ($res->num_rows === 0) {
        respond(false, "User not found");
    }

    $user = $res->fetch_assoc();

    if (!password_verify($password, $user['password'])) {
        respond(false, "Incorrect password");
    }

    unset($user['password']);
    $user['role'] = $role;

    respond(true, "Login successful", $user);
}

else {
    respond(false, "Invalid action");
}
