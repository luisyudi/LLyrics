<?php

$url = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
 
switch ($url) {
    case '/':
        include 'Pages/home.php';
        break;

    case '/about':
        include 'Pages/about.php';
        break;
    
    default:
        # code...
        break;
}

?>
