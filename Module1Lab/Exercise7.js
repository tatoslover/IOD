// node "/Users/samuellove/Documents/GitHub/IOD/Labs/Lab3/Exercise7.js"

// Four math functions

/**
 * Adds two numbers and returns the result.
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts the second number from the first and returns the result.
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} The result of a - b.
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers and returns the result.
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} The product of a and b.
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides the first number by the second and returns the result.
 * Returns an error message if dividing by zero.
 * @param {number} a - Numerator.
 * @param {number} b - Denominator.
 * @returns {number|string} The result of a / b or an error message.
 */
function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero!";
  }
  return a / b;
}

/**
 * Logs a greeting message to the console with the given name.
 * @param {string} name - The name of the person to greet.
 */
function greet(name) {
  console.log("Hello " + name + "!");
}

// Unit tests

console.log("\n=== Unit Tests ===");

// Tests for add()
console.log("add(5, 3):", add(5, 3)); // Expected: 8
console.log("add(0, -4):", add(0, -4)); // Expected: -4
console.log("add(2.5, 3.1):", add(2.5, 3.1)); // Expected: 5.6

// Tests for subtract()
console.log("subtract(10, 4):", subtract(10, 4)); // Expected: 6
console.log("subtract(0, 0):", subtract(0, 0)); // Expected: 0
console.log("subtract(-5, 10):", subtract(-5, 10)); // Expected: -15

// Tests for multiply()
console.log("multiply(7, 6):", multiply(7, 6)); // Expected: 42
console.log("multiply(0, 100):", multiply(0, 100)); // Expected: 0
console.log("multiply(-3, 2):", multiply(-3, 2)); // Expected: -6

// Tests for divide()
console.log("divide(20, 4):", divide(20, 4)); // Expected: 5
console.log("divide(20, 0):", divide(20, 0)); // Expected: "Cannot divide by zero!"
console.log("divide(-10, 2):", divide(-10, 2)); // Expected: -5

// Calling the greet function
console.log("\n=== Greeting Tests ===");
greet("Samuel");
greet("Taylor");
greet("🌟 Star");
