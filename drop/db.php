<?php
$dbhost							= "tt-graph.dot5hostingmysql.com";
$dbuser							= "webninjataylor";
$dbpass							= "P@ssw0rd123";
$dbname							= "sample";

$conn = mysql_connect($dbhost, $dbuser, $dbpass) or die ("Error connecting to mysql");
mysql_select_db($dbname);
?>