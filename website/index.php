<?php
$hostname = "mysql";
$username = "root";
$password = "1234";
 

if(function_exists('mcrypt_encrypt')) {
    echo "mcrypt is loaded!";
} else {
    echo "mcrypt isn't loaded!";
}

echo json_encode(array('one' => 1));
var_dump(json_decode('{"one":1}', true));

try {
    $dbh = new PDO("mysql:host=$hostname;dbname=mysql", $username, $password);
    echo "Connected to database"; // check for connection
    }
catch(PDOException $e)
    {
    echo $e->getMessage();
    }
?>