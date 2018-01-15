function parent() {
  var innerVariable = "Go to your room!";
  console.log(inaccessible) // inaccessible is not defined - will break the function
  return function child() {
    var inaccessible = "**sneaks out the bedroom window**";
    return innerVariable;
  }
}

var outerScope = parent;

var innerScope = outerScope();

innerScope();

var childFunction = parent();
