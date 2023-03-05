<?php

include("../../Connection/Connection.php");

    $request = file_get_contents("php://input");
    $data = json_decode($request);
    $ql = $data->Qlevel[0];

    if($ql!="")
    {
        $insQry = "insert into tbl_questionlevel(questionlevel_name)values('".$ql."')";

        if(mysql_query($insQry))
        {
            echo "Success";
        }
        else{
            echo "Failed";
        }
    }



?>