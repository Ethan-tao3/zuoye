<?php
$d = $_POST["fname2"];
$con=mysqli_connect("localhost","xht","123456","xht");
// 检测连接
if (mysqli_connect_errno())
{
    echo "连接失败: " . mysqli_connect_error();
}

$result = mysqli_query($con,"SELECT * FROM people
WHERE name='$d'");

while($row = mysqli_fetch_array($result))
{
    echo $row['name'] . " " . $row['age'] . " " . $row['SEX'];
    echo "<br>";
}
?>