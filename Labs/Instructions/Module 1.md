## Description

This file contains the exercises for IOD Labs for Module 1.

## Exercise 1

Practice using the commands you learnt to solve the following:
- Create a new folder
- Create another folder inside the first one
- Print the contents of the first folder
- Change directory to the second folder, and print the current path
- Change directory back to the original starting place
- Delete the first folder
- Extension: Research the cp, mv, cat and find commands, and experiment!

## Exercise 2

1. Open (or create) your Module1 folder in VS Code.
2. Use the Terminal feature of VS Code to issue commands to create a new folder inside Module1 for LabExercises and change into it.
3. Inside the above folder, create a new file called exercise2.html
4. As the first character in this file, type an exclamation mark ! and use the Emmet abbreviation to generate a basic HTML skeleton
5. Populate the <body> with basic HTML representing these lab steps
6. Go Live to view and test the HTML
7. Install Prettier VSCode extension and format selected code with Ctrl-K-F
8. Read through Dealing with files on the MDN for more tips about website file systems.

## Exercise 3

```html
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Module 1 Exercise 3</title>
        <style>
            body {
                font-family: sans-serif;
                margin: 0;
            }
            .container {
                display: flex;
                min-height: 100vh;
                align-items: stretch;
            }
            .column {
                background: goldenrod;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                flex: 1;
            }
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

Using this code as a starter:
1. Add an image to each column
2. Add a ‘Change Me’ button under each heading
3. Style your buttons with CSS
4. Add a script tag with two JS functions, one for each button
5. Clicking each button should change the background colour and the heading text for that column.
- Extension 1: Add text fields under the headings, and replace the heading text with
the value of the text fields when the buttons are clicked!
- Extension 2: Move the CSS and JS code into external files linked from the HTML.

## Exercise 4

Use the learnings from this lesson to design some very simple functions.
Call them with different values.
- Create 4 functions for the 4 main mathematical operations (-,+,/,*).
  Return the calculated value and then output it to the screen.
- Create a function that takes the name of a person as an argument, and prints out “Hello <name>” to the console.
  Hint: search online on how to concatenate two strings.

## Exercise 5

- For understanding more about arrays, try creating an array that has 5 elements.
- Replace the value of the element at position 1 and 4.
- Add a new element to the beginning of the array
- Remove the element at the end of the array
- Print the array to the console.
- Extension: attach the VS Code debugger to your script and add a breakpoint on the first line. Step through your code line by line to watch how it executes.

## Exercise 6

- Try creating a json object variable for a book. The book should have a title, description, author and number of pages.
- Try printing these object property values in your console individually and via the whole book object.
- Update the description of the book.
- Extension: Create an array of 5 book objects.

## Exercise 7

Using the functions you created for Exercise 4:

- Write a specification comment for each function.
- Write at least 3 unit tests for each function.
- In the unit tests, try to include both expected and non-typical test values (such as zero, decimal or negative numbers).

## Exercise 8

You have been hired by devsInc to create a landing page for their new project.
They want to support people playing tabletop games from home and require a Dice Generator.

Features:
- The user should be able to choose different dice, such as a D6 or a D10 (number of faces).
- The user should be able to roll their chosen dice to see the random outcome.

Steps:
- Define on paper, all the user stories (functionalities) you will need for this page.
- Make a simple storyboard of the user using the system.
- Create a git repository for the project
- Clone the project locally
- Work on the project creating 2 branches, one for the UI, and one for rolling the dice, committing and merging when completed.
- Create the roll dice function by passing an argument, in order to reutilize the same function multiple times
- Write unit tests for the roll dice function.
- When complete, push the content to your git repository.

## Exercise 9

Learning to code is just one step, to make people know that you know how to code will make a difference.
Artists have Pinterest, makers have Etsy, we have GitHub!
That is where our name will appear, and the first web site most people will google when they want to hire us.
GitHub offers the possibility to create your own page, so let’s make use of it!
Simply follow the instructions here to create your first page.
Follow this link and use what you have learned to make your portfolio site!
Maybe it will not look great today, but one day it will!
Some free starter templates if you need them: https://bootstrapmade.com/bootstrap-portfolio-templates/
