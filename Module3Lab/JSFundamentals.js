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

// original
function getGreeting(name) {
  return "Hello " + name + "!";
}
console.log(getGreeting("Alice"));
// Hello Alice!

// function expression syntax
const getGreetingExpr = function (name) {
  return "Hello " + name + "!";
};
console.log(getGreetingExpr("Bob"));
// Hello Bob!

// arrow function syntax
const getGreetingArrow = (name) => {
  return "Hello " + name + "!";
};
console.log(getGreetingArrow("Charlie"));
// Hello Charlie!

console.log(`
========================
Question 6
========================
`);

const westley = {
  name: "Westley",
  numFingers: 5,
};

const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};

const inigo = {
  firstName: "Inigo",
  lastName: "Montoya", // included last name
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `; // included last name
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase: (
    person, // arrow function
  ) =>
    person.numFingers === 6
      ? "You killed my father. Prepare to die."
      : "Nice to meet you.",
};

inigo.greeting(westley);
// Hello Westley, my name is Inigo Montoya. Nice to meet you.

inigo.greeting(rugen);
// Hello Count Rugen, my name is Inigo Montoya. You killed my father. Prepare to die.

console.log(`
========================
Question 7
========================
`);

const basketballGame = {
  score: 0,
  fouls: 0, // track fouls

  freeThrow() {
    this.score++;
    return this; // chaining
  },

  basket() {
    this.score += 2;
    return this; // chaining
  },

  threePointer() {
    this.score += 3;
    return this; // chaining
  },

  foul() {
    this.fouls++; // increment foul count
    return this; // chaining
  },

  halfTime() {
    // include fouls in the output
    console.log(`Halftime score is ${this.score}. Fouls: ${this.fouls}`);
    return this; // chaining
  },

  fullTime() {
    // new method to show full-time score and fouls
    console.log(`Fulltime score is ${this.score}. Fouls: ${this.fouls}`);
    return this; // chaining
  },
};

basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .halfTime();

basketballGame
  .freeThrow()
  .foul()
  .threePointer()
  .basket()
  .foul()
  .basket()
  .halfTime();

basketballGame
  .freeThrow()
  .foul()
  .threePointer()
  .basket()
  .foul()
  .halfTime()
  .threePointer()
  .freeThrow()
  .foul()
  .basket()
  .fullTime();

console.log(`
========================
Question 8
========================
`);

function printCityDetails(city) {
  console.log(`\n--- Details for ${city.name} ---`);
  for (let property in city) {
    console.log(`${property}: ${city[property]}`);
  }
}

const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};
printCityDetails(sydney);

const wellington = {
  name: "Wellington",
  population: 215_000,
  country: "New Zealand",
  founded: "1840",
  timezone: "Pacific/Auckland",
};
printCityDetails(wellington);

console.log(`
========================
Question 9
========================
`);

// Original
let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Bingo";
let cat1 = { name: "Fluffy", breed: "Siberian" };

// Changes by Reference
let moreSports = teamSports; // reference copy
moreSports.push("Tennis");
moreSports.unshift("Basketball");

let dog2 = dog1; // primitive copy
dog2 = "Buddy";

let cat2 = cat1; // reference copy
cat2.name = "Mittens";

console.log("After reference-based changes:");
console.log("teamSports:", teamSports);
// changed: [ 'Basketball', 'Hockey', 'Cricket', 'Volleyball', 'Tennis' ]
console.log("dog1:", dog1);
// unchanged: 'Bingo'
console.log("cat1:", cat1);
// changed: { name: 'Mittens', breed: 'Siberian' }

// Cloning to avoid shared references
moreSports = [...teamSports]; // array clone
moreSports.push("Tennis");
moreSports.unshift("Basketball");

cat2 = { ...cat1 }; // object clone
cat2.name = "Mittens";

console.log("teamSports:", teamSports);
// unchanged: [ 'Basketball', 'Hockey', 'Cricket', 'Volleyball', 'Tennis' ]
console.log("moreSports:", moreSports);
// further changed: [ 'Basketball', 'Basketball', 'Hockey', 'Cricket', 'Volleyball', 'Tennis', 'Tennis' ]

console.log("dog1:", dog1);
// unchagned: 'Bingo'
console.log("dog2:", dog2);
// new: 'Buddy'

console.log("cat1:", cat1);
// unchagned: { name: 'Mittens', breed: 'Siberian' }
console.log("cat2:", cat2);
// new clone: { name: 'Mittens', breed: 'Siberian' }

console.log(`
========================
Question 10
========================
`);

// Constructor function version
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  this.canDrive = function () {
    // can drive method
    return this.age >= 16;
  };
}

// people variables
const person1 = new Person("Alice", 20);
const person2 = new Person("Bob", 14);

// people properties printed
console.log(
  "Person 1:",
  person1.name,
  person1.age,
  "Can drive?",
  person1.canDrive(),
); // true

console.log(
  "Person 2:",
  person2.name,
  person2.age,
  "Can drive?",
  person2.canDrive(),
); // false

// 2. Class version
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }

  // Method: determines if the person can drive (age >= 16)
  canDrive() {
    return this.age >= 16;
  }
}

// Create a third person using the class
const person3 = new PersonClass("Charlie", 17);

// Print out their properties and driving eligibility
console.log(
  "Person 3:",
  person3.name,
  person3.age,
  "Can drive?",
  person3.canDrive(),
); // true
