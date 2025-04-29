// node /Users/samuellove/Documents/GitHub/IOD/Labs/Lab2/Exercise4.js

// Four math functions

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero!";
  }
  return a / b;
}

// Function to greet someone

function greet(name) {
  console.log("Hello " + name + "!");
}

// Calling the math functions with different values

console.log("Addition (5 + 3):", add(5, 3));
console.log("Subtraction (10 - 4):", subtract(10, 4));
console.log("Multiplication (7 * 6):", multiply(7, 6));
console.log("Division (20 / 4):", divide(20, 4));
console.log("Division (20 / 0):", divide(20, 0)); // Testing divide by zero

// Calling the greet function

greet("Samuel");
greet("Taylor");
