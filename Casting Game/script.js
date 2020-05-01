window.aelements = ["air", "fire"];
//window.belements = ["beast"];
//create array a-z for quicker searching?
window.bactions = ["ball", "bolt"];
//window.cactions = ["chain", "cone"];


function inputArray() {
event.preventDefault();
var x = document.getElementById("spellInput").value;
window.spellInputArray = x.split(" ");
console.log(window.spellInputArray);
wordOneMatch();
}

function wordOneMatch() {
    if(window.spellInputArray[0] === "c") {
        cwordTwoMatch();
    } else {
        spellFailure();
    }
}

function cwordTwoMatch() {
    if(window.aelements.includes(window.spellInputArray[1])) {
        cwordThreeMatch();
    } else {
        spellFailure();
    }
}

function cwordThreeMatch() {
    if(window.bactions.includes(window.spellInputArray[2])) {
        cspellSuccess();
    } else {
        spellFailure();
    }
}

function spellFailure() {
    console.log("spellfailed");
    showSpellFailure();
    clearForm();
}

function cspellSuccess() {
    console.log("Spell Success");
    showSpellSuccess();
        clearForm();
    }

function clearForm() {
    document.getElementById("spellInput").value = ""; //doesnt work
}

function showSpellSuccess() {
    document.getElementById("popup").style.transition = "opacity 2s linear";
    document.getElementById("popup").style.visibility = "visible";
    document.getElementById("popup").style.opacity = 1;
    console.log("fade in");
    document.getElementById("popup").innerHTML = "Spell Success";
    hideSpellResult();
}

function showSpellFailure() {
    document.getElementById("popup").style.transition = "opacity 2s linear";
    document.getElementById("popup").style.visibility = "visible";
    document.getElementById("popup").style.opacity = 1;
    console.log("fade in");
    document.getElementById("popup").innerHTML = "Spell Failed";
    hideSpellResult();
    
}

function hideSpellResult() {
    document.getElementById("popup").style.transition = "visibility 0s 2s, opacity 2s linear";
    document.getElementById("popup").style.visibility = "hidden";
    document.getElementById("popup").style.opacity = 0;
    console.log("fade out");
}
//setTimeout(function(){ alert("Hello"); }, 3000);