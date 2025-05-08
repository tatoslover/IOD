// node /Users/samuellove/Documents/GitHub/IOD/Module3/functions.js

// 'function' keyword followed by the custom function name, then ()
function helloWorld() {
  // we can include parameters inside the () as function variables
  // function body is enclosed with curly brackets (braces)
  console.log("hello world"); // can be one or multiple statements inside the function
}
helloWorld(); // once the function is defined, we need to call it to make it run/execute

// function checkAge returns a value when called
function checkAge(age) {
  if (age >= 18) {
    return "adult"; // if the condition is true, return this string and exit
  }
  return "non-adult"; // if the condition was false, return this string and exit
}
console.log(checkAge(21)); // adult
console.log(checkAge(13)); // non-adult

const sayHi = function () {
  // function expression syntax for creating a function
  console.log("Hi");
};

// sayHiExpression(); // error - cannot access before initialization
sayHiDeclaration(); // works - can be hoisted
// const sayHiExpression = function () {
//   console.log("Hi");
// };
function sayHiDeclaration() {
  console.log("Hi");
}

// const sayHiArrow = () => console.log("Hi arrow"); // arrow function syntax, more concise
const subtract1 = (a, b) => a - b; // most concise version of the below
const subtract2 = (a, b) => {
  return a - b;
}; // does the same thing as above

const sayHiExpression = function () {
  console.log("Hi");
  console.log(arguments);
};
function sayHiDeclaration() {
  console.log("Hi");
  console.log(arguments);
}
const sayHiArrow = () => {
  console.log("Hi");
  console.log(arguments);
};
sayHiDeclaration(); // [Arguments] {}
sayHiExpression(); // [Arguments] {}
// sayHiArrow(); // ReferenceError: arguments is not defined
