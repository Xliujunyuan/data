
<?php



header("Content-type:text/html;charset=utf-8");


include("connectdb.php");



$sql_usergtb="use registerdb";

$username=trim($_POST['username']);
$userpw=md5(trim($_POST['passwd1']));
$useremail=$_POST['email'];
$userbirthday=$_POST['birdaytime'].' '.'00:00:00';
$usergender=$_POST['gender'];
$ip=$_SERVER["REMOTE_ADDR"];




$conn=new Mysql();
$sql_find="select * from registertable where name='$username'";
echo $sql_find;
$result=$conn->sql($sql_find);
$num=$conn->getResultNum($sql_find);
echo $num;


$conn->close();

?>
