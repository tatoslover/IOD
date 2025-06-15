# Module 3 Lab Exercises

This repository contains lab exercises for Module 3, covering advanced JavaScript concepts including ES6+ features, asynchronous programming, object-oriented programming, and modern JavaScript development patterns.

## Overview

The Module 3 lab exercises progress from JavaScript fundamentals to advanced concepts like closures, promises, async/await, and object-oriented programming. Each exercise builds upon previous concepts while introducing sophisticated JavaScript programming techniques essential for modern web development.

## Skills Developed

- **JavaScript Fundamentals:** Type coercion, operators, control flow, functions
- **Object-Oriented Programming:** Classes, constructors, inheritance, prototypes
- **ES6+ Features:** Arrow functions, destructuring, spread operator, template literals
- **Asynchronous Programming:** Promises, async/await, setTimeout, setInterval
- **Advanced Concepts:** Closures, higher-order functions, decorators
- **Data Structures:** Arrays, objects, Maps, Sets
- **Error Handling:** Try/catch, promise rejection, validation
- **Modern JavaScript:** Functional programming, immutability, API integration

## Software Engineering
### Module 3 - Lab Exercises

Welcome to Module 3 of the IOD Software Engineering course!

This is a handy guide to help students make sure their lab work is easily understood and completed. Make sure to ask your trainers if you have any questions about how to complete these exercises.

Trainers will release answers once everyone has had a chance to complete them, but often there are many possible answers so don't worry if yours are different. The extensions are there for students who have extra time after completing the main exercises - they are not required.

---

## Lab Exercise 1: JavaScript Fundamentals
**File:** `JSFundamentals.js`

**Instructions:** Download the JSFundamentals_LabExercises.pdf file from this folder and complete the 10 exercises within it. Include all the answers in a single .js file, individually commented to indicate each of the 10 exercises. Use Node.js to run and test your code, using the Terminal in VS Code.

Exercises 1-4 require some explanations as well as code in the answers - include this in the comments of your JS file.

All of the information you need to complete the exercises should be in the JS Fundamentals module material. See slides 1-29 for exercises 1-4, slides 30-36 for exercise 5, slides 37-51 for exercises 6-9, and slides 52-54 for exercise 10.

**Goal:** To practise using the fundamental elements of Javascript, including primitive and complex data types, conditionals, functions and loops.

**What it showcases:** Deep understanding of JavaScript core concepts, type system, and fundamental programming patterns

### Exercise Questions:

#### 1. Type Coercion Analysis
What are the results of these expressions? (answer first, then use console.log() to check)
```javascript
"" + 1 + 0
"" - 1 + 0
true + false
!true
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
" -9 " + 5
" -9 " - 5
null + 1
undefined + 1
undefined == null
undefined === null
" \t \n" - 2
```

#### 2. String to Number Conversion Issues
Which of the below are not giving the right answer? Why are they not correct? How can we fix them?
```javascript
let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four
let multiplication = three * four
let division = three / four
let subtraction = three - four
let lessThan1 = three < four
let lessThan2 = thirty < four
```

#### 3. Truthiness Testing
Which of the following console.log messages will print? Why?
```javascript
if (0) console.log('#1 zero is true')
if ("0") console.log('#2 zero is true')
if (null) console.log('null is true')
if (-1) console.log('negative is true')
if (1) console.log('positive is true')
```

#### 4. Ternary Operator Conversion
Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the '+=' do?
```javascript
let a = 2, b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
    result += 'less than 10';
} else {
    result += 'greater than 10';
}
```

#### 5. Function Syntax Variations
Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.
```javascript
function getGreeting(name) {
    return 'Hello ' + name + '!';
}
```

