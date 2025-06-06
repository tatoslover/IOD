// node /Users/samuellove/Documents/GitHub/IOD/Module3/function-object.js

console.log(`
========================
name Property
========================
`);

function sayHiDefn() {
  console.log("Hi (function definition)");
} // named function
const sayHiExpn = function () {
  console.log("Hi (function expression)");
}; // named variable
const sayHiArrow = () => console.log("Hi (arrow function)"); // named variable
//.name property exists as a built-in default property for all functions
console.log(sayHiDefn.name); // sayHiDefn - uses explicit function name
console.log(sayHiExpn.name); // sayHiExpn - figures out name from context
console.log(sayHiArrow.name); // sayHiArrow - figures out name from context

console.log(`
========================
length Property
========================
`);

function oneParam(a) {
  console.log("This function has a single parameter: " + a);
}
function twoParams(a, b) {
  console.log(`This function has two parameters: ${a} and ${b}`);
}
function manyParams(a, b, ...extras) {
  console.log(
    `This function has unlimited parameters: ${a} and ${b} and ${extras}`,
  );
}
console.log(oneParam.length); // 1
console.log(twoParams.length); // 2
console.log(manyParams.length); // 2, because extras is 'the rest' and can't be counted

console.log(`
========================
Custom Properties
========================
`);

function sayHi() {
  console.log("Hi");
  sayHi.counter++; // increment the custom counter property every time the function is called
}
sayHi.counter = 0; // initialise the counter to 0 before calling it
sayHi(); // Hi - calls the function and increments the counter
sayHi(); // Hi - calls the function and increments the counter again
console.log(`Called ${sayHi.name} ${sayHi.counter} times`); // Called sayHi 2 times
