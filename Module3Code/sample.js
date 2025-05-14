// node /Users/samuellove/Documents/GitHub/IOD/Module3/sample.js

console.log("hello");
console.log("world"); // line comment

/*
block
comment
*/

let aNewValue = "Some text";
let Number2 = 0.5;
let isvalid = true;
let finish = null;

const integer = 123; // integer - whole number
const float = 12.345; // floating point - decimal number

console.log(1 / 0); // division by zero = Infinity
console.log(-1 / 0); // negative division by zero = -Infinity
console.log("not a number" / 1); // invalid mathematical operation = NaN

let one = 1;
let two = 2;
let three = 3;

// standard BODMAS order of operations - use brackets to override
// below is: 1 + 2 - ( (3 * 2) / 1 ) = 3 - 6
console.log(one + two - (three * two) / one); // -3

// to increment by one (all the same):
one = one + 1; // new value of one is previous value + 1
one += 1; // shorthand - add 1 to previous (also *=)
one++; // increment previous value (by 1)

console.log(one);

// to decrement by one (all the same):
two = two - 1; // new value of two is previous value - 1
two -= 1; // shorthand - minus 1 from previous (also /=)
two--; // decrement previous value (by 1)

console.log(two);

const bigint_valid = 1234567890123456789012345n;
const bigint_invalid = 1234567890123456789012345;
// too large for standard integers

console.log(bigint_valid == bigint_invalid); // false

const doubleQuotes = "String that can include 'single quotes'";
const singleQuotes = 'String that can include "double quotes"';
const backTicks = `String that can include variables - ${singleQuotes}`;

console.log(`${doubleQuotes}\n${singleQuotes}\n${backTicks}`);

let isChecked = false;
let isToggleOn = true;

isChecked = !isChecked;
console.log(isChecked); // true

let age = null;
console.log(age);

let location; // no value is assigned with the = operator
console.log(location); // undefined

console.log(`${location} == ${age} ? ${location == age}`); // true (uses == to check value equivalence)
console.log(`${location} === ${age} ? ${location === age}`); // false (uses === to check type equality)

let student1 = {
  firstName: "Bruce",
  Country: "Australia",
  City: "Sydney",
  DOB: "01-01-1990",
  10: "ten",
  false: "negative statement",
};

Add: function sum(a, b) {
  return a + b;
}

console.log(student1.firstName);
console.log(student1["Country"]);

const tv = {
  // object starts here
  brand: "Sony Bravia", // key-value pair. brand is the key, "Sony Bravia" is the value
  size: "55-inch", // values can be any data type
  model: 2023, // multiple key-value pairs are separated by commas
  resolution: "4K", // the comma on the last key-value pair can be omitted
}; // object ends here. All data is stored in tv variable.

console.log(typeof undefined); // undefined
console.log(typeof 0); // number
console.log(typeof 10n); // bigint
console.log(typeof true); // boolean
console.log(typeof "text"); // string
console.log(typeof Symbol("id")); // symbol
console.log(typeof Math); // object
console.log(typeof null); // object
console.log(typeof console.log); // function