#### 6. Object Methods and Context
a) Complete the inigo object by adding a lastName property and including it in the greeting.
b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead prints his famous catch phrase to the console. HINT: see https://www.imdb.com/title/tt0093779/characters/nm0001597.
c) Update getCatchPhrase to use arrow function syntax and a conditional operator.
```javascript
const westley = {
    name: 'Westley',
    numFingers: 5
}
const rugen = {
    name: 'Count Rugen',
    numFingers: 6
}
const inigo = {
    firstName: 'Inigo',
    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName}. `;
        console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase(person) {
        return 'Nice to meet you.';
    }
}
inigo.greeting(westley);
inigo.greeting(rugen);
```

#### 7. Method Chaining Implementation
The following object represents a basketball game and keeps track of the score as the game progresses.
a) Modify each of the methods so that they can be 'chained' together and the last line of the example code works
b) Add a new method to print the full time final score
c) Add a new object property to keep track of the number of fouls and a method to increment it, similar but separate to the score. Include the foul count in the half time and full time console messages

Test your object by chaining all the method calls together in different combinations.
```javascript
const basketballGame = {
    score: 0,
    freeThrow() {
        this.score++;
    },
    basket() {
        this.score += 2;
    },
    threePointer() {
        this.score += 3;
    },
    halfTime() {
        console.log('Halftime score is '+this.score);
    }
}
//modify each of the above object methods to enable function chaining as below:
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();
```

#### 8. Object Property Iteration
The object below represents a single city.
a) Write a function that takes an object as an argument and uses a for…in loop to access and print to the console each of those object properties and their values. Test it using the sydney object below.
b) Create a new object for a different city with different properties and call your function again with the new object.
```javascript
const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}
```

#### 9. Reference vs Value Assignment
Use the following variables to understand how JavaScript stores objects by reference.
a) Create a new moreSports variable equal to teamSports and add some new sport values to it (using push and unshift)
b) Create a new dog2 variable equal to dog1 and give it a new value
c) Create a new cat2 variable equal to cat1 and change its name property
d) Print the original teamSports, dog1 and cat1 variables to the console. Have they changed? Why?
e) Change the way the moreSports and cat2 variables are created to ensure the originals remain independent
```javascript
let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };
```

#### 10. Constructor Functions and Classes
The following constructor function creates a new Person object with the given name and age values.
a) Create a new person using the constructor function and store it in a variable
b) Create a second person using different name and age values and store it in a separate variable
c) Print out the properties of each person object to the console
d) Rewrite the constructor function as a class called PersonClass and use it to create a third person using different name and age values. Print it to the console as well.
e) Add a canDrive method to both the constructor function and the class that returns true if the person is old enough to drive.
```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
}
```

### Submission:
Create a new folder for Module 3 that you can include in a GitHub repository. You may wish to re-use the same private repo as your lab exercises from other modules and include a new folder in there, or create a separate private repo. Group all Module 3 exercises in the same folder, with separate files for each of the 3 sections, and commit your changes once complete. Ensure your trainers have access.

### Extension:
Try the JS Challenge Rush at https://www.jschallenger.com/games/rush/

### Resources & Extra Learning:
- https://www.jschallenger.com/javascript-basics
- https://web.dev/learn/javascript/data-types
- https://web.dev/learn/javascript/comparison
- https://web.dev/learn/javascript/functions

---

## Lab Exercise 2: JavaScript Intermediate
**File:** `JSIntermediate.js`

**Instructions:** Download the JSIntermediate_LabExercises.pdf file from this folder and complete the 10 exercises within it. Include all the answers in a single .js file, individually commented to indicate each of the 10 exercises. Use Node.js to run and test your code, using the Terminal in VS Code.

All of the information you need to complete the exercises should be in the Intermediate Javascript module material. See slides 1-20 for exercises 1-2, slides 20-45 for exercises 3-4 & 7, slide 13 for exercise 5, slides 46-56 for exercises 6 & 8-9, and slides 67-71 for exercise 10.

**Goal:** To practise using some intermediate aspects of Javascript, including an in-depth look at data types including built-in prototype methods, especially for Strings and Arrays, and special types like Map, Set and Date.

**What it showcases:** Intermediate JavaScript programming skills with practical, real-world problem-solving applications

### Exercise Questions:

#### 1. String Capitalization
Create a function that takes a string as a parameter and returns the string with the first character of each word changed into a capital letter, as in the example below. Test it with different strings.
```javascript
console.log(ucFirstLetters("los angeles") ) //Los Angeles
```

#### 2. String Truncation
Create a function truncate(str, max) that truncates a given string of text if its total length is greater than the max length. It should return either the truncated text, with an ellipsis (…) added to the end if it was too long, or the original text otherwise.
b) Write another variant of the truncate function that uses a conditional operator.
```javascript
console.log(truncate('This text will be truncated if it is too long', 25))
// This text will be truncat...
```

#### 3. Array Manipulation
Use the following animals array for the below tasks. Test each one by printing the result to the console. Review the following link for tips: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
a) Add 2 new values to the end
b) Add 2 new values to the beginning
c) Sort the values alphabetically
d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the animals array with newValue
e) Write a function findMatchingAnimals(beginsWith) that returns a new array containing all the animals that begin with the beginsWith string. Try to make it work regardless of upper/lower case.
```javascript
const animals = ['Tiger', 'Giraffe']
console.log(animals)
```

#### 4. CSS Property Conversion
Write a function camelCase(cssProp) that changes dash-separated CSS properties like 'margin-left' into camel-cased 'marginLeft'.
The function should remove all dashes, and uppercase the first letter of each word after a dash.
b) Create variants of the camelCase function that use different types of for loops, and
c) with and without the conditional operator.
```javascript
console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display
```

#### 5. Floating Point Precision
Decimal number operations in JavaScript can lead to unexpected results, as in the following:
```javascript
let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004
```
We can sometimes avoid this using the toFixed function to force the number of decimal places as below, but it's not always useful:
```javascript
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen) //why is this not working?
```
a) Explain why the above code returns the wrong answer
b) Create a function currencyAddition(float1, float2) which safely adds the two decimal numbers float1 and float2 and returns the correct float result.
c) Create a function currencyOperation(float1, float2, operation) which safely performs the given operation (either +, -, / or *) on the two numbers and returns the correct float result. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch may be useful.
d) (Extension) Extend the above function to include a fourth argument numDecimals which allows the operation to support different amounts of decimal places from 1 to 10.

HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with different values as well as the below:
```javascript
console.log(0.3 == currencyAddition(0.1, 0.2)) // true
console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true
```

#### 6. Array Deduplication
Create a function unique(duplicatesArray) which takes an array parameter that may include duplicates. Your function should return an array containing only the unique values from duplicatesArray.
Test with the following arrays and create another one of your own.
```javascript
const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]
```

#### 7. Array Methods Practice
Use the following array of book objects to practice the array functions for map, find and filter. Test each of your answers to the below tasks.
```javascript
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];
```
a) Write a function getBookTitle(bookId) that uses the find function to return the title of the book object with the matching id.
b) Write a function getOldBooks() that uses the filter function to return all book objects written before 1950.
c) Write a function addGenre() that uses the map function to add a new genre property to all of the above books, with the value 'classic'.
d) (Extension) Write a function getTitles(authorInitial) that uses map and filter together to return an array of book titles for books written by authors whose names start with authorInitial.
e) (Extension) Write a function latestBook() that uses find and forEach to get the book with the most recent publication date.

#### 8. Map Data Structure
The following code creates a new Map object for storing names beginning with A, B, or C with their phone numbers.
```javascript
const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')
```
a) Create a new phoneBookDEF Map to store names beginning with D, E or F
b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
c) Update the phone number for Caroline
d) Write a function printPhoneBook(contacts) that prints the names and phone numbers in the given Map
e) Combine the contents of the two individual Maps into a single phoneBook Map
f) Print out the full list of names in the combined phone book

#### 9. Object Property Calculations
Given the below salaries object, perform the following tasks.
```javascript
let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
};
```
a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
b) Write a function topEarner(salaries) that calculates and returns the name of the person earning the highest salary

#### 10. Date and Time Operations
The following code uses the Date object to print the current time and the number of hours that have passed today so far. Extend the code to do the following:
```javascript
const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')
```
a) Print the total number of minutes that have passed so far today
b) Print the total number of seconds that have passed so far today
c) Calculate and print your age as: 'I am x years, y months and z days old'
d) Write a function daysInBetween(date1, date2) which calculates and returns the amount of days in between the two given dates.

### Submission:
Once complete, commit your JS file containing all intermediate exercise answers to the Github repository containing your Module 3 answers. Ensure your trainers have access.

### Extension:
Copy this starter code: https://github.com/jobatkinIOD/SEModule1/blob/main/script.js and follow the instructions in the comments to practise using JS functions, arrays and objects. Also try the practice questions at https://www.geeksforgeeks.org/practice-javascript-online/.

### Resources & Extra Learning:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

---

## Lab Exercise 3: JavaScript Advanced
**File:** `JSAdvanced.js`

**Instructions:** Download the JSAdvanced_LabExercises.pdf file from this folder and complete the 10 exercises within it. Include all the answers in a single .js file (or multiple files if clearly named), individually commented to indicate each of the 10 exercises. Use Node.js to run and test your code, using the Terminal in VS Code.

All of the information you need to complete the exercises should be in the Advanced Javascript module material. See slides 1-10 for exercise 1, slides 11-20 for exercises 2-4, slides 21-29 for exercise 5, 31-36 for exercise 6, slides 37-47 for exercise 7, all slides up to 51 for exercise 8, and slides 52-62 for exercises 9 & 10.

**Goal:** To practise using some advanced aspects of Javascript, including closures, decorators, applying context, asynchronous coding with timeouts and promises, prototypes, classes and error handling.

**What it showcases:** Expert-level JavaScript programming with sophisticated patterns, asynchronous handling, and advanced object-oriented design

### Exercise Questions:

#### 1. Closure-Based Counter
makeCounter below is a decorator function which creates and returns a function that increments a counter.
a) Create a second counter counter2 using the makeCounter function and test to see if it remains independent to counter1
b) Modify makeCounter so that it takes an argument startFrom specifying where the counter starts from (instead of always starting from 0)
c) Modify makeCounter to take another argument incrementBy, which specifies how much each call to counter() should increase the counter value by.
```javascript
function makeCounter() {
    let currentCount = 0;
    return function() {
        currentCount++;
        console.log(currentCount)
        return currentCount;
    };
}
let counter1 = makeCounter();
counter1(); // 1
counter1(); // 2
```

#### 2. Asynchronous Message Delays
The following delayMsg function is intended to be used to delay printing a message until some time has passed.
a) What order will the four tests below print in? Why?
b) Rewrite delayMsg as an arrow function
c) Add a fifth test which uses a large delay time (greater than 10 seconds)
d) Use clearTimeout to prevent the fifth test from printing at all.
```javascript
function delayMsg(msg) {
    console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')
```

#### 3. Debouncing Implementation
'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed, similar requests until there's a brief pause, then only executing the most recent of those requests. See https://www.techtarget.com/whatis/definition/debouncing

It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server requests being initiated if a user clicks repeatedly on a button.

Using the following code to test and start with:
a) Create a debounce(func) decorator, which is a wrapper that takes a function func and suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second pause, the most recent call to func should be executed and any others ignored.
b) Extend the debounce decorator function to take a second argument ms, which defines the length of the period of inactivity instead of hardcoding to 1000ms
c) Extend debounce to allow the original debounced function printMe to take an argument msg which is included in the console.log statement.
```javascript
function printMe() {
    console.log('printing debounced message')
}
printMe = debounce(printMe); //create this debounce function for a)
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
setTimeout( printMe, 100);
setTimeout( printMe, 200);
setTimeout( printMe, 300);
```

#### 4. Fibonacci Sequence with Timers
The Fibonacci sequence of numbers is a famous pattern where the next number in the sequence is the sum of the previous 2.
e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
a) Write a function printFibonacci() using setInterval that outputs a number in the Fibonacci sequence every second.
b) Write a new version printFibonacciTimeouts() that uses nested setTimeout calls to do the same thing
c) Extend one of the above functions to accept a limit argument, which tells it how many numbers to print before stopping.

#### 5. Context Binding Issues
The following car object has several properties and a method which uses them to print a description. When calling the function normally this works as expected, but using it from within setTimeout fails. Why?
```javascript
let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};
car.description(); //works
setTimeout(car.description, 200); //fails
```
a) Fix the setTimeout call by wrapping the call to car.description() inside a function
b) Change the year for the car by creating a clone of the original and overriding it
c) Does the delayed description() call use the original values or the new values from b)? Why?
d) Use bind to fix the description method so that it can be called from within setTimeout without a wrapper function
e) Change another property of the car by creating a clone and overriding it, and test that setTimeout still uses the bound value from d)

#### 6. Function Prototype Extension
Use the Function prototype to add a new delay(ms) function to all functions, which can be used to delay the call to that function by ms milliseconds.
```javascript
function multiply(a, b) {
    console.log( a * b );
}
multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds
```
a) Use the example multiply function below to test it with, as above, and assume that all delayed functions will take two parameters
b) Use apply to improve your solution so that delayed functions can take any number of parameters
c) Modify multiply to take 4 parameters and multiply all of them, and test that your delay prototype function still works.

#### 7. Class Inheritance with Timers
The following DigitalClock class uses an interval to print the time every second once started, until stopped.
```javascript
class DigitalClock {
    constructor(prefix) {
        this.prefix = prefix;
    }
    display() {
        let date = new Date();
        //create 3 variables in one go using array destructuring
        let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;
        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.display();
        this.timer = setInterval(() => this.display(), 1000);
    }
}
const myClock = new DigitalClock('my clock:')
myClock.start()
```
a) Create a new class PrecisionClock that inherits from DigitalClock and adds the parameter precision – the number of ms between 'ticks'. This precision parameter should default to 1 second if not supplied.
b) Create a new class AlarmClock that inherits from DigitalClock and adds the parameter wakeupTime in the format hh:mm. When the clock reaches this time, it should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should default to 07:00 if not supplied.

#### 8. Function Argument Validation
Using the following starter code, create a decorator function to validate function arguments as strings. Test it by decorating the given orderItems function below.
```javascript
function orderItems(itemName) {
    return `Order placed for: ${itemName}`;
}
// create a decorated version of the original function
const validatedOrderItem = validateStringArg(orderItems);
console.log(validatedOrderItem("Apple Watch")); // should run the function
console.log(validatedOrderItem(123)); // should throw an error
```
a) Create a decorator function validateStringArg(fn) which will validate an argument passed to fn to ensure that it is a string, throwing an error if not
b) Extend orderItems to use the ... rest operator, allowing multiple item name arguments, and include them all in the returned string
c) Extend the decorator function to validate as strings all arguments passed to fn
d) When testing the decorated function, use try-catch blocks to handle errors thrown for non-string arguments

#### 9. Promise-Based Random Delays
We can delay execution of a function using setTimeout, where we need to provide both the callback function and the delay after which it should execute.
a) Create a promise-based alternative randomDelay() that delays execution for a random amount of time (between 1 and 20 seconds) and returns a promise we can use via .then(), as in the starter code below
b) If the random delay is even, consider this a successful delay and resolve the promise, and if the random number is odd, consider this a failure and reject it
c) Update the testing code to catch rejected promises and print a different message
d) Try to update the then and catch messages to include the random delay value
```javascript
function randomDelay() {
    // your code
}
randomDelay().then(() => console.log('There appears to have been a delay.'));
```

#### 10. Fetch API with Async/Await
Fetch is a browser-based function to send a request and receive a response from a server, which uses promises to handle the asynchronous response.

The below fetchURLData uses fetch to check the response for a successful status code, and returns a promise containing the JSON sent by the remote server if successful or an error if it failed. (To run this code in a node.js environment, follow the instructions in the comments before the function.)
```javascript
// run 'npm init' and accept all the defaults
// run 'npm install node-fetch'
// run 'npm pkg set type=module'
import fetch from 'node-fetch'
globalThis.fetch = fetch

