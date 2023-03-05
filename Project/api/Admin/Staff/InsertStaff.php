<?php

include("../../Connection/Connection.php");

$request = file_get_contents("php://input");
$data = json_decode($request);
$Name = $_POST["Name"];
$contact = $_POST["Contact"];
$Email = $_POST["Email"];
$Password = $_POST["Password"];
$uname = $_POST["uname"];



$video_name = $_FILES["file"]["name"];
$video_tmp_name = $_FILES["file"]["tmp_name"];
move_uploaded_file($video_tmp_name,"../../Files/MaterialVideo/".$video_name);

$path = "http://localhost/EducationThroughEntertainment/Project/api/Files/MaterialVideo/".$video_name;

$insQry = "insert into tbl_staffregistration(s_name,s_photo,s_email,s_contact,s_password,s_uname)
values('".$Name."','".$path."','".$Email."','".$contact."','".$Password."','".$uname."')";
if(mysql_query($insQry))
   {
            echo "Success";
            
   }
   else{
      echo "Failed";
     }




?>