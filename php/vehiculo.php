<?php
header('Access-Control-Allow-Origin: *');
require('index.php');
$vehiculo = vehiculo();
echo $vehiculo;

?>