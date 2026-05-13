<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "1234", "elimu_easy");

if ($conn->connect_error) {
    echo json_encode([
        "error" => "DB connection failed"
    ]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

$id = $data["id"];
$status = $data["status"];

$stmt = $conn->prepare("
    UPDATE orders
    SET status = ?
    WHERE id = ?
");

$stmt->bind_param("si", $status, $id);

if ($stmt->execute()) {
    echo json_encode([
        "success" => true
    ]);
} else {
    echo json_encode([
        "error" => $stmt->error
    ]);
}

$conn->close();
