<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header('Content-Type: application/json');
$conn = new mysqli("localhost", "root", "", "sass");

if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "❌ DB Connection failed."]);
    exit;
}

$sql = "SELECT * FROM tec_assignment";
$result = $conn->query($sql);

$assignments = [];

while ($row = $result->fetch_assoc()) {
    $assignmentId = $row['id'];

    // Fetch student submissions
    $submissions = [];
    $subQuery = $conn->prepare("SELECT * FROM student_submissions WHERE assignment_id = ?");
    $subQuery->bind_param("i", $assignmentId);
    $subQuery->execute();
    $subResult = $subQuery->get_result();

    while ($sub = $subResult->fetch_assoc()) {
        $submissions[] = $sub;
    }

    $row['submissions'] = $submissions;
    $assignments[] = $row;
}

echo json_encode(["success" => true, "assignments" => $assignments]);
$conn->close();
?>
