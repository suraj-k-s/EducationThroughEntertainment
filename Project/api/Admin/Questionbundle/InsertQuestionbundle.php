<?php

include("../../Connection/Connection.php");

    $request = file_get_contents("php://input");
    $data = json_decode($request);
    $category = $data->mcaptionId[0];
    $subcategory = $data->mlevel[0];
    $no = $data->No[0];
    $name = $data->Name[0];

    if($category!="" && $subcategory!="")
    {
        $insQry = "insert into tbl_questionbundle(questionlevel_id,material_id,no_ofquestions,name)values
        ('".$subcategory."','".$category."','".$no."','".$name."')";
       

        if(mysql_query($insQry))
        {
            echo "Success";
        }
        else{
            echo "Failed";
        }
       
    }
 


?>