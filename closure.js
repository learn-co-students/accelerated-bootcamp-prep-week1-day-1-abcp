function parent() {
  var innerVariable = "Go to your room!";
  console.log(inaccessible)
  return function childe() {
    var inaccessible = "**sneaks out the bedroom window**";
    return innerVariable;
  }
}

var outerScope = parent;

var innerScope = outerScope();

innerScope();


//followed this during lecture but didn't push to GitHub