function fetchURLData(url) {
    let fetchPromise = fetch(url).then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    });
    return fetchPromise;
}
fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log(data))
    .catch(error => console.error(error.message));
```
a) Write a new version of this function using async/await
b) Test both functions with valid and invalid URLs
c) (Extension) Extend your new function to accept an array of URLs and fetch all of them, using Promise.all to combine the results.

### Submission:
Once complete, commit your JS file/s containing all advanced exercise answers to the Github repository containing your Module 3 answers. Ensure your trainers have access.

### Extension:
Follow the instructions in Module 3 - Advanced JS Extra Exercises - eComm 1-8 v2.pdf (in this folder on Google Drive).

### Resources & Extra Learning:
- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
- https://developer.mozilla.org/en-US/docs/Web/API/setTimeout and https://developer.mozilla.org/en-US/docs/Web/API/setInterval
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
- https://javascript.info/call-apply-decorators
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
- https://www.freecodecamp.org/news/javascript-classes-how-they-work-with-use-case/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
- https://www.joshwcomeau.com/javascript/promises/
- https://javascript.info/try-catch

---

## Lab Exercise 4: Advanced JS eCommerce Exercises
**Files:** Multiple class files and `test.js`

**Instructions:** Follow the instructions in Module 3 - Advanced JS Extra Exercises - eComm 1-8 v2.pdf (in this folder on Google Drive).

**Goal:** To practice advanced JavaScript concepts including classes, inheritance, static methods, private fields, validation, and complex object interactions in a real-world eCommerce scenario.

**What it showcases:** Professional-level object-oriented programming with complex business logic, error handling, and modular design patterns

### Common Tips:
- **TIP 1:** You will make your life easier if you have every class in these exercises in its own file.
- **TIP 2:** Create a separate test.js file which imports your various classes, and update it after each exercise to creates a new instances of the classes, run the methods you've created and make sure they're working as expected.
- **TIP 3:** Continue using the test.js class as your testing ground to create new instances of all the difference classes your about to make
- **TIP:** You don't need any UI for this (yet) – in Step 8 you'll write a 'main' program which calls all the other classes and executes the code in such a way that allows a specific use case to occur.

### Exercise Questions:

#### Exercise 1: Basic Object with Getters and Setters
**Objective:** Create a class `Product` with properties `name`, `price`, and `description`, using getters and setters.

**Tip:** Start by defining the class with constructor arguments and implement getters and setters for each property.

**Tip 2:** Using test.js, create a new Product and Print out the products details, then update the Price and reprint the Product details after to make sure its all working correctly.

#### Exercise 2: Prototypal Inheritance
**Objective:** Create classes `TV` and `Shirt` that inherit from `Product`. Add specific properties like `screenSize` for `TV` and `size` for `Shirt`.

**Tip:** Use the `extends` keyword for inheritance and `super` to call the parent constructor.

#### Exercise 3: Using Constructor Functions
**Objective:** Create a new class `Book` using a constructor function, not ES6 classes, with properties and a prototype method to display its info.

**Tip:** Define properties inside the constructor function and methods on the prototype.

#### Exercise 4: Static Methods in Class
**Objective:** Add a static method 'Compare' to `Product` that compares two products based on price.

**Tip:** Define a static method inside the `Product` class that takes two `Product` instances as arguments.

**Tip2:** The Compare function should return a numberic value so that it can be used in a sorting routine later – see this site for example: https://freewebdesigntutorials.com/javaScriptTutorials/jsArrayObject/customSortFunction.php

**Tip3:** In your main.js file, create an Array of Products with different prices, then use the built in Array.sort() function, passing in the static method you just created as the custom sort function

#### Exercise 5: Implementing Validation Logic
**Objective:** In the `Product` class, add validation logic to ensure that the price is always a positive number.

**Tip:** Throw an error in the setter for `price` if a negative value is passed.

**Tip:** in your main.js, attempt to create a Product which breaks this validation and see what happens

#### Exercise 6: Private Members
**Objective:** Add a private field `stockCount` to `Product` and a method to update it safely.

**Tip:** Use the `#` syntax to define `stockCount` as a private field and implement a public setter method to modify it.

