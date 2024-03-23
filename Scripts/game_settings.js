let groups = [
    [
        "muse", "bibi", "lilywhite", "printemps", "arise", "solo", "other" 
    ],
    [
        "aqours", "azalea", "cyaron", "guiltykiss", "saintsnow", "solo", "other" 
    ],
    [
        "nijigasaki", "azuna", "diverdiva", "qu4rtz", "r3birth", [
            "ayumu", "kasumi", "shizuku", "karin", "ai", "kanata", "setsuna", "emma", "rina", "shioriko", "mia", "lanzhu"
        ] 
    ],
    [
        "liella", "catchu", "kaleidoscore", "5yncri5e", "solo", "other" 
    ],
]

var settings = [
    [
        1, 1, 1, 1, 1, 1, 1
    ],
    [
        1, 1, 1, 1, 1, 1, 1
    ],
    [
        1, 1, 1, 1, 1, [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1     
        ]
    ],
    [
        1, 1, 1, 1, 1, 1
    ]
];


async function createSettings() {
    return new Promise((resolve, reject) => {
        $(document).ready(function() {
            for (let i = 0; i < 4; i++) {
                $("<div>", {
                    "class": "group-box",
                    "id": "group-box--" + groups[i][0],
                }).appendTo("#panel-box");

                $("<div>", {
                    "class": "option-box option-box--main",
                    "id": "option-box--"+groups[i][0]
                }).appendTo("#group-box--"+groups[i][0]);
                
                $("<img>", {
                    "src": "../Images/Icons/"+ groups[i][0]+".png", 
                    "alt": "", 
                    "id": groups[i][0]+"_img", 
                    "draggable": "false",
                    "class": "option_image option_image--main"
                }).appendTo("#option-box--"+groups[i][0]);

                $("<div>", {
                    "class": "group-settings-box"
                }).appendTo("#group-box--"+groups[i][0]);
                
                $('<p class="option_text">Sub-units:</p>').appendTo(".group-settings-box:last");
                $('<div class="subunit-box"></div>').appendTo(".group-settings-box:last");
                
                for (let j = 0; j < 3; j++) {
                    $('<div class="option-box option-box--subunit"><img src="../Images/Icons/'+ groups[i][j+1]+'.png" draggable="false" alt="" id="'+ groups[i][j+1]+'_img" class="option_image"></div>').appendTo(".subunit-box:last")
                }
                
                if(i!=3){ //If the group isnt liella skip
                    $('<div class="option-box option-box--subunit"><img src="../Images/Icons/'+ groups[i][4]+'.png" draggable="false" alt="" id="'+ groups[i][4]+'_img" class="option_image"></div>').appendTo(".group-settings-box:last")
                }

                $('<div class="subunit-box"></div>').appendTo(".group-settings-box:last");

                if(i==2){ //nijigasaki has a different display
                    createNijigasakiSettings();
                    continue;
                }

                $("<div>", {
                    "class": "option-box solo-box",
                }).appendTo(".subunit-box:last");

                $('<input type="checkbox" id="'+groups[i][0]+'-solo" class="solo"><p class="label--solo">Solo Songs</p>').appendTo(".solo-box:last");

                $("<div>", {
                    "class": "option-box solo-box",
                }).appendTo(".subunit-box:last");

                $('<input type="checkbox" id="'+groups[i][0]+'-other" class="other"><p class="label--other">Other Songs</p>').appendTo(".solo-box:last");
                
            }
            resolve();
        })
    });
}

function createNijigasakiSettings(){
    for (let j = 0; j < 12; j++) {
        $("<div>", {
            "class": "nijigasaki-option",
            "id": groups[2][5][j],
        }).appendTo(".subunit-box:last");
        $('<img src="../Images/Icons/'+groups[2][5][j]+'.png" draggable="false" alt="" id="'+groups[2][5][j]+'_img" class="nijigasaki-solo_image">').appendTo(".nijigasaki-option:last");
    }
}


function loadLocalSettings() {
    if (localStorage.getItem("localSettings") === null) { //get settings from localstorage
        localStorage.setItem('localSettings', JSON.stringify(settings));
    }else{
        settings = JSON.parse(localStorage.getItem('localSettings'))
    }
    console.table(settings);

    for (let i = 0; i < 4; i++) { 
        if(i == 2){ //loading all groups except nijigasaki
            continue;
        } 
        settings[i].forEach((name, index) => {
            if(name == 0){
                $("#"+groups[i][index].toString()+"_img").css("filter", "brightness(50%)");
            }else if (name == 1 && (groups[i][index] == "other" || groups[i][index] == "solo") ){
                $("#"+groups[i][0]+"-"+groups[i][index]).prop("checked", true);
            }
        });
    }
    settings[2].forEach((name, index) => { //loading nijigasaki subunits 
        if(name == 0){
            $("#"+groups[2][index].toString()+"_img").css("filter", "brightness(50%)");
        }
    });
    settings[2][5].forEach((name, index) => { //loading nijigasaki solos
        if(name == 0){
            $("#"+groups[2][5][index].toString()+"_img").css("filter", "brightness(50%)");
            $("#"+groups[2][5][index]).css("background-color", "#997F42");
        }
    });

}



function updateGroupSettings(set){
    settings[set[0]][set[1]] = settings[set[0]][set[1]]?0:1
    localStorage.setItem('localSettings', JSON.stringify(settings));
}

function updateNijigasakiSoloSettings(index) {
    settings[2][5][index] = settings[2][5][index]?0:1
    localStorage.setItem('localSettings', JSON.stringify(settings));
}

function updateInputSettings(group_id, song_type) {
    var settingIndex = 0;
    for (let i = 0; i < groups[group_id].length; i++) {
        if(groups[group_id][i] == song_type){
            settingIndex = i;
        }
    }
    settings[group_id][settingIndex] = settings[group_id][settingIndex]?0:1
    localStorage.setItem('localSettings', JSON.stringify(settings));
}

function getGroupSetting(group_name){
    var group_setting = [];
    for (let i = 0; i < 4; i++) {
        groups[i].forEach((name, index) => {
            if(group_name == name){
                group_setting[0] = i; //Group identifier
                group_setting[1] = index; //Subunit identifier      
            }
        });
    }    
    return group_setting; 
}

function getNijigasakiSoloSettings(name) {
    for (let i = 0; i < 12; i++) {
        if(name == groups[2][5][i]){ //the setting for the 12 nijigasaki
            return i;
        }
    }
}
