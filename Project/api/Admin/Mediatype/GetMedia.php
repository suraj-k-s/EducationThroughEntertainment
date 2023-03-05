<?php

include("../../Connection/Connection.php");
$i = 0;
$j = 0;
$list = array();
$selQry = "select * from tbl_etype_category p inner join tbl_entertainmenttype c on p.entertainment_id=c.entertainment_id";
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