
function load(){
    var temp =  HTMLIndexHeader.replace("%header%",bio.name);
    temp = temp.replace("%sub%",bio.role);
    $('#header-title').append(temp);
    $('#p1').append(bio.about[0]);
    $('#p2').append(bio.about[1]);
}

$(function(){
load();
});

