<?php

$host = "127.0.0.1";
$dbuser = "root";
$dbpwd = "";


$conn = new mysqli($host, $dbuser, $dbpwd);

if(!$conn) die("Opps! Database connection failed!!!!");