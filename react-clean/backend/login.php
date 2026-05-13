<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "1234", "elimu_easy");

if ($conn->connect_error) {
  echo json_encode(["success" => false, "message" => "Database connection failed"]);
  exit;
}

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
  echo json_encode(["success" => false, "message" => "No data received"]);
  exit;
}

$email = $data["email"] ?? "";
$password = $data["password"] ?? "";

$stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();

$result = $stmt->get_result();

if ($user = $result->fetch_assoc()) {

  if (password_verify($password, $user["password"])) {

      echo json_encode([
          "success" => true,
          "user" => [
              "id" => $user["id"],
              "firstName" => $user["first_name"],
              "lastName" => $user["last_name"],
              "email" => $user["email"]
          ]
      ]);

  } else {
      echo json_encode(["success" => false, "message" => "Wrong password"]);
  }

} else {
  echo json_encode(["success" => false, "message" => "User not found"]);
}


$conn->close();
