<?php

include("../../Connection/Connection.php");

    $request = file_get_contents("php://input");
    $data = json_decode($request);
    $category = $data->categoryId[0];
    $subcategory = $data->subCategoryName[0];

    if($category!="" && $subcategory!="")
    {
        $insQry = "insert into tbl_etype_category(entertainment_id,name)values('".$category."','".$subcategory."')";

        if(mysql_query($insQry))
        {
            echo "Success";
        }
        else{
            echo "Failed";
        }
    }



?>