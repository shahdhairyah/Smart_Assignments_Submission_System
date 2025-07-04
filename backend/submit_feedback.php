<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

// DB connection
$conn = new mysqli("localhost", "root", "", "sass");
if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "DB connection failed"]);
    exit();
}

// Decode JSON input
$data = json_decode(file_get_contents("php://input"), true);

// Validate
$name = trim($data["name"] ?? "");
$email = trim($data["email"] ?? "");
$feedback = trim($data["feedback"] ?? "");

if (empty($name) || empty($email) || empty($feedback)) {
    echo json_encode(["success" => false, "message" => "All fields are required"]);
    exit();
}

// Prepare & insert
$stmt = $conn->prepare("INSERT INTO feedback (name, email, message) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $email, $feedback);

if ($stmt->execute()) {
    echo json_encode(["success" => true, "message" => "Feedback submitted"]);
} else {
    echo json_encode(["success" => false, "message" => "Insert failed"]);
}

$stmt->close();
$conn->close();
?>
