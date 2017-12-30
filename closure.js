function outerFunction() {
  var innerVariable = "I'm sort of a secret.";

  return function innerFunction() {
    var inaccessible = "Nothing can touch me.";
    return innerVariable;
  }
}

var outerScope = outerFunction;

var innerScope = outerScope();

innerScope();


