<?php

include("../../Connection/Connection.php");
$id = $_GET["id"];
$i = 0;
$j = 0;
$list = array();
$selQry = "select * from tbl_subcategory where category_id='".$id."'";
$row = mysql_query($selQry);
while($data = mysql_fetch_assoc($row))
{
    $i++;
    $list[] =  $data;
    $list[$j]['id'] = $i;
    $j++;
}

echo json_encode($list);


?>