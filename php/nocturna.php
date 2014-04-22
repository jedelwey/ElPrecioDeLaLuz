<?php
header('Access-Control-Allow-Origin: *');
require('index.php');
$nocturna = nocturna();
echo $nocturna;

?>