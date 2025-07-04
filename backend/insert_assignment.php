<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");


$conn = new mysqli("localhost", "root", "", "sass");
if ($conn->connect_error) {
  echo json_encode(["success" => false, "message" => "❌ Connection failed"]);
  exit;
}

$subject = $_POST['subject'] ?? '';
$number = $_POST['number'] ?? '';
$pdfUrl = $_POST['pdfUrl'] ?? '';
$dueDate = $_POST['dueDate'] ?? '';

if (!$subject || !$number || !$pdfUrl || !$dueDate) {
  echo json_encode(["success" => false, "message" => "❌ All fields are required"]);
  exit;
}

$stmt = $conn->prepare("INSERT INTO tec_assignment (AssName, AssNu, Asslink, DueDate) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $subject, $number, $pdfUrl, $dueDate);

if ($stmt->execute()) {
  echo json_encode(["success" => true, "message" => "✅ Assignment inserted"]);
} else {
  echo json_encode(["success" => false, "message" => "❌ Insert failed"]);
}
$conn->close();
?>
