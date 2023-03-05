<?php

include("../Connection/Connection.php");

$request = file_get_contents("php://input");
$data = json_decode($request);

$name = $_POST["name"];
$email = $_POST["email"];
$uname = $_POST["uname"];
$password = $_POST["password"];
$cat = $_POST["cat"];


$photo = $_FILES["photo"]["name"];
$tmp = $_FILES["photo"]["tmp_name"];
move_uploaded_file($tmp,"../Files/UserPhoto/".$photo);

$path = "http://localhost/EducationThroughEntertainment/Project/api/Files/UserPhoto/".$photo;

$insQry = "insert into tbl_studentregistration(stud_name,stud_email,stud_uname,stud_password,category_id,stud_photo)
values('".$name."','".$email."','".$uname."','".$password."','".$cat."','".$path."')";
if(mysql_query($insQry))
   {
            echo "true";
            
   }
   else{
      echo "false";
     }




?>