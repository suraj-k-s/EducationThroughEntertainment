<?php

include("Connection/Connection.php");

$request = file_get_contents("php://input");
$data = json_decode($request);

$username = $_GET["username"];
$password = $_GET["password"];

$list = array();
$lis = "";
$selQry = "select * from tbl_admin where admin_uname='".$username."' and admin_password='".$password."'";
$row = mysql_query($selQry);
$data = mysql_fetch_assoc($row);
$count = mysql_num_rows($row);

$selQry1 = "select * from tbl_studentregistration where stud_uname='".$username."' and stud_password='".$password."'";
$row1 = mysql_query($selQry1);
$data1 = mysql_fetch_assoc($row1);
$count1 = mysql_num_rows($row1);
 

if($count == 1)
{
    $list[]["id"] =  $data["admin_id"];
    $list[]['type'] = "admin";
}
else if($count1 == 1)
{
    $list[]["id"] =  $data1["stud_id"];
    $list[]['type'] = "user";
}

echo json_encode($list);


?>