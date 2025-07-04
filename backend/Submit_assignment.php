<?php
header('Content-Type: application/json');
$conn = new mysqli("localhost", "root", "", "sass");

if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "Connection failed"]);
    exit;
}

$assignmentId = $_POST['assignment_id'] ?? '';
$email = $_POST['studentEmail'] ?? '';
$name = $_POST['studentName'] ?? '';
$roll = $_POST['rollNumber'] ?? '';
$pdfUrl = $_POST['pdfUrl'] ?? '';

if (!$assignmentId || !$pdfUrl) {
    echo json_encode(["success" => false, "message" => "Missing data"]);
    exit;
}

$sql = "INSERT INTO student_submissions (assignment_id, student_email, student_name, roll_number, pdf_url) VALUES (?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("issss", $assignmentId, $email, $name, $roll, $pdfUrl);

if ($stmt->execute()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Insert failed"]);
}

$conn->close();
?>
