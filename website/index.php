<!DOCTYPE html>
<html>
<head>
	<title>dockerstuff</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
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
	<script type="text/javascript" src="js/app.js"></script>
</body>
</html>