#### Exercise 7: Cart Class for Managing Products
**Objective 7.1:** Create a `Cart` class to manage a collection `Product` instances.

**Tip:** Store products in an array within the `Cart` class and use array methods for management.

**Tip:** Each item in the collection will be an object { product: Product, quantity: number }

**Objective 7.2:** Add a Sort method to the Cart, which sorts the Products by using the Compare method from Exercise 4

#### Exercise 8: Simulating Transactions and Handling Errors

##### Substep 8.1: Adding Products to Cart
**Objective:** Implement a method in the Cart class to add products.

**Tip:** Create an addItem method which takes a Product instance and quantity as arguments. Check if the product is already in the cart and update the quantity accordingly.

**Tip:** Each 'item' in the Cart should be an object with two properties: the Product & the Quantity

Adding a Product would like this:
```javascript
items.push({ product, quantity });
```

##### Substep 8.2: Removing Products from Cart
**Objective:** Implement a method to remove a specific product from the cart.

**Tip:** Create a removeItem method that takes a product identifier and removes it from the cart's product array.

##### Substep 8.3: Updating Quantities in Cart
**Objective:** Allow updating the quantity of a specific item in the cart.

**Tip:** Add a method updateQuantity that takes a product identifier and a new quantity, then updates the item in the cart.

