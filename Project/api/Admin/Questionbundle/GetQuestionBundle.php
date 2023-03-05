<?php

include("../../Connection/Connection.php");
$i = 0;
$j = 0;
$list = array();
$selQry = "select * from tbl_questionbundle p inner join tbl_questionlevel c on p.questionlevel_id=c.questionlevel_id inner join tbl_material m on m.material_id=p.material_id";
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