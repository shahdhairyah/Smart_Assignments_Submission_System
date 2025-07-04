<?php
$host = "localhost";
$user = "root";
$pass = ""; // update if password exists
$dbname = "sass";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Database connection failed"]));
}
?>