##### Substep 8.4: Add validation to the Cart
**Objective:** Add validation to the Cart so that:
1) Nothing except an object of type 'Product' can be added.

**Tip:** using the built in 'instanceof' operator to check a parameter's type

2) The quantity of the Product being added must be greater than 0

##### Substep 8.5: Handle Sales
**Objective:** Implement functionality to apply sales to an instance of a product, BUT in a way where all instances of a particular product type (e.g., all TVs) will have the same sale price.

**Tips:**
- Add a Boolean getter/setter isOnSale to the Product class.
- In each child class of Product, add a static property 'salePrice' which is private
- Add a method getSalePrice that returns a standard SalePrice for that type of product.
- Create a CalculateTotal method in the Cart class. It should check if each Product is on sale (isOnSale is true). If so, use the SalePrice from the corresponding child class; otherwise, use the standard Price.

##### Substep 8.6: Handle Discounts
**Objective:** Implement functionality to apply discount codes to the Cart i.e. all Products in the Cart need to have the Discount Code applied.

**Tips:**
- In the Product class, add a method applyDiscount which takes a discount percentage and calculates the discounted price.
- In the Cart class, add a private collection of predefined DiscountCodes. Each code object should include a code string (e.g., "Hot32"), a Boolean flag indicating if the code is applied (e.g., isApplied), and a DiscountPercentage (e.g., 10%).
- Add a method applyDiscountCode in the Cart class. This method should take a code and check against the predefined discount codes. If it matches, set the isApplied flag to true for that discount code.
- Modify the CalculateTotal method in the Cart class. It should check which discount codes are applied and calculate the total price considering these discounts. If a discount code is applied, apply its discount percentage to every product in the cart.

