<!DOCTYPE html>
<html>
<head>
	<title>dockerstuff</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
	<?php
	$hostname = "mysql";
	$username = "project";
	$password = "project";
	try {
	    $dbh = new PDO("mysql:host=$hostname;dbname=project", $username, $password);
	    echo "Connected to database";
	}
	catch(PDOException $e) {
	    echo $e->getMessage();
	}
	?>
	<script type="text/javascript" src="js/app.js"></script>
</body>
</html>
