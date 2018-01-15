function outerFunction() {
  var innerVariable = "I'm sort of a secret.";
  console.log(innerVariable);
  
  function innerFunction()
  {
    var inaccessible = "Nothing can touch me.";
    innerVariable = "Now, You can touch me.";
    console.log("This is from innerFunction:(innerVariable): " + innerVariable);
    console.log("This is from innerFunction:(inaccessible): " + inaccessible);
  }
  
  innerFunction();
  return "This is from OuterFunction: " + innerVariable;
}

outerFunction();