##### Substep 8.7: Create a Main Program use case
**Objective:** Write a 'main' program which uses all the classes above to simulate the following scenario:
- User adds 3 TVs, and 1 Tshirt to the Cart
- Display the Cart total (print it contents and total to the console).
- User clicks 'Sort' on the Cart
- Display the Cart total (print it contents and total to the console).
- The user then enters a valid discount code, which results in the whole order being 15% discounted.
- Display the Cart total (print it contents and total to the console).
- The user then adds 4 books to their Cart. The books are on sale.

**NOTE:** You will most likely get a error here because we can't add anything to Cart unless it's a Product. See TIP#1 below to fix the error

- Display the Cart total (print it contents and total to the console).
- The user removes 2 TVs from their Cart.
- Display the Cart total (print it contents and total to the console).
- User clicks 'Sort' on the Cart again to see if that changes the order of the products…
- Display the Cart total (print it contents and total to the console).

Make sure the total prints out what you expect each time.

**TIP#1:** The error you encountered is because we're trying to use ES6 class-based inheritance (Product) with the older function-based approach (Book). To resolve this, we should also convert Book into an ES6 class, which aligns with the ES6 class structure of Product i.e. use 'extends' in book.js like we've done with tv.js and shirt.js – including giving the book a sale price and a static getSalePrice method!

