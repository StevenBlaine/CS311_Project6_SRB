// function to attach events to buttons
addShowLibEvent();
addResetLibEvent();

// set event for show button 
function addShowLibEvent(){
    showLibButton.addEventListener('click', compileLib);
}

// set event for reset button
function addResetLibEvent(){
    resetButton.addEventListener('click', clearLib);
}

// clone original form
var origContainer = document.getElementById("container");
var toRestore = origContainer.innerHTML;

function compileLib() {
    let lib_pluralNoun1 = document.getElementById("pluralNoun1").value;
    let lib_adjective1 = document.getElementById("adjective1").value;
    let lib_adjective2 = document.getElementById("adjective2").value;
    let lib_pluralNoun2 = document.getElementById("pluralNoun2").value;
    let lib_adjective3 = document.getElementById("adjective3").value;
    let lib_bodyPart = document.getElementById("bodyPart").value;
    let lib_adverb = document.getElementById("adverb").value;
    let lib_gerund = document.getElementById("gerund").value;
    let lib_adjective4 = document.getElementById("adjective4").value;
    let lib_adjective5 = document.getElementById("adjective5").value;
    
    let madlib = "Good vacations are worth their weight in "+lib_pluralNoun1.fontcolor("red");
    madlib+=". A/an "+lib_adjective1.fontcolor("red")+" summer vacation for you and your "+lib_adjective2.fontcolor("red");
    madlib+=" family is to visit the Rocky "+lib_pluralNoun2.fontcolor("red");
    madlib+=" in Colorado. The first time you see these "+lib_adjective3.fontcolor("red");
    madlib+=" mountains, your "+lib_bodyPart.fontcolor("red")+" will thump "+lib_adverb.fontcolor("red");
    madlib+=". If you are into camping, fishing, or "+lib_gerund.fontcolor("red");
    madlib+=", visit the Grand Canyon in Arizona and enjoy a land of "+lib_adjective4.fontcolor("red");
    madlib+=" landscapes and rich "+lib_adjective5.fontcolor("red")+" history.";

    document.getElementById("answers").innerHTML = madlib;
    addShowLibEvent();
    addResetLibEvent();
}

function clearLib() {
    document.getElementById("container").innerHTML = "";
    document.getElementById("container").innerHTML = toRestore;
    addShowLibEvent();
    addResetLibEvent();
}