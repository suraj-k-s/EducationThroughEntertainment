<?php

include("../../Connection/Connection.php");

    $request = file_get_contents("php://input");
    $data = json_decode($request);
    $category = $data->category[0];

    if($category!="")
    {
        $insQry = "insert into tbl_category(category_name)values('".$category."')";

        if(mysql_query($insQry))
        {
            echo "Success";
        }
        else{
            echo "Failed";
        }
    }



?>