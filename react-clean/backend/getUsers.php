<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");






$conn = new mysqli("localhost", "root", "1234", "elimu_easy");

if ($conn->connect_error) {
    echo json_encode([
        "success" => false,
        "error" => "Database connection failed"
    ]);
    exit;
}


$sql = "
    SELECT id, first_name, last_name, email, created_at
    FROM users
    ORDER BY id DESC
";

$result = $conn->query($sql);

$users = [];

while ($row = $result->fetch_assoc()) {
    $users[] = $row;
}


echo json_encode($users);

$conn->close();
