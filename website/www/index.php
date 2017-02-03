<?php
$hostname = "mysql";
$username = "root";
$password = "1234";
 
try {
    $dbh = new PDO("mysql:host=$hostname;dbname=mysql", $username, $password);
    echo "Connected to database"; // check for connection
    }
catch(PDOException $e)
    {
    echo $e->getMessage();
    }
?>