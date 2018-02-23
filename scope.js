function setSpeciesVariable() {
  var species = "dog";
}

function dogInfo(){
  name = "Fido";
  console.log("Species is " + species);
  console.log("Name is " + name);
}

setSpeciesVariable(); //undefined
dogInfo(); //error species is not defined

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

setSpeciesVariable(); //undefined
catInfo(); // species is cat, name is felix, mood is sleepy
