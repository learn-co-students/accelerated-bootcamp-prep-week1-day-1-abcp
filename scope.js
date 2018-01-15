function setSpeciesVariable() {
  var species = "dog";
}

function dogInfo(){
  name = "Fido";
  console.log("Species is " + species); //Species is cat
  console.log("Name is " + name);       //Name is Fido
}

setSpeciesVariable();
dogInfo();

function setSpeciesVariable() {
  species = "cat"
}

function catInfo() {
  var name = "Felix"
  var mood = "sleepy"
  console.log("Species is " + species);  //Species is cat
  console.log("Name is " + name);        //Name is Felix
  console.log("Mood is " + mood)         //Mood is sleepy
}

setSpeciesVariable();
catInfo();

/*
When setSpeciesVariable is called, the species varible inside that function
is a local varible that is only accessible inside the scope of that function
when it is declared with a var keyword when we tried to set var = "dog"

The way to make it into a global variable is to declare the variable
without any key words. species = "cat" would be a global variable.
And the function needs to be called for the variable to be global.

When dogInfo is called, the species will be cat byt the name is still Fido.

Notice how the name = "Fido" is also a global variable. But the value of name
is changed inside catInfo and it gets a new value.
*/
