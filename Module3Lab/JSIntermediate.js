// node /Users/samuellove/Documents/GitHub/IOD/Module3Lab/JSIntermediate.js

console.log(`
========================
Question 1
========================
`);

function ucFirstLetters(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(ucFirstLetters("los angeles")); // Los Angeles
console.log(ucFirstLetters("new york city")); // New York City
console.log(ucFirstLetters("hello world")); // Hello World

console.log(`
========================
Question 2
========================
`);

// Standard
function truncate(str, max) {
  if (str.length > max) {
    return str.slice(0, max) + "...";
  } else {
    return str;
  }
}

console.log(truncate("This text will be truncated if it is too long", 25));
// This text will be truncat...

// Conditional operator
function truncate(str, max) {
  return str.length > max ? str.slice(0, max) + "..." : str;
}

console.log(
  truncate("This other text will be truncated if it is too long", 30),
);
// This other text will be trunca...

console.log(`
========================
Question 3
========================
`);

// Initial array
const animals = ["Tiger", "Giraffe"];
console.log("Initial:", animals);

// Add 2 new values to the end
animals.push("Elephant", "Zebra");
console.log("Appended:", animals);

// Add 2 new values to the beginning
animals.unshift("Lion", "Monkey");
console.log("Prepended:", animals);

// Sort the values alphabetically
animals.sort();
console.log("Sorted:", animals);

// Replace middle function
function replaceMiddleAnimal(newValue) {
  const middleIndex = Math.floor(animals.length / 2);
  animals[middleIndex] = newValue;
}
replaceMiddleAnimal("Koala");
console.log("Middle replaced:", animals);

// Find mathcing function
function findMatchingAnimals(beginsWith) {
  return animals.filter((animal) =>
    animal.toLowerCase().startsWith(beginsWith.toLowerCase()),
  );
}
console.log('Animals starting with "g":', findMatchingAnimals("g"));
console.log('Animals starting with "Z":', findMatchingAnimals("Z"));

console.log(`
========================
Question 4
========================
`);

// Standard

function camelCase(cssProp) {
  let parts = cssProp.split("-");
  for (let i = 1; i < parts.length; i++) {
    parts[i] = parts[i][0].toUpperCase() + parts[i].slice(1);
  }
  return parts.join("");
}

console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display

// forEach loop

function camelCaseForEach(cssProp) {
  let parts = cssProp.split("-");
  let result = parts[0];

  parts.slice(1).forEach((part) => {
    result += part[0].toUpperCase() + part.slice(1);
  });

  return result;
}

console.log(camelCaseForEach("margin-left")); // marginLeft
console.log(camelCaseForEach("background-image")); // backgroundImage
console.log(camelCaseTernary("display")); // display

// conditional operator

function camelCaseTernary(cssProp) {
  return cssProp
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1),
    )
    .join("");
}

console.log(camelCaseTernary("margin-left")); // marginLeft
console.log(camelCaseTernary("background-image")); // backgroundImage
console.log(camelCaseTernary("display")); // display

// No conditional operator

function camelCaseNoTernary(cssProp) {
  let parts = cssProp.split("-");
  let result = parts[0];
  for (let i = 1; i < parts.length; i++) {
    let word = parts[i];
    result += word[0].toUpperCase() + word.slice(1);
  }
  return result;
}

console.log(camelCaseNoTernary("margin-left")); // marginLeft
console.log(camelCaseNoTernary("background-image")); // backgroundImage
console.log(camelCaseTernary("display")); // display

console.log(`
========================
Question 5
========================
`);

// Initial problem

let twentyCents = 0.2;
let tenCents = 0.1;
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);
// 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen);
// 0.200.10 since toFixed() method converts a number to a string leading to string concatination

// currencyAddition function

function currencyAddition(float1, float2) {
  const factor = 100;
  return (Math.round(float1 * factor) + Math.round(float2 * factor)) / factor;
}
console.log(currencyAddition(0.1, 0.2)); // 0.3
console.log(0.3 === currencyAddition(0.1, 0.2)); // true

// currencyOperation function

function currencyOperationExtended(float1, float2, operation, numDecimals = 2) {
  const factor = 10 ** numDecimals;

  let int1 = Math.round(float1 * factor);
  let int2 = Math.round(float2 * factor);
  let result;

  switch (operation) {
    case "+":
      result = (int1 + int2) / factor;
      break;
    case "-":
      result = (int1 - int2) / factor;
      break;
    case "*":
      result = (int1 * int2) / (factor * factor);
      break;
    case "/":
      result = int2 !== 0 ? int1 / int2 : NaN;
      break;
    default:
      throw new Error("Unsupported operation");
  }

  return parseFloat(result.toFixed(numDecimals));
}
console.log(currencyOperationExtended(0.1, 0.2, "+")); // 0.3
console.log(currencyOperationExtended(0.255, 0.255, "*", 4)); // 0.065
console.log(currencyOperationExtended(0.3333333333, 3, "*", 10)); // 0.9999999999
console.log(currencyOperationExtended(1.005, 0.005, "-", 3)); // 1

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
