# Module 1 Lab Exercises

This repository contains lab exercises for Module 1, covering fundamental web development concepts including command line operations, HTML, CSS, JavaScript, and Git workflows.

## Overview

The Module 1 lab exercises progress from basic command line operations to building a complete web application with testing and version control. Each exercise builds upon previous concepts while introducing new skills.

## Skills Developed

- **Command Line Operations:** File system navigation, directory management
- **HTML5:** Document structure, semantic markup, Emmet abbreviations
- **CSS3:** Styling, layout with Flexbox, external stylesheets
- **JavaScript:** Functions, arrays, objects, DOM manipulation, event handling
- **Testing:** Unit testing, test-driven development, edge case handling
- **Development Tools:** VS Code, Live Server, Prettier, debugger
- **Version Control:** Git workflow, branching, merging, GitHub
- **Project Management:** User stories, storyboarding, project planning
- **Professional Development:** Portfolio creation, web hosting

## Lab Exercise 1 - Command Line Basics
**File:** `Exercise1.sh`, `Exercise1.png`

**What it showcases:** Basic command line navigation and file system operations

### Instructions:
Practice using the commands you learnt to solve the following:
- Create a new folder
- Create another folder inside the first one
- Print the contents of the first folder
- Change directory to the second folder, and print the current path
- Change directory back to the original starting place
- Delete the first folder

**Extension:** Research the `cp`, `mv`, `cat` and `find` commands, and experiment!

---

## Lab Exercise 2 - HTML Fundamentals & VS Code Setup
**File:** `Exercise2.html`

**What it showcases:** HTML5 document structure, VS Code features, and development workflow

### Instructions:
1. Open (or create) your Module1 folder in VS Code
2. Use the Terminal feature of VS Code to issue commands to create a new folder inside Module1 for LabExercises and change into it
3. Inside the above folder, create a new file called exercise2.html
4. As the first character in this file, type an exclamation mark `!` and use the Emmet abbreviation to generate a basic HTML skeleton
5. Populate the `<body>` with basic HTML representing these lab steps
6. Go Live to view and test the HTML
7. Install Prettier VSCode extension and format selected code with Ctrl-K-F
8. Read through [Dealing with files on the MDN](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files) for more tips about website file systems

---

## Lab Exercise 3 - HTML, CSS & JavaScript Integration
**Files:** `Exercise3.html`, `Exercise3.css`, `Exercise3.js`

**What it showcases:** Interactive web development with HTML structure, CSS styling, and JavaScript functionality

### Instructions:
Using the provided starter code:
1. Add an image to each column
2. Add a 'Change Me' button under each heading
3. Style your buttons with CSS
4. Add a script tag with two JS functions, one for each button
5. Clicking each button should change the background colour and the heading text for that column

**Extension 1:** Add text fields under the headings, and replace the heading text with the value of the text fields when the buttons are clicked!

**Extension 2:** Move the CSS and JS code into external files linked from the HTML.

### Starter Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Module 1 Exercise 3</title>
    <style>
        body { font-family: sans-serif; margin: 0; }
        .container { display: flex; min-height: 100vh; align-items: stretch; }
        .column { background: goldenrod; display: flex; flex-direction: column;
                 justify-content: center; align-items: center; flex: 1; }
    </style>
</head>
<body>
    <div class="container">
        <div class="column" id="column1">
            <h1 id="heading1">Hello</h1>
        </div>
        <div class="column" id="column2">
            <h1 id="heading2">World</h1>
        </div>
    </div>
</body>
</html>
```

---

## Lab Exercise 4 - JavaScript Functions
**File:** `Exercise4.js`

**What it showcases:** Function creation, mathematical operations, and string manipulation

### Instructions:
Use the learnings from this lesson to design some very simple functions. Call them with different values.

1. Create 4 functions for the 4 main mathematical operations (`-`, `+`, `/`, `*`). Return the calculated value and then output it to the screen
2. Create a function that takes the name of a person as an argument, and prints out "Hello <name>" to the console

**Hint:** Search online on how to concatenate two strings.

---

## Lab Exercise 5 - JavaScript Arrays
**File:** `Exercise5.js`

**What it showcases:** Array manipulation, debugging techniques, and VS Code debugger usage

### Instructions:
For understanding more about arrays, try creating an array that has 5 elements:
- Replace the value of the element at position 1 and 4
- Add a new element to the beginning of the array
- Remove the element at the end of the array
- Print the array to the console

**Extension:** Attach the VS Code debugger to your script and add a breakpoint on the first line. Step through your code line by line to watch how it executes.

---

## Lab Exercise 6 - JavaScript Objects & JSON
**File:** `Exercise6.js`

**What it showcases:** Object creation, property manipulation, and working with JSON data structures

### Instructions:
- Try creating a JSON object variable for a book. The book should have a title, description, author and number of pages
- Try printing these object property values in your console individually and via the whole book object
- Update the description of the book

**Extension:** Create an array of 5 book objects

---

## Lab Exercise 7 - Testing & Documentation
**File:** `Exercise7.js`

**What it showcases:** Unit testing principles, code documentation, and test-driven development concepts

### Instructions:
Using the functions you created for Exercise 4:
- Write a specification comment for each function
- Write at least 3 unit tests for each function
- In the unit tests, try to include both expected and non-typical test values (such as zero, decimal or negative numbers)

---

## Lab Exercise 8 - Dice Generator Project
**Files:** `Exercise8/` directory containing:
- `index.html` - Main HTML file
- `style.css` - Styling
- `dice.js` - Dice rolling functionality
- `ui.js` - User interface logic
- `dice.test.js` - Unit tests
- `package.json` - Project dependencies
- `outline.md` - Project planning document

**What it showcases:** Complete project development lifecycle including planning, Git workflow, modular code architecture, and testing

### Project Brief:
You have been hired by devsInc to create a landing page for their new project. They want to support people playing tabletop games from home and require a Dice Generator.

### Features:
- The user should be able to choose different dice, such as a D6 or a D10 (number of faces)
- The user should be able to roll their chosen dice to see the random outcome

### Instructions:
1. Define on paper, all the user stories (functionalities) you will need for this page
2. Make a simple storyboard of the user using the system
3. Create a git repository for the project
4. Clone the project locally
5. Work on the project creating 2 branches, one for the UI, and one for rolling the dice, committing and merging when completed
6. Create the roll dice function by passing an argument, in order to reuse the same function multiple times
7. Write unit tests for the roll dice function
8. When complete, push the content to your git repository

---

## Lab Exercise 9 - Portfolio Website
**What it showcases:** Professional portfolio development and web hosting

### Instructions:
Learning to code is just one step, to make people know that you know how to code will make a difference. Artists have Pinterest, makers have Etsy, we have our portfolio websites! That is where our name will appear, and the first web site most people will google when they want to hire us.

Create your own portfolio website using what you have learned so far! Use what you have learned to make your portfolio site! Maybe it will not look great today, but one day it will!

**Free starter templates:** [Bootstrap Portfolio Templates](https://bootstrapmade.com/bootstrap-portfolio-templates/)

---
