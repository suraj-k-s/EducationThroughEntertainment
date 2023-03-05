<?php

include("../../Connection/Connection.php");

$request = file_get_contents("php://input");
$data = json_decode($request);

$id = $_GET["id"];
$uid = $_GET["uid"];

$insQry = "insert into tbl_packagebooking(booking_date,user_id,package_id)
values(curdate(),'".$uid."','".$id."')";
if(mysql_query($insQry))
   {
            echo "true";
            
   }
   else{
      echo "false";
     }




?>