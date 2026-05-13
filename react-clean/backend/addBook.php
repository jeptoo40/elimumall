<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// HANDLE PREFLIGHT
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// DB CONNECTION
$conn = new mysqli("localhost", "root", "1234", "elimu_easy");

if ($conn->connect_error) {
    echo json_encode([
        "success" => false,
        "error" => "Database connection failed"
    ]);
    exit;
}

// CHECK REQUIRED FIELDS
if (
    !isset($_POST["name"]) ||
    !isset($_POST["category"]) ||
    !isset($_POST["price"]) ||
    !isset($_FILES["image"])
) {
    echo json_encode([
        "success" => false,
        "error" => "Missing required fields"
    ]);
    exit;
}

$name = $_POST["name"];
$category = $_POST["category"];
$price = $_POST["price"];

// IMAGE DATA
$imageName = time() . "_" . basename($_FILES["image"]["name"]);
$tmpName = $_FILES["image"]["tmp_name"];

// CREATE UPLOADS FOLDER IF NOT EXISTS
if (!is_dir("uploads")) {
    mkdir("uploads", 0777, true);
}

$imagePath = "uploads/" . $imageName;

// MOVE IMAGE
if (!move_uploaded_file($tmpName, $imagePath)) {
    echo json_encode([
        "success" => false,
        "error" => "Image upload failed"
    ]);
    exit;
}

// INSERT INTO DATABASE
$stmt = $conn->prepare("
    INSERT INTO books (name, category, price, image)
    VALUES (?, ?, ?, ?)
");

$stmt->bind_param("ssss", $name, $category, $price, $imagePath);

if ($stmt->execute()) {
    echo json_encode([
        "success" => true,
        "message" => "Book added successfully"
    ]);
} else {
    echo json_encode([
        "success" => false,
        "error" => $stmt->error
    ]);
}

$stmt->close();
$conn->close();
