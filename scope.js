function setSpeciesVariable() {
  var species = "dog";
}

function dogInfo(){
  name = "Fido";
  console.log("Species is " + species); // error
  console.log("Name is " + name); // "Name is Fido"
}

setSpeciesVariable();
dogInfo();

function setSpeciesVariable() {
  species = "cat"
}

function catInfo() {
  var name = "Felix"
  var mood = "sleepy"
  console.log("Species is " + species);
  console.log("Name is " + name);
  console.log("Mood is " + mood)
}

setSpeciesVariable();
catInfo();

