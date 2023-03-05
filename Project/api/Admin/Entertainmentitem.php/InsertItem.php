<?php

include("../../Connection/Connection.php");

$request = file_get_contents("php://input");
$data = json_decode($request);
$category = $_POST["category"];;
$entertainment = $_POST["entertainment"];;
$type = $_POST["type"];;


$video_name = $_FILES["file"]["name"];
$video_tmp_name = $_FILES["video"]["tmp_name"];
move_uploaded_file($video_tmp_name,"../../Files/MaterialVideo/".$video_name);

$path = "http://localhost/EducationThroughEntertainment/Project/api/Files/MaterialVideo/".$video_name;

$insQry = "insert into tbl_entertainmetfile(category_id,entertainment_id,etype_id,file)
values('".$category."','".$entertainment."','".$type."','".$path."')";
if(mysql_query($insQry))
   {
            echo "Success";
            
   }
   else{
      echo "Failed";
     }




?>