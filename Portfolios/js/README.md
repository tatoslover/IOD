# IOD Portfolio JavaScript Library

A comprehensive JavaScript library for IOD Portfolio Labs that provides reusable functions and utilities, similar to how `main.css` provides reusable styles.

## Overview

This library extracts common JavaScript patterns from Modules 1-3 portfolios and provides them as reusable utilities. It follows the same philosophy as the CSS approach - write once, use everywhere.

## Files Structure

```
js/
├── main.js                    # Core utility library
├── module3-extensions.js      # Advanced patterns for Module 3
└── README.md                 # This documentation
```

## Installation

Include the JavaScript files in your HTML:

```html
<!-- Core library (required) -->
<script src="js/main.js"></script>

<!-- Module 3 extensions (optional, for advanced features) -->
<script src="js/module3-extensions.js"></script>
```

## Core Features

### 1. UI Interaction Functions

#### `Portfolio.toggleSection(header)`
Toggles section visibility with smooth animation. Replaces the repeated `toggleSection` function across all modules.

**Usage:**
```html
<div class="lab-header" onclick="Portfolio.toggleSection(this)">
    <h2>Section Title</h2>
    <span class="toggle-icon">▼</span>
</div>
```

#### `Portfolio.handleInput(inputId, outputId, processor, options)`
Generic form input handler with validation.

**Parameters:**
- `inputId` (string): ID of the input element
- `outputId` (string): ID of the output element  
- `processor` (function): Function to process the input
- `options` (object): Optional configuration

**Example:**
```javascript
Portfolio.handleInput('userInput', 'result', (value) => {
    return `You entered: ${value}`;
}, {
    emptyMessage: "Please enter something!"
});
```

#### `Portfolio.handleNumberInput(input1Id, input2Id, outputId, processor)`
Specialized handler for numeric inputs with validation.

**Example:**
```javascript
Portfolio.handleNumberInput('num1', 'num2', 'result', (a, b) => {
    return `Sum: ${a + b}`;
});
```

### 2. Mathematical Operations

#### Basic Calculator
```javascript
Portfolio.calculator.add(a, b)
Portfolio.calculator.subtract(a, b)
Portfolio.calculator.multiply(a, b)
Portfolio.calculator.divide(a, b)  // Throws error for division by zero
```

#### Precision Currency Operations
```javascript
Portfolio.calculator.currencyOperation(float1, float2, operation, decimals)
```

**Example:**
```javascript
// Avoid floating point errors
const result = Portfolio.calculator.currencyOperation(0.1, 0.2, '+', 2);
// Returns: 0.3 (instead of 0.30000000000000004)
```

### 3. String Utilities

```javascript
// Capitalize first letter of each word
Portfolio.strings.ucFirstLetters('hello world')  // "Hello World"

// Truncate with ellipsis
Portfolio.strings.truncate('Long text here', 10)  // "Long text..."

// Convert to camelCase
Portfolio.strings.camelCase('hello world')  // "helloWorld"

// Check if empty
Portfolio.strings.isEmpty('   ')  // true
```

### 4. Array Utilities

```javascript
// Remove duplicates
Portfolio.arrays.unique([1, 2, 2, 3])  // [1, 2, 3]

// Find matching items
Portfolio.arrays.findMatching(people, person => person.age > 25)

// Group by property
Portfolio.arrays.groupBy(people, 'age')

// Get random item
Portfolio.arrays.randomItem(['a', 'b', 'c'])
```

### 5. Object Utilities

```javascript
// Deep clone
const clone = Portfolio.objects.deepClone(originalObject);

// Merge objects
const merged = Portfolio.objects.merge(obj1, obj2, obj3);

// Safe property access
const value = Portfolio.objects.getNestedProperty(obj, 'user.profile.name');

// Check property existence
Portfolio.objects.hasProperty(obj, 'propertyName')
```

### 6. Validation Utilities

```javascript
// Email validation
Portfolio.validation.isEmail('test@example.com')  // true

// Range validation
Portfolio.validation.isInRange(25, 18, 99)  // true

// Required field validation
Portfolio.validation.isRequired(value)  // true if not empty

// Length validation
Portfolio.validation.isValidLength('hello', 3, 10)  // true
```

### 7. Display Utilities

```javascript
// Format output with styling
Portfolio.display.formatOutput('Title', 'Content', 'success')

// Create HTML table from data
const tableHTML = Portfolio.display.createTable(arrayOfObjects);

// Loading states
Portfolio.display.showLoading('elementId');
Portfolio.display.hideLoading('elementId');
```

### 8. Demo Helpers

```javascript
// Run demonstration with error handling
Portfolio.demo.runDemo('Demo Title', () => {
    return 'Demo result';
}, 'outputElementId');

// Create interactive demo
const demo = Portfolio.demo.createDemo({
    inputId: 'input',
    outputId: 'output',
    processor: (value) => `Processed: ${value}`,
    title: 'My Demo'
});
```

