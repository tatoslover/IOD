// node "/Users/samuellove/Documents/GitHub/IOD/Labs/Lab3/Exercise6.js"

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
});
