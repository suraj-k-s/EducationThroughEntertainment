<?php


    header("Access-Control-Allow-Origin:*");
    header("Access-Control-Allow-Methods:GET,POST");
    header("Access-Control-Allow-Headers:*");

    $con = mysql_connect("localhost","root","") or die("error in connection");
    $db = mysql_select_db("db_ete",$con) or die("error in db");




?>