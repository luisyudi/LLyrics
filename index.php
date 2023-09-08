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


<!--
            <div class="group-box" id="group-box-aqours">
                <div class="option-box option-box-main">
                    <img src="../Images/Icons/.png" alt="" class="option-image option-image-main">
                </div>
                <div class="group-settings-box">
                    <p class="option-text">Subunits:</p>
                    <div class="subunit-box">
                        
                    </div>
                    <div class="option-box">
                        <img src="../Images/Icons/saintsnow.png" alt="" class="option-image">
                    </div>
                    <div class="subunit-box">
                        <div class="option-box solo-box">
                            <input type="checkbox">
                            <p class="option-solo">Solo Songs</p>
                        </div>
                        <div class="option-box solo-box">
                            <input type="checkbox">
                            <p class="option-other">Other</p>
                        </div>
                    </div>
                </div> 
            </div>