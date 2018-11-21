<?php
$a = $_POST["fname"];
$b = $_POST["age"];
$c = $_POST["sex"];

$servername = "localhost";
$username = "xht";
$password = "123456";
$dbname = "xht";
 
// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 
 
$sql = "INSERT INTO people (name, age, sex)
VALUES ('{$a}', '{$b}', '{$c}')";
 
if ($conn->query($sql) === TRUE) {
    echo "新记录插入成功";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
 
$conn->close();
?>

欢迎<?php echo $_POST["fname"]; ?>!<br>
你的年龄是<?php echo $_POST["age"]; ?>   岁。
你的性别是<?php echo $_POST["sex"]; ?>