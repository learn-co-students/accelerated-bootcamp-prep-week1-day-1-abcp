# Data Types, Variables, Functions and Scope

In this lecture, we'll cover some of the basic principles of JavaScript programming.
These concepts will lay the foundation for you to build and execute complex
JavaScript programs. We'll learn about JS data types, variables, functions and scope.
We'll also cover how to execute your code both in the browser console and using Node; and we'll cover the basic concepts of testing our code and learn how to execute those tests. Lastly, we'll introduce some helpful resources that you can use to continue learning and take deeper dives on your own and with your classmates.

## Part I: Intro to Data Types

Data types are pretty much what they sound like––different classifications of data in a programming language.

Data types in JS include:

* Number
* String
* Boolean
* Array
* Object

We'll learn much more about each data type later on. For now, we should understand the following about the first three data type:

* Number: Exactly what you think it is. Can be written with or without decimal points.
* String: Text characters enclosed in single or double quotes.
* Boolean: The values `true` or `false`.

Why is this important? Well, different types of data will be treated differently by JavaScript. The type of data that you are manipulating or operating on comes with certain rules that dictate what you can do with that data. In order to see these rules in action, we first have to understand the concept of declaring and assigning variables.

### Resouces:
* [Data Structures - Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
* [Data Structures - W3 Schools](https://www.w3schools.com/js/js_datatypes.asp)

## Part II: Declaring and Assigning Variables

### Why Do We Need Variables?

Imagine you are writing a very important program to execute very important mathematicaly operations––let's say an accounting application for someone super important like Beyonce.
Beyonce wants to know how much money she is making as the highest paid woman in music.

First, your program needs to add a (very long) series of numbers representing her various earnings:

```javascript
500 + 750 + 3000 + 5100 + 12980 + 9087 + 50000
```

Then, you need to generate a written report that looks something like this:

```
Dear Beyonce,

We have calculated your total earnings this year. You have earned <total number>.
Of <total number>, some portion derives from your live performances.
Of <total number>, some portion derives from music sales
etc.
```

(As you can see, this is a very sophisticated report)

How can we write this report such that we can repeat the statement of the "total number" again and again?

Well, we _could_ sum up all the given numbers _every single time_ we want to write the total:

```
"Of " + 500 + 700 + 51 + 12980 + .... + "some portion dervies from your live performances"
```

This is super repetitive and _extremely_ annoying, in my opinion.

Wouldn't it be great if we could _store_ this total value somewhere so that we could reference it again and again?

This is exactly what variables are for!

Variables in JavaScript are used to store data that will be used in our program. A variable can point to almost any type of value including numbers, strings, arrays, objects, and functions.

Variables are assigned values using the = operator. Variable names are typically all lower case; in the case of multiple words, the words are joined together using lowerCamelCase.

### Assigning Variables

#### Global Variables

We can assign a variable like this:

```javascript
name = "Beyonce"
```

This is _not_ how we want to assign our variable however. This creates a **global variable**. A global variables becomes part of the "window" object in JavaScript. The window object represents your browser's entire window. Window holds a whole bunch of things (which is probably obvious), global variables among them.

What happens if I don't _always_ want `name` to evaluate to "Beyonce", for example? Assigning a global variable is imprecise and usually a mistake.

#### Assigning Variables with `var`

Declaring a variable with `var` means you are assigning a local variable. What's a "local" variable?

A variable that is _only_ accessible inside the function in which it is declared. We'll learn more about functions in a bit. For now, just think of it is a little package of code that contains variables and other things.

We declare variables like this:

```javascript
var name;
```

And assign them like this:

```javascript
name = "Beyonce"
```

However, we can (and should) declare and assign a variable on the same line:

```javascript
var name = "Beyonce"
```

Variables can change. You can re-assign a variable to a new value:

```javascript
var name = "Beyonce"
name = "Jay-Z"
```

## Part III: Defining and Invoking Functions

A function is a way to bundle or package a set of instructions or code so that we can execute it again and again without having to write the same code again and again.

We define a function with the `function` keyword

```javascript
function NameofFunction() {
  // body of function
}
```

The function body should contain the code we want the function to execute. Think of it as the instructions that we are giving to our program.

Let's define a function that prints out a joke:

```javascript
function tellJoke() {
  console.log("How do you make 'Seven' even?")
  console.log("You take away the 'S'")
}
```

Now, let's call, or "invoke", our function:

```
tellJoke()
```

### Function Arguments and Return Values

Let's reprise our role as Beyonce's accountant. We could easily imagine having to do the job of adding a series of numbers again and again––after all, we *are* accountants.

Let's define a function that can add up a series of numbers. We can tell our function what numbers to add by defining our function to take in some numbers as *arguments*. Whatever variables
we put inside the parentheses in our function definition are our arguments.

```javascript
function addNumbers(num1, num2, num3, num4) {
  num1 + num2 + num3 + num4
}
```

Execute the function.

Did anything happen??

That's because we didn't tell our function to _return_ anything.

In order to capture the result of executing the code in our function body, we *must* use the **return** keyword.

```javascript
function addNumbers(num1, num2, num3, num4) {
  return num1 + num2 + num3 + num4
}
```

## Part IV: Scope

Scope is the current context of your code. Scope helps us understand what a given variable is set equal to at a point in time.

How do we determine scope? We ask ourselves two questions:

1. Is the variable defined in a function?
2. Is the variable defined using `var`?

If a variable is defined using `var` and it is defined inside a function, it is *local*. That means it is only available inside the function where it is defined.

If the variable is defined outside a function, or if it defined *without* the `var` keyword, then it is *global*. That means it is available *anywhere in your program*.

### Closures

```javascript
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
```

Inside `outerFunction()`, we made the variable `innerVariable` available to `innerFunction().
In this example, innerFunction() remembers the environment it was created in, and it maintains references to variables declared in that environment in a closure.
JavaScript functions have access to their entire outer scope, so the `innerFunction()` function has access to outerFunction()'s environment and to the global (window) environment.

## Overall take-aways:
* How to execute code in the browser console and using node
* What is a test/how to run tests
