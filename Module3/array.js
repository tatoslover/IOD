// node /Users/samuellove/Documents/GitHub/IOD/Module3/array.js

console.log(`
========================
Declaration
========================
`);

const arr1 = new Array(1, 2, 3); // constructor, not often used
const arr2 = [1, 2, 3]; // array literal, much more common

console.log(arr1); // [ 1, 2, 3 ] - both do the same
console.log(arr2); // [ 1, 2, 3 ] - both do the same

console.log(`
========================
Methods
========================
`);

const fruits = ["Apple", "Orange", "Pear"];
const lastFruit = fruits.pop(); // removes and returns the last item
console.log(lastFruit); // Pear
console.log(fruits); // [ 'Apple', 'Orange' ]

fruits.push("Banana"); // adds to the end of the array
console.log(fruits); // [ 'Apple', 'Orange', 'Banana' ]

const firstFruit = fruits.shift(); // removes and returns the first item
console.log(firstFruit); // Apple
console.log(fruits); // [ 'Orange', 'Pear' ]

fruits.unshift("Banana"); // adds to the beginning of the array
console.log(fruits); // [ 'Banana', 'Orange', 'Pear' ]

console.log(`
========================
Internals
========================
`);

const fruits1 = ["Apple", "Orange", "Pear"];
const fruits2 = fruits1; // refers to same memory location
fruits1.push("Banana"); // add new item to the end of fruits1
console.log(fruits2); // [ 'Apple', 'Orange', 'Pear', 'Banana' ]
// fruits2 reflects the same change made to fruits1 since they both reference the same memory location
console.log("fruit at index 0: " + fruits1[0]); // Apple - accessed using numeric index 0
console.log("fruit at index 1: " + fruits1[1]); // Orange - accessed using numeric index 1

console.log(`
========================
Multidimensional
========================
`);

const matrix = [
  // 3x3 matrix
  [1, 2, 3], // row 0
  [4, 5, 6], // row 1
  [7, 8, 9], // row 2
];
console.log(matrix[1][1]); // 5, the value in row 1, column 1

console.log(`
========================
toString
========================
`);

const numbers = [1, 2, 3];
const strings = ["one", "two", "three"];
const empty = [];

console.log("Numbers: " + numbers); // Numbers: 1,2,3
console.log("Strings: " + strings); // Strings: one,two,three
console.log("Empty: " + empty); // Empty:

console.log(`
========================
slice
========================
`);

// arr.sliced([end], [end]);

const sliceArray = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];
const sliced = sliceArray.slice(0, 3); // start at the beginning, get items up to index 3
const endSliced = sliceArray.slice(-3); // start at the end, get last 3 items

console.log(sliced); // [ 'red', 'orange', 'yellow' ]
console.log(endSliced); // [ 'blue', 'indigo', 'violet' ]
console.log(sliceArray); // ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

console.log(`
========================
splice
========================
`);

// arr.splice(start[, deleteCount, elem1, … , elemN])

const spliceArray = ["I", "study", "JavaScript", "right", "now"];
const removed = spliceArray.splice(0, 3, "Let's", "dance");

console.log(removed); // [ 'I', 'study', 'JavaScript' ] - 3 elements starting at index 0 are removed
console.log(spliceArray); // [ "Let's", 'dance', 'right', 'now' ] - 2 new elements are inserted

console.log(`
========================
concat
========================
`);

// arr.concant(arg1, arg2…)

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const combined = array1.concat(array2, array3);
console.log(combined); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(combined.concat(10, 11)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]

console.log(`
========================
indexOf
========================
`);

// arr.indexOf(item, from);

const marks = ["A+", "C+", "B-", "D", "B+", "C+", "B-"];
let bIndex = marks.indexOf("B-");
let eIndex = marks.indexOf("E");

// first index is always 0
console.log(marks[bIndex] + " is at index: " + bIndex); // B- is at index: 2
console.log(eIndex); // -1, since not found

console.log(`
========================
lastIndexOf
========================
`);

// arr.lastIndexOf(item, from);

const marks2 = ["A+", "C+", "B-", "D", "B+", "C+", "B-"];

let bIndexFirst = marks2.indexOf("B-");
let bIndexLast = marks2.lastIndexOf("B-");

console.log(marks2[bIndexFirst] + " is first at: " + bIndexFirst); // B- is first at: 2
console.log(marks2[bIndexLast] + " is last at: " + bIndexLast); // B- is last at: 6

console.log(`
========================
join
========================
`);

// arr.join(separator)

const elements = ["Wind", "Water", "Fire", "Air"];

console.log(elements.join()); // Wind,Water,Fire,Air
console.log(elements.join(" ")); // Wind Water Fire Air
console.log(elements.join("; ")); // Wind; Water; Fire; Air

console.log(`
========================
forEach
========================
`);

// arr.forEach(function(item, index, array) {
// . . . Do something with item
// });

const hobbits = ["Bilbo", "Frodo", "Samwise", "Merry", "Pippin"];
hobbits.forEach((hobbit, index) => {
  // usually we use an arrow function here
  console.log(`#${index}: ${hobbit}`); // runs once for every item in array
});

console.log(`
========================
find
========================
`);

// const result = arr.find(function (item, index, array) {
//    If true is returned, item is returned and iteration is stopped, for falsy scenario returns indefined
// });

const products = [
  { id: 1, title: "Sleeveless Tee", price: 23.95, category: "Shirts" },
  { id: 2, title: "Men's Hoodie", price: 54.95, category: "Winter" },
  { id: 3, title: "Denim Jeans", price: 49.95, category: "Pants" },
];
// we usually use an arrow function - runs once for each array element until condition is true
let jeans = products.find((product) => product.title == "Denim Jeans"); // returns matching item
let shirt = products.find((product) => product.category == "Shirts"); // returns matching item
console.log(jeans); // { id: 3, title: 'Denim Jeans', price: 49.95, category: 'Pants' }
console.log(shirt); // { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' }

console.log(`
========================

========================
`);