### 9. Async Utilities

```javascript
// Delay execution
await Portfolio.async.delay(1000);

// Debounce function calls
const debouncedFunc = Portfolio.async.debounce(myFunction, 300);

// Throttle function calls
const throttledFunc = Portfolio.async.throttle(myFunction, 1000);
```

## Module 3 Extensions

For advanced patterns used in Module 3, include `module3-extensions.js`:

### Question Selector Pattern
```javascript
const questionMap = {
    '1': runQuestion1,
    '2': runQuestion2,
    '3': runQuestion3
};

const selector = Module3Extensions.createQuestionSelector(
    'question-selector',
    questionMap,
    'output',
    { defaultMessage: 'Select a question!' }
);
```

### Counter Management
```javascript
// Create counter
const counter = Module3Extensions.createCounter(0, 1);
counter.increment();  // 1
counter.getValue();   // 1

// Multiple counters
Module3Extensions.counterManager.create('counter1', 0, 1);
Module3Extensions.counterManager.increment('counter1');
```

### Game State Management
```javascript
const gameState = Module3Extensions.createGameState({
    score: 0,
    lives: 3,
    level: 1
});

gameState.updateProperty('score', 100);
gameState.incrementProperty('score', 50);
```

### Clock Utilities
```javascript
// Create clock
const ClockClass = Module3Extensions.createClockClass({
    precision: true,
    updateInterval: 100
});

const clock = new ClockClass('clock-element');
clock.start();
```

### Advanced Array Operations
```javascript
// Replace element at index
Module3Extensions.advancedArrays.replaceAt(array, 2, 'newValue');

// Chunk array
Module3Extensions.advancedArrays.chunk([1,2,3,4,5], 2);  // [[1,2], [3,4], [5]]

// Flatten nested arrays
Module3Extensions.advancedArrays.flatten([[1,2], [3,4]], 1);  // [1,2,3,4]
```

### Collection Utilities
```javascript
// Filter by property
Module3Extensions.collections.filterByProperty(books, 'year', 2020, 'greater');

// Get property values
Module3Extensions.collections.pluck(books, 'title');

// Find latest item
Module3Extensions.collections.findLatest(books, 'publishDate');
```

### Financial Utilities
```javascript
// Sum salaries
Module3Extensions.financial.sumProperty(employees, 'salary');

// Find top earner
Module3Extensions.financial.findTopEarner(employees, 'salary');

// Format currency
Module3Extensions.financial.formatCurrency(1234.56);  // "$1,234.56"
```

### Date Utilities
```javascript
// Calculate days between dates
Module3Extensions.dates.daysBetween('2023-01-01', '2023-01-10');  // 9

// Format date
Module3Extensions.dates.formatDate(new Date(), 'long');

// Add days
Module3Extensions.dates.addDays(new Date(), 7);
```

## Migration Guide

### From Old Pattern to New Pattern

**Old way (repeated in each file):**
```javascript
function toggleSection(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector(".toggle-icon");
    content.classList.toggle("active");
    icon.style.transform = content.classList.contains("active")
        ? "rotate(180deg)" : "rotate(0deg)";
}
```

**New way (reusable):**
```javascript
// Just call the library function
Portfolio.toggleSection(header);
```

**Old way (calculator):**
```javascript
function calculate(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = document.getElementById("calcResult");

    if (isNaN(num1) || isNaN(num2)) {
        result.textContent = "Please enter valid numbers!";
        return;
    }

    let output;
    switch (operation) {
        case "add":
            output = num1 + num2;
            break;
        // ... more cases
    }
    result.textContent = `Result: ${output}`;
}
```

**New way (using utilities):**
```javascript
function calculate(operation) {
    Portfolio.handleNumberInput('num1', 'num2', 'calcResult', (a, b) => {
        return `Result: ${Portfolio.calculator[operation](a, b)}`;
    });
}
```

## Best Practices

1. **Use the namespace**: Always access functions through `Portfolio.` or `Module3Extensions.`
2. **Error handling**: The library handles common errors, but wrap complex operations in try-catch
3. **Consistent naming**: Use descriptive IDs for HTML elements
4. **Modular approach**: Only include `module3-extensions.js` when needed
5. **Testing**: Use `Portfolio.demo.runDemo()` for consistent demo presentations

## Browser Support

- Modern browsers (ES6+)
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Examples

See `Module1LabPortfolio-Refactored.html` for a complete example of migrating from the old patterns to the new library approach.

## Contributing

When adding new patterns:

1. Add core utilities to `main.js`
2. Add advanced patterns to `module3-extensions.js`
3. Maintain backward compatibility with legacy function names
4. Update this documentation
5. Add examples in the refactored portfolio files

## License

Part of the IOD Portfolio project. For educational use.