// highs.js - High score and scoreboard implementation test
var highScores = []; // high score array for scoreEntry objects

class scoreEntry {
  constructor(playerName, highScore, guessedWords) {
    this.name = playerName;
    this.hscore = highScore;
    this.gwords = guessedWords;
  }
}

function convertToCSV(inputArray) {
  var finalString = "";
  for (var i = 0; i < inputArray.length; i++) {
    finalString = finalString +inputArray[i];
    if (i < inputArray.length - 1) {
      finalString = finalString + ",";
    }
  }
  return finalString;
}

function convertToArray(inputCSV) {
  var finalArray = inputCSV.split(",");
  return finalArray;
}

function CSVAutoTest() {
  // "automated" test to check if the CSV function returns the correct values
  var randomArray = ["Andrus", "Kalev", "Sulev", "Jaanus", "Marko", "Gunnar"];
  var expected = "Andrus,Kalev,Sulev,Jaanus,Marko,Gunnar";
  var converted = convertToCSV(randomArray);
  var converted2 = convertToArray(expected);
  if (expected == converted) {
    console.log("convertToCSV: successful");
  } else {console.log("convertToCSV: expected " + expected + "\nbut instead returned was " + converted);}
    console.log("convertToArray: expected \n" + randomArray + "\nreturned\n" + converted2 + "\nDo they look similar?");
  return true;
}

CSVAutoTest();

function checkStorage() {
  // checks if the storage is in the standard form for this Typer
}

function populate() {
  // populates high score data for usage, from cache to memory

}

function save() {
  // saves high score data from memory to cache
}
