<?php

include("../../Connection/Connection.php");
$i = 0;
$j = 0;
$list = array();
$selQry = "select * from tbl_questions p inner join tbl_questionbundle c on p.questionbundle_id=c.questionbundle_id inner join tbl_questionlevel m on m.questionlevel_id=p.questionlevel_id";
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