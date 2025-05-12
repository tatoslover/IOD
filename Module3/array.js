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

========================
`);

console.log(`
========================

========================
`);
