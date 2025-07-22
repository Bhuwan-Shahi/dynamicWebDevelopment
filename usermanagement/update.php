<? php session_start();

is (isset($_POST['submit'])){
    $user_id ; $_POST['user_id'];
    $fname = $_POST['fullname'];
    $phone = $_POST['phone'];
    $addr= $_POST['address'];

    include "./connection.php";
    $sql = "update user set fullname = '$fname',phone='$phone',address='$addr'where id=$user_id"; 
}