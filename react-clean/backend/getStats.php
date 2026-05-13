<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "1234", "elimu_easy");

if ($conn->connect_error) {
    echo json_encode(["error" => "DB connection failed"]);
    exit;
}

// count books
$books = $conn->query("SELECT COUNT(*) as total FROM books")->fetch_assoc();

// count users
$users = $conn->query("SELECT COUNT(*) as total FROM users")->fetch_assoc();

// count orders
$orders = $conn->query("SELECT COUNT(*) as total FROM orders")->fetch_assoc();

echo json_encode([
    "books" => $books["total"],
    "users" => $users["total"],
    "orders" => $orders["total"]
]);

$conn->close();
