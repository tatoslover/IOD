document.addEventListener('DOMContentLoaded', function() {
    // Add navigation tabs
    const navContainer = document.getElementById('nav-tabs');
    navContainer.innerHTML += `
            <button class="nav-tab" onclick="showExercise('Exercise2')">📄 Exercise2</button>
            <button class="nav-tab" onclick="showExercise('Exercise3')">📄 Exercise3</button>
            <button class="nav-tab" onclick="showExercise('Exercise3')">💻 Exercise3</button>
            <button class="nav-tab" onclick="showExercise('Exercise4')">💻 Exercise4</button>
            <button class="nav-tab" onclick="showExercise('Exercise5')">💻 Exercise5</button>
            <button class="nav-tab" onclick="showExercise('Exercise6')">💻 Exercise6</button>
            <button class="nav-tab" onclick="showExercise('Exercise7')">💻 Exercise7</button>
                <button class="nav-tab" onclick="showExercise('Exercise8')">📁 Exercise8</button>`;
    
    // Add overview cards
    const overviewContainer = document.getElementById('overview');
    overviewContainer.innerHTML = `
            <div class="overview-card" onclick="showExercise('Exercise2')">
                <h3>📄 Exercise2</h3>
                <p>Interactive HTML exercise with styling and JavaScript functionality</p>
            </div>
            <div class="overview-card" onclick="showExercise('Exercise3')">
                <h3>📄 Exercise3</h3>
                <p>Interactive HTML exercise with styling and JavaScript functionality</p>
            </div>
            <div class="overview-card" onclick="showExercise('Exercise3')">
                <h3>💻 Exercise3</h3>
                <p>JavaScript programming exercise with functions and logic</p>
            </div>
            <div class="overview-card" onclick="showExercise('Exercise4')">
                <h3>💻 Exercise4</h3>
                <p>JavaScript programming exercise with functions and logic</p>
            </div>
            <div class="overview-card" onclick="showExercise('Exercise5')">
                <h3>💻 Exercise5</h3>
                <p>JavaScript programming exercise with functions and logic</p>
            </div>
            <div class="overview-card" onclick="showExercise('Exercise6')">
                <h3>💻 Exercise6</h3>
                <p>JavaScript programming exercise with functions and logic</p>
            </div>
            <div class="overview-card" onclick="showExercise('Exercise7')">
                <h3>💻 Exercise7</h3>
                <p>JavaScript programming exercise with functions and logic</p>
            </div>
                <div class="overview-card" onclick="showExercise('Exercise8')">
                    <h3>📁 Exercise8</h3>
                    <p>Complete project with multiple files and advanced functionality</p>
                </div>`;
    
    // Add exercise containers
    const contentContainer = document.getElementById('exercise-content');
    contentContainer.innerHTML = `
        <div id="Exercise2" class="exercise-container">
            <div class="exercise-header">
                <div class="exercise-title">📄 Exercise2</div>
                <div class="exercise-type">HTML/CSS/JS</div>
            </div>
            <div class="exercise-content">
                <iframe src="Exercise2.html" class="html-preview" title="Exercise2 Preview"></iframe>
            </div>
        </div>
        <div id="Exercise3" class="exercise-container">
            <div class="exercise-header">
                <div class="exercise-title">📄 Exercise3</div>
                <div class="exercise-type">HTML/CSS/JS</div>
            </div>
            <div class="exercise-content">
                <iframe src="Exercise3.html" class="html-preview" title="Exercise3 Preview"></iframe>
            </div>
        </div>
        <div id="Exercise3" class="exercise-container">
            <div class="exercise-header">
                <div class="exercise-title">💻 Exercise3</div>
                <div class="exercise-type">JavaScript</div>
            </div>
            <div class="exercise-content">
                <div class="code-section">function changeColumn1() {
  const column = document.getElementById("column1");
  const heading = document.getElementById("heading1");
  const input = document.getElementById("input1");

  column.style.backgroundColor = "lightblue";

  if (input.value.trim() !== "") {
    heading.innerText = input.value;
  } else {
    heading.innerText = "Changed!";
  }
}

function changeColumn2() {
  const column = document.getElementById("column2");
  const heading = document.getElementById("heading2");
  const input = document.getElementById("input2");

  column.style.backgroundColor = "lightcoral";

  if (input.value.trim() !== "") {
    heading.innerText = input.value;
  } else {
    heading.innerText = "Updated!";
  }
}</div>
                <button class="run-button" onclick="runJavaScript(`function changeColumn1() {
  const column = document.getElementById("column1");
  const heading = document.getElementById("heading1");
  const input = document.getElementById("input1");

  column.style.backgroundColor = "lightblue";

  if (input.value.trim() !== "") {
    heading.innerText = input.value;
  } else {
    heading.innerText = "Changed!";
  }
}

function changeColumn2() {
  const column = document.getElementById("column2");
  const heading = document.getElementById("heading2");
  const input = document.getElementById("input2");

  column.style.backgroundColor = "lightcoral";

  if (input.value.trim() !== "") {
    heading.innerText = input.value;
  } else {
    heading.innerText = "Updated!";
  }
}`, 'Exercise3-output')">▶️ Run Code</button>
                <div id="Exercise3-output" class="js-console">Click 'Run Code' to execute this JavaScript</div>
            </div>
        </div>
        <div id="Exercise4" class="exercise-container">
            <div class="exercise-header">
                <div class="exercise-title">💻 Exercise4</div>
                <div class="exercise-type">JavaScript</div>
            </div>
            <div class="exercise-content">
                <div class="code-section">// node "/Users/samuellove/Documents/GitHub/IOD/Labs/Lab2/Exercise4.js"

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
greet("Taylor");</div>
                <button class="run-button" onclick="runJavaScript(`// node "/Users/samuellove/Documents/GitHub/IOD/Labs/Lab2/Exercise4.js"

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
greet("Taylor");`, 'Exercise4-output')">▶️ Run Code</button>
                <div id="Exercise4-output" class="js-console">Click 'Run Code' to execute this JavaScript</div>
            </div>
        </div>
        <div id="Exercise5" class="exercise-container">
            <div class="exercise-header">
                <div class="exercise-title">💻 Exercise5</div>
                <div class="exercise-type">JavaScript</div>
            </div>
            <div class="exercise-content">
                <div class="code-section">// node "/Users/samuellove/Documents/GitHub/IOD/Labs/Lab3/Exercise5.js"

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
console.log(fruits);</div>
                <button class="run-button" onclick="runJavaScript(`// node "/Users/samuellove/Documents/GitHub/IOD/Labs/Lab3/Exercise5.js"

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
console.log(fruits);`, 'Exercise5-output')">▶️ Run Code</button>
                <div id="Exercise5-output" class="js-console">Click 'Run Code' to execute this JavaScript</div>
            </div>
        </div>
        <div id="Exercise6" class="exercise-container">
            <div class="exercise-header">
                <div class="exercise-title">💻 Exercise6</div>
                <div class="exercise-type">JavaScript</div>
            </div>
            <div class="exercise-content">
                <div class="code-section">// node "/Users/samuellove/Documents/GitHub/IOD/Labs/Lab3/Exercise6.js"

// Step 1: Create an array of 5 book objects
let library = [
  {
    title: "The Hobbit",
    description: "A fantasy adventure",
    author: "J.R.R. Tolkien",
    pages: 310,
  },
  {
    title: "1984",
    description: "Dystopian future",
    author: "George Orwell",
    pages: 328,
  },
  {
    title: "To Kill a Mockingbird",
    description: "A novel on racial injustice",
    author: "Harper Lee",
    pages: 281,
  },
  {
    title: "The Great Gatsby",
    description: "Life in the Jazz Age",
    author: "F. Scott Fitzgerald",
    pages: 180,
  },
  {
    title: "Moby-Dick",
    description: "A whale of a tale",
    author: "Herman Melville",
    pages: 635,
  },
];

// Step 2: Update the description of one of the books
library[0].description = "An epic fantasy journey";

// Step 3: Print each book’s details
library.forEach((book) => {
  console.log("Title:", book.title);
  console.log("Description:", book.description);
  console.log("Author:", book.author);
  console.log("Pages:", book.pages);
  console.log("----------------------");
});</div>
                <button class="run-button" onclick="runJavaScript(`// node "/Users/samuellove/Documents/GitHub/IOD/Labs/Lab3/Exercise6.js"

// Step 1: Create an array of 5 book objects
let library = [
  {
    title: "The Hobbit",
    description: "A fantasy adventure",
    author: "J.R.R. Tolkien",
    pages: 310,
  },
  {
    title: "1984",
    description: "Dystopian future",
    author: "George Orwell",
    pages: 328,
  },
  {
    title: "To Kill a Mockingbird",
    description: "A novel on racial injustice",
    author: "Harper Lee",
    pages: 281,
  },
  {
    title: "The Great Gatsby",
    description: "Life in the Jazz Age",
    author: "F. Scott Fitzgerald",
    pages: 180,
  },
  {
    title: "Moby-Dick",
    description: "A whale of a tale",
    author: "Herman Melville",
    pages: 635,
  },
];

// Step 2: Update the description of one of the books
library[0].description = "An epic fantasy journey";

// Step 3: Print each book’s details
library.forEach((book) => {
  console.log("Title:", book.title);
  console.log("Description:", book.description);
  console.log("Author:", book.author);
  console.log("Pages:", book.pages);
  console.log("----------------------");
});`, 'Exercise6-output')">▶️ Run Code</button>
                <div id="Exercise6-output" class="js-console">Click 'Run Code' to execute this JavaScript</div>
            </div>
        </div>
        <div id="Exercise7" class="exercise-container">
            <div class="exercise-header">
                <div class="exercise-title">💻 Exercise7</div>
                <div class="exercise-type">JavaScript</div>
            </div>
            <div class="exercise-content">
                <div class="code-section">// node "/Users/samuellove/Documents/GitHub/IOD/Labs/Lab3/Exercise7.js"

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
greet("🌟 Star");</div>
                <button class="run-button" onclick="runJavaScript(`// node "/Users/samuellove/Documents/GitHub/IOD/Labs/Lab3/Exercise7.js"

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
greet("🌟 Star");`, 'Exercise7-output')">▶️ Run Code</button>
                <div id="Exercise7-output" class="js-console">Click 'Run Code' to execute this JavaScript</div>
            </div>
        </div>
            <div id="Exercise8" class="exercise-container">
                <div class="exercise-header">
                    <div class="exercise-title">📁 Exercise8</div>
                    <div class="exercise-type">Complete Project</div>
                </div>
                <div class="exercise-content">
                    <iframe src="Exercise8/index.html" class="html-preview" title="Exercise8 Preview"></iframe>
                </div>
            </div>`;
});
