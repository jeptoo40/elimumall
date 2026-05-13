<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");



if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}



$conn = new mysqli("localhost", "root", "1234", "elimu_easy");

if ($conn->connect_error) {
    echo json_encode([
        "success" => false,
        "error" => "Database connection failed"
    ]);
    exit;
}



$data = json_decode(file_get_contents("php://input"), true);

$id = $data["id"];
$firstName = $data["firstName"];
$email = $data["email"];



$stmt = $conn->prepare("
    UPDATE users
    SET first_name = ?, email = ?
    WHERE id = ?
");

$stmt->bind_param("ssi", $firstName, $email, $id);

if ($stmt->execute()) {




    $result = $conn->query("
        SELECT * FROM users WHERE id = $id
    ");

    $updatedUser = $result->fetch_assoc();

    echo json_encode([
        "success" => true,
        "user" => [
            "id" => $updatedUser["id"],
            "firstName" => $updatedUser["first_name"],
            "email" => $updatedUser["email"]
        ]
    ]);
} else {

    echo json_encode([
        "success" => false,
        "error" => $stmt->error
    ]);
}

$stmt->close();
$conn->close();
