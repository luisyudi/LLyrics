<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../Styles/index.css">
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.7.0.js"></script>    
    
    <title>Home - LLyrics</title>
</head>
<body>
    <header>
        <div id="logo">
            <img id="logoimage" src="Images/logo.png" alt="">
        </div>
        <div id="options-menu">
            <a href="" class="about" id="about">About</a>
        </div>
    </header>

    <div id="main">
        <div id="panel-box">
            <div class="group-box" id="group-box-muse">
                <div class="option-box option-box-main">
                    <img src="../Images/Icons/muse.png" alt="" id="muse-img" class="option-image option-image-main">
                </div>
                <div class="group-settings-box group-settings-box-muse">
                    <p class="option-text">Sub-units:</p>
                    <div class="subunit-box">
                        <div class="option-box option-box-subunit">
                            <img src="../Images/Icons/bibi.png" alt="" id="bibi-img" class="option-image">
                        </div>
                        <div class="option-box option-box-subunit">
                            <img src="../Images/Icons/lilywhite.png" id="lilywhite-img" alt="" class="option-image">
                        </div>
                        <div class="option-box option-box-subunit">
                            <img src="../Images/Icons/printemps.png" alt="" id="printemps-img" class="option-image">
                        </div>
                    </div>
                    <div class="option-box">
                        <img src="../Images/Icons/arise.png" alt="" id="arise-img" class="option-image">
                    </div>
                    <div class="subunit-box">
                        <div class="option-box solo-box">
                            <input type="checkbox" id="muse-solo" class="solo">
                            <p class="option-solo">Solo Songs</p>
                        </div>
                        <div class="option-box solo-box">
                            <input type="checkbox" id="muse-other" class="other">
                            <p class="option-other">Other</p>
                        </div>
                    </div>
                        
                </div>

            </div>

            <div class="group-box" id="group-box-aqours">
                <div class="option-box option-box-main">
                    <img src="../Images/Icons/aqours.png" alt="" id="aqours-img" class="option-image option-image-main">
                </div>
                <div class="group-settings-box">
                    <p class="option-text">Sub-units:</p>
                    <div class="subunit-box">
                        <div class="option-box option-box-subunit">
                            <img src="../Images/Icons/azalea.png" alt="" id="azalea-img" class="option-image">
                        </div>

                        <div class="option-box option-box-subunit">
                            <img src="../Images/Icons/cyaron.png" alt="" id="cyaron-img" class="option-image">
                        </div>

                        <div class="option-box option-box-subunit">
                            <img src="../Images/Icons/guiltykiss.png" alt="" id="guiltykiss-img" class="option-image">
                        </div>
                    </div>
                    <div class="option-box">
                        <img src="../Images/Icons/saintsnow.png" alt="" id="saintsnow-img" class="option-image">
                    </div>
                    <div class="subunit-box">
                        <div class="option-box solo-box">
                            <input type="checkbox" id="aqours-solo" class="solo">
                            <p class="option-solo">Solo Songs</p>
                        </div>
                        <div class="option-box solo-box">
                            <input type="checkbox" id="aqours-other" class="other">
                            <p class="option-other">Other</p>
                        </div>
                    </div>
                </div> 
            </div>

            <div class="group-box" id="group-box-nijigasaki">
                <div class="option-box option-box-main">
                    <img src="../Images/Icons/nijigasaki.png" alt="" id="nijigasaki-img" class="option-image option-image-main">
                </div>
                <div class="group-settings-box">
                    <p class="option-text">Sub-units:</p>
                    <div class="subunit-box">
                        <div class="option-box option-box-subunit">
                            <img src="../Images/Icons/azuna.png" alt="" id="azuna-img" class="option-image">
                        </div>

                        <div class="option-box option-box-subunit">
                            <img src="../Images/Icons/diverdiva.png" alt="" id="diverdiva-img" class="option-image">
                        </div>

                        <div class="option-box option-box-subunit">
                            <img src="../Images/Icons/qu4rtz.png" alt="" id="qu4rtz-img" class="option-image">
                        </div>
                    </div>
                    <div class="option-box">
                        <img src="../Images/Icons/r3birth.png" alt="" id="r3birth-img" class="option-image">
                    </div>
                    <div class="subunit-box">
                        <div class="nijigasaki-option" id="ayumu">
                            <img src="../Images/Icons/ayumu.png" alt="" id="ayumu-img" class="nijigasaki-solo-image">
                        </div>
                        
                        <div class="nijigasaki-option" id="kasumi">
                            <img src="../Images/Icons/kasumi.png" alt="" id="kasumi-img" class="nijigasaki-solo-image">
                        </div>

                        <div class="nijigasaki-option" id="shizuku">
                            <img src="../Images/Icons/shizuku.png" alt="" id="shizuku-img" class="nijigasaki-solo-image">
                        </div>

                        <div class="nijigasaki-option" id="karin">
                            <img src="../Images/Icons/karin.png" alt="" id="karin-img" class="nijigasaki-solo-image">
                        </div>

                        <div class="nijigasaki-option" id="ai">
                            <img src="../Images/Icons/ai.png" alt="" id="ai-img" class="nijigasaki-solo-image">
                        </div>

                        <div class="nijigasaki-option" id="kanata">
                            <img src="../Images/Icons/kanata.png" alt="" id="kanata-img" class="nijigasaki-solo-image">
                        </div>

                        <div class="nijigasaki-option" id="setsuna">
                            <img src="../Images/Icons/setsuna.png" alt="" id="setsuna-img" class="nijigasaki-solo-image">
                        </div>

                        <div class="nijigasaki-option" id="emma">
                            <img src="../Images/Icons/emma.png" alt="" id="emma-img" class="nijigasaki-solo-image">
                        </div>

                        <div class="nijigasaki-option" id="rina">
                            <img src="../Images/Icons/rina.png" alt="" id="rina-img" class="nijigasaki-solo-image">
                        </div>

                        <div class="nijigasaki-option" id="shioriko">
                            <img src="../Images/Icons/shioriko.png" alt="" id="shioriko-img" class="nijigasaki-solo-image">
                        </div>

                        <div class="nijigasaki-option" id="mia">
                            <img src="../Images/Icons/mia.png" alt="" id="mia-img" class="nijigasaki-solo-image">
                        </div>

                        <div class="nijigasaki-option" id="lanzhu">
                            <img src="../Images/Icons/lanzhu.png" alt="" id="lanzhu-img" class="nijigasaki-solo-image">
                        </div>
                    </div>
                </div>
            </div>


            <div class="group-box" id="group-box-liella">
                <div class="option-box option-box-main">
                    <img src="../Images/Icons/liella.png" alt="" id="liella-img" class="option-image option-image-main liella-image">
                </div>
                <div class="group-settings-box group-settings-box-liella">
                    <p class="option-text">Sub-units:</p>
                    <div class="subunit-box">
                        <div class="option-box option-box-subunit">
                            <img src="../Images/Icons/catchu.png" alt="" id="catchu-img" class="option-image">
                        </div>
                        <div class="option-box option-box-subunit">
                            <img src="../Images/Icons/kaleidoscore.png" alt="" id="kaleidoscore-img" class="option-image">
                        </div>
                        <div class="option-box option-box-subunit">
                            <img src="../Images/Icons/5yncri5e.png" alt="" id="5yncri5e-img" class="option-image">
                        </div>
                    </div>
                    <div class="subunit-box">
                        <div class="option-box solo-box">
                            <input type="checkbox" id="liella-solo" class="solo">
                            <p class="option-solo">Solo Songs</p>
                        </div>
                        <div class="option-box solo-box">
                            <input type="checkbox" id="liella-other" class="other">
                            <p class="option-other">Other</p>
                        </div>
                    </div>
                        
                </div>

            </div>
                
                
            </div>
        </div>

        <div class="button"><p class="button-text">Start</p></div>
    </div>

    <script type="text/javascript" src="../Scripts/home.js"></script>    
</body>
</html>