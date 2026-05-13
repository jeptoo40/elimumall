<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "1234", "elimu_easy");

if ($conn->connect_error) {
    echo json_encode(["error" => "DB connection failed"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

$userName = $data["userName"] ?? "guest";
$productName = $data["productName"] ?? "";
$phone = $data["phone"] ?? "";
$message = $data["message"] ?? "";

$stmt = $conn->prepare("
    INSERT INTO orders (user_name, product_name, phone, message)
    VALUES (?, ?, ?, ?)
");

$stmt->bind_param("ssss", $userName, $productName, $phone, $message);

if ($stmt->execute()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["error" => $stmt->error]);
}

$conn->close();