Also – be careful about the order of parameters in your constructor functions.

##### Solution Example for 8.7:
```javascript
const Product = require('./Product');
const TV = require('./TV');
const Shirt = require('./Shirt');
const Book = require('./Book');
const Cart = require('./Cart');

// Initialize Cart and Products
const cart = new Cart();
const tv = new TV("Super HD TV", 1500, "75-inch 4K TV", 75);
const tshirt = new Shirt("Casual Shirt", 29.99, "Cotton shirt", 'L');
const book = new Book("1984", 17, "A great book", "George Orwell");

// User adds 3 TVs and 1 T-shirt to the Cart
cart.addItem(tv, 3);
cart.addItem(tshirt, 1);
console.log("Cart after adding 3 TVs and 1 T-shirt:");
cart.displayCart();

// User clicks 'Sort' on the Cart
cart.sort();
console.log("\nCart after sorting:");
cart.displayCart();

// User enters a valid discount code
try {
    cart.applyDiscountCode("Hot32"); // Assuming this code gives a 15% discount
} catch (error) {
    console.error(error.message);
}
console.log("\nCart after applying discount code:");
cart.displayCart();

// User adds 4 books to their Cart (books are on sale)
book.isOnSale = true;
cart.addItem(book, 4);
console.log("\nCart after adding 4 books on sale:");
cart.displayCart();

// User removes 2 TVs from their Cart
cart.updateQuantity(tv, 1); // Updating the quantity of TVs to 1
console.log("\nCart after removing 2 TVs:");
cart.displayCart();

// User clicks 'Sort' on the Cart again
cart.sort();
console.log("\nCart after sorting again:");
cart.displayCart();
```

