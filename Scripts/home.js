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

if (localStorage.getItem("localSettings") === null) {
    localStorage.setItem('localSettings', JSON.stringify(settings));
}else{
    settings = JSON.parse(localStorage.getItem('localSettings'))
}

function loadLocalSettings() {
    for (let i = 0; i < 4; i++) { //loading all groups except nijigasaki
        if(i == 2){
            continue;
        } 
        settings[i].forEach((name, index) => {
            if(name == 0){
                $("#"+groups[i][index].toString()+"-img").css("filter", "brightness(50%)");
            }else if (name == 1 && (groups[i][index] == "other" || groups[i][index] == "solo") ){
                $("#"+groups[i][0]+"-"+groups[i][index]).prop("checked", true);
                console.log("#"+groups[i][0]+"-"+groups[i][index])
            }
        });
    }
    settings[2].forEach((name, index) => { //loading nijigasaki subunits 
        if(name == 0){
            $("#"+groups[2][index].toString()+"-img").css("filter", "brightness(50%)");
        }
    });
    settings[2][5].forEach((name, index) => { //loading nijigasaki solos
        if(name == 0){
            $("#"+groups[2][5][index].toString()+"-img").css("filter", "brightness(50%)");
            $("#"+groups[2][5][index]).css("background-color", "#997F42");
        }
    });
}
loadLocalSettings();

var $elems = $('#panelbox').find('img');
var elemsCount = $elems.length;
var loadedCount = 0;

$elems.on('load', function () {
    loadedCount++;

    if (loadedCount == elemsCount) {
        
    }
});

$("input").on("click", function() {
    var type = $(this).attr("class");
    var group = $(this).attr("id").split("-");
    for (let i = 0; i < 4; i++) {
        if(group[0] == groups[i][0]){
            group = i;
        }
    }
    updateByInputSettings(group, type);
});


$( ".option-image" ).on( "click", function() {
    var set = getGroupSettings($(this).attr("id"));
    if(settings[set[0]][set[1]]){
        $(this).css("filter", "brightness(50%)");
    }else{
        $(this).css("filter", "brightness(100%)");
    }
    
    updateGroupSettings(set);
});

$( ".nijigasaki-option" ).on( "click", function() {
    var name = $(this).attr("id");
    var index = getNijigasakiSoloSettings(name);

    if(settings[2][5][index]){
        $("#"+name+"-img").css("filter", "brightness(50%)");
        $(this).css("background-color", "#997F42");
    }else{
        $("#"+name+"-img").css("filter", "brightness(100%)");
        $(this).css("background-color", "#FBD06C");
    }
    
    updateNijigasakiSoloSettings(index);
    console.table(settings);
});


function updateGroupSettings(set){
    settings[set[0]][set[1]] = settings[set[0]][set[1]]?0:1
    localStorage.setItem('localSettings', JSON.stringify(settings));
}

function updateNijigasakiSoloSettings(index) {
    settings[2][5][index] = settings[2][5][index]?0:1
    localStorage.setItem('localSettings', JSON.stringify(settings));
}

function updateByInputSettings(group, type) {
    for (let i = 0; i < groups[group].length; i++) {
        if(groups[group][i] == type){
            settingIndex = i;
        }
    }
    settings[group][settingIndex] = settings[group][settingIndex]?0:1
    localStorage.setItem('localSettings', JSON.stringify(settings));
}

function getGroupSettings(group){
    var setting = [];
    group = group.slice(0, group.length-4)
    for (let i = 0; i < 4; i++) {
        groups[i].forEach((name, index) => {
            if(name == group){
                setting[0] = i; //Group identifier
                setting[1] = index; //Subunit identifier      
            }
        });
    }
    return setting;   
}

function getNijigasakiSoloSettings(name) {
    for (let i = 0; i < 12; i++) {
        if(name == groups[2][5][i]){ //the setting for the 12 nijigasaki
            return i;
        }
    }
}