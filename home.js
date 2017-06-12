var desciptionState = false;
function toggleDescription() {
    if (desciptionState == false) {
      document.getElementById("description").style.display = "block";
      desciptionState = true;
    } else {
      document.getElementById("description").style.display = "none";
      desciptionState = false;
    }
}

var scoreState = false;
function toggleScore() {
    if (scoreState == false) {
      document.getElementById("scoreList").style.display = "block";
      scoreState = true;
    } else {
      document.getElementById("scoreList").style.display = "none";
      scoreState = false;
    }
}
