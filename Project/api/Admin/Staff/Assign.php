<?php

include("../../Connection/Connection.php");

$request = file_get_contents("php://input");
$data = json_decode($request);
$sf_id = $_POST["staff_id"];
$st_id = $_POST["student_id"];



$insQry = "insert into  tbl_staffassign(staffreg_id,stud_id)
values('".$sf_id."','".$st_id."')";
if(mysql_query($insQry))
   {
            echo "Success";
            
   }
   else{
      echo "Failed";
     }




?>