<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "1234", "elimu_easy");

if ($conn->connect_error) {
    die(json_encode(["error" => "DB connection failed"]));
}

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["error" => "No data received"]);
    exit;
}

$first_name = $data["firstName"];
$last_name  = $data["lastName"];
$email      = $data["email"];

$password   = password_hash($data["password"], PASSWORD_DEFAULT);

$stmt = $conn->prepare("
    INSERT INTO users (first_name, last_name, email, password)
    VALUES (?, ?, ?, ?)
");

$stmt->bind_param("ssss", $first_name, $last_name, $email,  $password);

if ($stmt->execute()) {
    echo json_encode(["message" => "User registered"]);











    
} else {
    echo json_encode(["error" => $stmt->error]);
}

$conn->close();
