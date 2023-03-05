<?php

include("../../Connection/Connection.php");
$i = 0;
$j = 0;
$list = array();
$selQry = "select * from tbl_package p inner join tbl_category c on p.category_id=c.category_id";
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