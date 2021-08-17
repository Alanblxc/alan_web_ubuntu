<?php
$ip=$_GET["ip"];
$ip=str_replace("|","",$ip);
$ip=str_replace(";","",$ip);
$ip=str_replace("&","",$ip);
    $shell = "ping $ip";
    echo '<pre>';
    system($shell, $status);
   echo '</pre>' ;
?>
