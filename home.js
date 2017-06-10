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
