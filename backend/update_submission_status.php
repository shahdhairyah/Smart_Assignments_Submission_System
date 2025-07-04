<?php
header('Content-Type: application/json');
$conn = new mysqli("localhost", "root", "", "sass");

$data = json_decode(file_get_contents("php://input"), true);

$submission_id = $data['submission_id'] ?? null;
$status = $data['status'] ?? null;
$marks = $data['marks'] ?? null;

if (!$submission_id || !$status) {
    echo json_encode(["success" => false, "message" => "❌ Missing submission ID or status."]);
    exit;
}

$sql = "UPDATE student_submissions SET status = ?, marks = ?, reviewed_at = NOW(), marks_submitted_at = NOW() WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sii", $status, $marks, $submission_id);

if ($stmt->execute()) {
    echo json_encode(["success" => true, "message" => "✅ Submission updated."]);
} else {
    echo json_encode(["success" => false, "message" => "❌ Update failed."]);
}
$conn->close();
?>
