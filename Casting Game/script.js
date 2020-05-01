window.aelements = ["air", "fire"];
//window.belements = ["beast"];
//create array a-z for quicker searching?
window.bactions = ["ball", "bolt"];
//window.cactions = ["chain", "cone"];


function inputArray() {
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
//    var popUpText =  document.createElement("h1");
//    popUpText.innerHTML = "Spell Failed";
document.getElementById("popup").innerHTML = "Spell Failed";
   console.log("spellfailed")
}

function cspellSuccess() {
    //    var popUpText =  document.createElement("h1");
    //    popUpText.innerHTML = "Spell Failed";
    document.getElementById("popup").innerHTML = "Spell Success";
       console.log("Spell Success")
    }

function clearForm() {
    document.getElementById("spellInput").innerHTML = "";
}