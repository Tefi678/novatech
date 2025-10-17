<?php
$conex = mysqli_connect("localhost", "root", "", "novatech");

if (!$conex) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
