// node /Users/samuellove/Documents/GitHub/IOD/Module3/strings.js

console.log(`
========================
Special Characters
========================
`);

const guestList = `Guests: \n\t- John \n\t- Pete \n\t- Mary`;
console.log(guestList);

// Carriage return + newline (Windows-style line break)
console.log("Hello\r\nWorld");

// Using quotes inside strings
console.log("It's a beautiful day");
console.log('She said, "Hello!"');

// Backslash
console.log("C:\\Users\\Name");

// Unicode with \xXX — hex representation (2 digits)
console.log("\x7A"); // Output: z

// Unicode with \uXXXX — UTF-16 encoding (4 digits)
console.log("\u00A9"); // Output: ©

// Unicode with \u{XXXXXX} — UTF-32 encoding (1 to 6 digits)
console.log("\u{1F60D}"); // Output: 😍

console.log(`
========================
Comparing Strings
========================
`);

console.log("Z".codePointAt(0)); // 90

console.log(String.fromCodePoint(90)); // Z

console.log(`
========================
Manipulating Strings
========================
`);

const string = "I could be anything you like";
console.log(string.length); // 28 - string is 28 characters long
console.log(string.indexOf("anything")); // 11 - starting at 0 for 'I'
console.log(string.substring(20)); // 'you like' - substring starting at position 20
console.log(string.toUpperCase()); // I COULD BE ANYTHING YOU LIKE
console.log(string + " plus more"); // I could be anything you like plus more

const sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.startsWith("The")); // true - case sensitive
console.log(sentence.endsWith("dog")); // false - needs the full stop
console.log(sentence.split(" ")); // splits into multiple strings using the given separator
// ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']
console.log(sentence.slice(4, 10)); // quick - gets the section between chars 4 and 10
console.log(sentence.replace("quick", "slow")); // The slow brown fox jumps over the lazy dog.
console.log(" extra spaces ".trim()); // extra spaces - trims whitespace from start and end
