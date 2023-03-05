<?php

include("../Connection/Connection.php");

    $cat = $_GET["id"];

    if($cat!="")
    {
        $delQry = "delete from tbl_studentregistration where stud_id ='".$cat."'";
        if(mysql_query($delQry))
        {
            echo "Success";
        }
        else{
            echo "Failed";
        }
    }



?>