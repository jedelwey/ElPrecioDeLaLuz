<?php
header('Access-Control-Allow-Origin: *');
require('index.php');
$general = general();
echo $general;
?>