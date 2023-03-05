<?php

include("../../Connection/Connection.php");

    $request = file_get_contents("php://input");
    $data = json_decode($request);
    $Et = $data->Etype[0];

    if($Et!="")
    {
        $insQry = "insert into tbl_entertainmenttype(entertainment_type)values('".$Et."')";

        if(mysql_query($insQry))
        {
            echo "Success";
        }
        else{
            echo "Failed";
        }
    }



?>