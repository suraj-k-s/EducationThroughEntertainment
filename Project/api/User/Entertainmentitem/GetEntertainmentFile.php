<?php

include("../../Connection/Connection.php");
$i = 0;
$j = 0;
$list = array();



$eid = $_GET["eid"];
$tid = $_GET["tid"];




$selQry = "select * from tbl_entertainmetfile p
 inner join tbl_category c on p.category_id=c.category_id 
 inner join tbl_entertainmenttype m on m.entertainment_id=p.entertainment_id 
 inner join tbl_etype_category n on n.etype_id=p.etype_id where p.entertainment_id='".$eid."' and p.etype_id	='".$tid."'";
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