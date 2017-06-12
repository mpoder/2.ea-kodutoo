var desciptionState = false;
function toggleDescription() {
    if (desciptionState === false) {
      document.getElementById("description").style.display = "block";
      desciptionState = true;
    } else {
      document.getElementById("description").style.display = "none";
      desciptionState = false;
    }
}

var scoreState = false;
function toggleScore() {
    if (scoreState === false) {
      document.getElementById("scoreList").style.display = "block";
      scoreState = true;
    } else {
      document.getElementById("scoreList").style.display = "none";
      scoreState = false;
    }
}

if (localStorage.getItem("allScores")) {
  highScores = JSON.parse(localStorage.getItem("allScores"));
}

if (localStorage.getItem("currentPlayer") !== "") {
  var tempPlayer = JSON.parse(localStorage.getItem("currentPlayer"));
  tempclass = new scoreEntry(tempPlayer.name, tempPlayer.score, tempPlayer.guessed_words);
  highScores.push(tempclass);
  localStorage.setItem("currentPlayer", "");
  localStorage.setItem("allScores", JSON.stringify(highScores));
}

function getName(arrayID) {
  return highScores[arrayID].name;
}

function getScore(arrayID) {
  return highScores[arrayID].hscore;
}
