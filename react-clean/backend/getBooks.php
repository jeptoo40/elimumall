<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "1234", "elimu_easy");

if ($conn->connect_error) {
    echo json_encode([]);
    exit;
}

$result = $conn->query("SELECT * FROM books ORDER BY id DESC");

$books = [];

while ($row = $result->fetch_assoc()) {
    $books[] = $row;
}

echo json_encode($books);

$conn->close();
