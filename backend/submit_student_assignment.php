<?php
// ✅ File: submit_student_assignment.php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "sass");

if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "❌ Database connection failed."]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

// 🛡️ Validate
$assignmentId = $data['assignment_id'] ?? null;
$studentEmail = $data['student_email'] ?? '';
$studentName = $data['student_name'] ?? '';
$rollNumber = $data['roll_number'] ?? '';
$pdfUrl = $data['pdf_url'] ?? '';
$version = $data['submission_version'] ?? 1;

if (!$assignmentId || !$studentEmail || !$pdfUrl) {
    echo json_encode(["success" => false, "message" => "❌ Missing required fields."]);
    exit;
}

$sql = "INSERT INTO student_submissions (
    assignment_id, student_email, student_name, roll_number,
    pdf_url, submission_version, is_outdated, status, submitted_at
) VALUES (?, ?, ?, ?, ?, ?, 0, 'Pending', NOW())";

$stmt = $conn->prepare($sql);
$stmt->bind_param("issssi", $assignmentId, $studentEmail, $studentName, $rollNumber, $pdfUrl, $version);

if ($stmt->execute()) {
    echo json_encode(["success" => true, "message" => "✅ Submission recorded."]);
} else {
    echo json_encode(["success" => false, "message" => "❌ Database insert failed."]);
}

$conn->close();
?>
