// node /Users/samuellove/Documents/GitHub/IOD/Module3Lab/JSFundamentals.js

console.log(`
========================
Question 1
========================
`);

console.log("" + 1 + 0);
// "10" (string)

console.log("" - 1 + 0);
// -1 (number)

console.log(true + false);
// 1 (number)

console.log(!true);
// false (boolean)

console.log(6 / "3");
// 2 (number)

console.log("2" * "3");
// 6 (number)

console.log(4 + 5 + "px");
// "9px" (string)

console.log("$" + 4 + 5);
// "$45" (string)

console.log("4" - 2);
// 2 (number)

console.log("4px" - 2);
// NaN

console.log(" -9 " + 5);
// " -9 5" (string)

console.log(" -9 " - 5);
// -14 (number)

console.log(null + 1);
// 1 (number)

console.log(undefined + 1);
// NaN

console.log(undefined == null);
// true

console.log(undefined === null);
// false

console.log(" \t \n" - 2);
// -2 (number)

console.log(`
========================
Question 2
========================
`);

let three = "3";
let four = "4";
let thirty = "30";

let addition = three + four;
console.log(addition);
// 34 (string) incorrect
addition = Number(three) + Number(four);
console.log(addition);
// 7 (number)

let multiplication = three * four;
console.log(multiplication);
// 12 (number) correct from coercion

let division = three / four;
console.log(division);
// 0.75 (number) correct from coercion

let subtraction = three - four;
console.log(subtraction);
// -1 (number) correct from coercion

let lessThan1 = three < four;
console.log(lessThan1);
// true correct but not robust
lessThan1 = Number(three) < Number(four);
console.log(lessThan1);
// true

let lessThan2 = thirty < four;
console.log(lessThan2);
// true - incorrect string comparison
lessThan2 = Number(thirty) < Number(four);
console.log(lessThan2);
// false

console.log(`
========================
Question 3
========================
`);

if (0) console.log("#1 zero is true");
// number 0 is false - won't print

if ("0") console.log("#2 zero is true");
// non-empty string is true - will print

if (null) console.log("null is true");
// null is false - won't print

if (-1) console.log("negative is true");
// non-zero number is true - will print

if (1) console.log("positive is true");
// non-zero number is true - will print

console.log(`
========================
Question 4
========================
`);

let a1 = 2,
  b1 = 3;
let result1 = `${a1} + ${b1} is `;
result1 += a1 + b1 < 10 ? "less than 10" : "greater than or equal to 10";
console.log(result1);
// 2 + 3 is less than 10

let a2 = 5,
  b2 = 6;
let result2 = `${a2} + ${b2} is `;
result2 += a2 + b2 < 10 ? "less than 10" : "greater than or equal to 10";
console.log(result2);
// 5 + 6 is greater than or equal to 10

let a3 = 10,
  b3 = 0;
let result3 = `${a3} + ${b3} is `;
result3 += a3 + b3 < 10 ? "less than 10" : "greater than or equal to 10";
console.log(result3);
// 10 + 0 is greater than or equal to 10

console.log(`
========================
Question 5
========================
`);

console.log(`
========================
Question 6
========================
`);

console.log(`
========================
Question 7
========================
`);

console.log(`
========================
Question 7
========================
`);

console.log(`
========================
Question 8
========================
`);

console.log(`
========================
Question 9
========================
`);

console.log(`
========================
Question 10
========================
`);
