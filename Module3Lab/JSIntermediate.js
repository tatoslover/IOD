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

function unique(duplicatesArray) {
  return [...new Set(duplicatesArray)];
}

const colours = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
const animals2 = ["dog", "cat", "bird", "cat", "dog", "elephant", "bird"];

console.log(unique(colours));
// [ 'red', 'green', 'blue', 'yellow', 'orange' ]

console.log(unique(testScores));
// [ 55, 84, 97, 63, 32, 91, 43 ]

console.log(unique(animals2));
// [ 'dog', 'cat', 'bird', 'elephant' ]

console.log(`
========================
Question 7
========================
`);

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];

// find title matching id
function getBookTitle(bookId) {
  const book = books.find((book) => book.id === bookId);
  return book ? book.title : null;
}

console.log(getBookTitle(3));
// "1984"

// filter books before 1950
function getOldBooks() {
  return books.filter((book) => book.year < 1950);
}

console.log(getOldBooks());
// Books from 1925, 1932, & 1949

// map 'classic' genre to all books
function addGenre() {
  return books.map((book) => ({ ...book, genre: "classic" }));
}

console.log(addGenre());
// All books with { genre: 'classic' }

// filter+Map titles by author's initial
function getTitles(authorInitial) {
  return books
    .filter((book) => book.author.startsWith(authorInitial))
    .map((book) => book.title);
}

console.log(getTitles("J"));
// [ 'The Catcher in the Rye' ]

// find latest book using forEach
function latestBook() {
  let latest = books[0];
  books.forEach((book) => {
    if (book.year > latest.year) {
      latest = book;
    }
  });
  return latest;
}

console.log(latestBook());
// { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }

console.log(`
========================
Question 8
========================
`);

// phoneBookABC Map
const phoneBookABC = new Map();
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");

// create phoneBookDEF Map
const phoneBookDEF = new Map();

// initialise with array of key-value pairs
const initialEntriesDEF = [
  ["Derek", "0477123456"],
  ["Erek", "0488123456"],
  ["Ferek", "0499123456"],
];
initialEntriesDEF.forEach(([name, number]) => phoneBookDEF.set(name, number));

// update Caroline's number
phoneBookABC.set("Caroline", "0400000000");

// function to print Map contents
function printPhoneBook(contacts) {
  contacts.forEach((number, name) => {
    console.log(`${name}: ${number}`);
  });
}

// combined maps into phoneBook map
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

// print full list of names
console.log("--- Combined Phone Book ---");
printPhoneBook(phoneBook);

console.log(`
========================
Question 9
========================
`);

let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};

// function to calculate total salaries
function sumSalaries(salaries) {
  return Object.values(salaries).reduce((total, salary) => total + salary, 0);
}

// function to find the top earner
function topEarner(salaries) {
  let topName = null;
  let topSalary = 0;

  for (const [name, salary] of Object.entries(salaries)) {
    if (salary > topSalary) {
      topSalary = salary;
      topName = name;
    }
  }

  return {
    name: topName,
    salary: topSalary, // also return the salary out of interest
  };
}

console.log("Total salaries:", sumSalaries(salaries)); // 233000
console.log("Top earner:", topEarner(salaries)); // { name: 'Christina', salary: 75000 }

console.log(`
========================
Question 10
========================
`);

const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());

// hours passed today
const hours = today.getHours();
console.log(hours + " hours have passed so far today");

// minutes passed today
const minutes = hours * 60 + today.getMinutes();
console.log(minutes + " minutes have passed so far today");

// seconds passed today
const seconds = minutes * 60 + today.getSeconds();
console.log(seconds + " seconds have passed so far today");

// my bday
const birthDate = new Date("1996-09-15");
const now = new Date();

let ageYears = now.getFullYear() - birthDate.getFullYear();
let ageMonths = now.getMonth() - birthDate.getMonth();
let ageDays = now.getDate() - birthDate.getDate();

// adjust for negative values
if (ageDays < 0) {
  ageMonths--;
  const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
  ageDays += lastMonth.getDate();
}

if (ageMonths < 0) {
  ageYears--;
  ageMonths += 12;
}

console.log(
  `I am ${ageYears} years, ${ageMonths} months and ${ageDays} days old.`,
);

// function to calculate number of days between two dates
function daysInBetween(date1, date2) {
  const oneDay = 1000 * 60 * 60 * 24;
  const diffInTime = Math.abs(date2 - date1);
  return Math.floor(diffInTime / oneDay);
}

console.log(`Days in between: ${daysInBetween(birthDate, today)}`); // 10470 (increases)
