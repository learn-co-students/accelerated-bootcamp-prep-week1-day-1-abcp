function setSpeciesVariable() {
  var species = "dog";
}

function dogInfo(){
  name = "Fido";
  console.log("Species is " + species);
  console.log("Name is " + name);
}

setSpeciesVariable();
dogInfo();

Output:
Species is species
Name is Fido

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

Output:
Species is cat
Name is Felix
Mood is sleepy
