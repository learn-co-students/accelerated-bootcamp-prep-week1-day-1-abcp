function parent() {
  var innerVariable = "Go to your room!";
  //console.log(inaccessible)
  return function childe() {
    var inaccessible = "**sneaks out the bedroom window**";
    return innerVariable;
  }
}

var outerScope = parent;

var innerScope = outerScope();

innerScope();

/*
The analogy goes like:
scope is to variable as closure is to function.
The parent doesn't know what is inside the child
but the child knows about the parent.
To get innerVariable to print out that is inside the child,
parernt()() or chain the function to a variable
and then call the variable as if it were a function.

var printInnerVariable = parent()
printInnerVariable()

*/
