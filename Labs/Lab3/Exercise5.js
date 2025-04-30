// node "/Users/samuellove/Documents/GitHub/IOD/Labs/Lab3/Exercise5.js"

// Create an array with 5 elements
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// Replace the value at position 1 and 4 (0-based indexing)
fruits[1] = "blueberry"; // replaces "banana"
fruits[4] = "fig"; // replaces "elderberry"

// Add a new element to the beginning of the array
fruits.unshift("avocado");

// Remove the element at the end of the array
fruits.pop();

// Print the array to the console
console.log(fruits);
