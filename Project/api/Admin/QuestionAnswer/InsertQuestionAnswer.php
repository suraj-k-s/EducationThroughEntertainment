<?php

include("../../Connection/Connection.php");

$request = file_get_contents("php://input");
$data = json_decode($request);

$question_id = $_POST["question_id"];
$right_answer = $_POST["right_answer"];
$wrong_answer1 = $_POST["wrong_answer1"];
$wrong_answer2 = $_POST["wrong_answer2"];
$wrong_answer3 = $_POST["wrong_answer3"];


$insQry = "insert into  tbl_questionanswer (question_id,right_answer,wrong_answer1,wrong_answer2,wrong_answer3)
values('".$question_id."','".$right_answer."','".$wrong_answer1."','".$wrong_answer2."','".$wrong_answer3."')";


if(mysql_query($insQry))
   {
            echo "Success";
            
   }
   else{
      echo "Failed";
     }




?>