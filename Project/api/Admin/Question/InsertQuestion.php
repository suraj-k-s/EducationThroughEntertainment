<?php

include("../../Connection/Connection.php");

$request = file_get_contents("php://input");
$data = json_decode($request);
$study = $_POST["study"];;
$desc = $_POST["desc"];;
$caption = $_POST["caption"];;


$video_name = $_FILES["video"]["name"];
$video_tmp_name = $_FILES["video"]["tmp_name"];
move_uploaded_file($video_tmp_name,"../../Files/MaterialVideo/".$video_name);

$path = "http://localhost/EducationThroughEntertainment/Project/api/Files/MaterialVideo/".$video_name;

$insQry = "insert into tbl_questions(questionlevel_id,questionbundle_id,question,qimage)
values('".$study."','".$caption."','".$desc."','".$path."')";


if(mysql_query($insQry))
   {
            echo "Success";
            
   }
   else{
      echo "Failed";
     }




?>