### Submission:
Once complete, commit all your class files and test files to the Github repository containing your Module 3 answers. Ensure your trainers have access.

---

## Assessment Criteria

Each lab exercise is evaluated on:

### Technical Implementation
- **Code Quality:** Clean, readable, and well-structured JavaScript
- **Best Practices:** Following modern JavaScript conventions and patterns
- **Functionality:** All features working as intended with proper error handling
- **Performance:** Efficient algorithms and optimized code execution

### JavaScript Mastery
- **Syntax Proficiency:** Correct use of ES6+ features and modern syntax
- **Concept Understanding:** Deep comprehension of JavaScript fundamentals
- **Problem Solving:** Creative solutions to complex programming challenges
- **Code Organization:** Logical structure and modular design

### Professional Development
- **Documentation:** Clear comments and code explanations
- **Error Handling:** Robust validation and exception management
- **Testing Mindset:** Consideration of edge cases and error scenarios
- **Scalability:** Code that can be extended and maintained

## Getting Started

1. **Setup Development Environment:**
   - Ensure Node.js is installed for running JavaScript files
   - Use `node filename.js` to execute each lab file
   - Consider using VS Code with JavaScript extensions

2. **Lab Progression:**
   - Complete labs in order (Fundamentals → Intermediate → Advanced → eCommerce)
   - Each lab builds upon concepts from previous exercises
   - Take time to understand each concept before moving forward

3. **Resources:**
   - Use browser Developer Tools for debugging
   - Reference MDN documentation for JavaScript methods
   - Practice concepts in browser console for immediate feedback

4. **Execution:**
   - Run each file with: `node JSFundamentals.js`, `node JSIntermediate.js`, `node JSAdvanced.js`
   - For eCommerce exercises, run: `node test.js` to test your implementations
   - Observe console output to understand program behavior
   - Experiment with modifying values to see different results

## Key Learning Outcomes

### JavaScript Fundamentals Mastery
- **Type System:** Complete understanding of JavaScript's dynamic typing
- **Function Concepts:** Multiple function syntaxes and their use cases
- **Object Patterns:** Object creation, methods, and property management
- **Control Flow:** Conditional logic and program structure

### Intermediate Programming Skills
- **Data Manipulation:** String processing and array transformation
- **Mathematical Computing:** Precision arithmetic and safe calculations
- **Data Structures:** Effective use of built-in JavaScript collections
- **Time Management:** Date operations and time-based calculations

### Advanced Programming Techniques
- **Asynchronous Mastery:** Promises, async/await, and timer functions
- **Functional Programming:** Higher-order functions and closures
- **OOP Excellence:** Inheritance, polymorphism, and encapsulation
- **Modern JavaScript:** ES6+ features and contemporary patterns

### Professional eCommerce Development
- **Complex Object Hierarchies:** Multi-level inheritance and composition
- **Business Logic Implementation:** Real-world application patterns
- **Data Validation:** Robust input checking and error handling
- **Modular Architecture:** Scalable code organization and testing

## Troubleshooting

### Common Issues:
- **Type Errors:** Check data types before operations
- **Async Problems:** Ensure proper promise handling and timing
- **Scope Issues:** Understand variable scope and closure behavior
- **This Binding:** Be careful with arrow functions and method context
- **Import/Export:** Ensure proper module syntax for multi-file projects

### Best Practices:
- **Use strict mode** for better error detection
- **Handle promises** with proper .catch() or try/catch
- **Validate inputs** before processing
- **Comment complex logic** for future maintenance
- **Test edge cases** thoroughly
- **Separate concerns** into different files and classes

---

**Note:** This module provides comprehensive JavaScript skills essential for modern web development. Master these concepts before progressing to frameworks and advanced libraries in future modules.