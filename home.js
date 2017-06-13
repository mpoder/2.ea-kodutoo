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
      populateTable();
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

/*function populateTable() {
  for (var cnt = 0; cnt < highScores.length; cnt++)
  document.getElementById("ScoreData").innerHTML += "<tr><td>" + highScores[cnt].name + "</td><td>" + highScores[cnt].hscore + "</td><td></td></tr>";

}*/
/*function populateTable(){
  var table = "<table>";

  	for (var i=0; i< highScores.length; i++) {
  		table = table + "<tr><td>"+ highScores[i].name+"</td><td>"+ highScores[i].hscore+"</td><td>"+ highScores[i].gwords +"</td></tr>";
  	}
  table = table + "</table>";

  document.getElementById('ScoreData').innerHTML = table;
}*/

function populateTable() {
  var result = "";
  for (var cnt = 0; cnt < highScores.length; cnt++) {
    result = result + "<br>Nimi: " + highScores[cnt].name + "<br>Skoor: " + highScores[cnt].hscore + "<br>Sõnad: " + highScores[cnt].gwords;
    document.getElementById("scoreList").innerHTML = result;
  }
}

/*function populateTable() {
  results = "";
  results = "<table>";
    for (var cnt = 0; cnt < highScores.length; cnt=cnt+2) {
    results += "<tr><td>" + highScores[cnt].name + "</td>";
      if(cnt+1 < highScores.length){
        results += "<td>" + highScores[cnt+1].hscore + "</td></tr>";
      } else {
        results += "<td></td></tr>";
      }
    }
  results += "<table><br /><br />";
  var div = document.getElementById("ScoreData");
  div.innerHTML = results;
}*/

function getName(arrayID) {
  return highScores[arrayID].name;
}

function getScore(arrayID) {
  return highScores[arrayID].hscore;
}
