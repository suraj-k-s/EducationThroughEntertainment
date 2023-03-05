<?php

include("../../Connection/Connection.php");

$request = file_get_contents("php://input");
$data = json_decode($request);

$uid = $_GET["uid"];
$qid = $_GET["qid"];
$answer = $_GET["answer"];
$answerStatus = "";

$selQry = "select * from tbl_questionanswer where question_id='".$qid."' and 	right_answer = '".$answer."'";
$row = mysql_query($selQry);
$count = mysql_num_rows($row);

if($count>0)
{
    $answerStatus = "Correct";
}
else{
    $answerStatus = "Incorrect";
}

$ins = "insert into tbl_student_answer(student_id,question_id,student_answer,answer_status)values('".$uid."','".$qid."','".$answer."','".$answerStatus."')";
if(mysql_query($ins))
{
    echo $answerStatus;
}

?>