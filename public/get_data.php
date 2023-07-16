<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

$db_host = $_SERVER['SECRET_DB_HOST'];
$db_user = $_SERVER['SECRET_DB_USER'];
$db_password = $_SERVER['SECRET_DB_PASSWORD'];
$db_name = $_SERVER['SECRET_DB_NAME'];

$conn = new mysqli($db_host, $db_user, $db_password, $db_name);

if ($conn->connect_error) {
    die("Ошибка подключения: " . $conn->connect_error);
}

$sql = "SELECT * FROM currencies";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $data = $result->fetch_all(MYSQLI_ASSOC);
    $json_data = json_encode($data);
    file_put_contents('data.json', $json_data);
    echo $json_data;
} else {
    echo "0 результатов";
}

$conn->close();
?>
