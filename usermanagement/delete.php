<?php
$user_id = $_GET['user_id'];
include "./connection.php";
$sql = "Delete from users where id =$user_id";

$res = mysqli_query($conn, $sql);
if($res) $_SESSION['msg'] = "User deleted successfully";
else $_SESSION['msg'] = "user deletion failed";


header("location: ./list.php");
