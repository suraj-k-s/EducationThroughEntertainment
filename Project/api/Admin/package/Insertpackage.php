<?php

include("../../Connection/Connection.php");

    $request = file_get_contents("php://input");
    $data = json_decode($request);
    $category = $data->categoryId[0];
    $subcategory = $data->subCategoryName[0];
    $duration = $data->duration[0];
    $p = $data->package[0];

    if($category!="" && $subcategory!="" &&$duration!="" &&$p!="")
    {
        $insQry = "insert into tbl_package(category_id,package_amount,duration,package_name)values('".$category."','".$subcategory."','".$duration."','".$p."')";
       
        if(mysql_query($insQry))
        {
            echo "Success";
            
        }
        else{
            echo "Failed";
        }
    }



?>