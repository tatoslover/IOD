// node /Users/samuellove/Documents/GitHub/IOD/Module3Code/error-handling.js

console.log(`
========================
try...catch
========================
`);

// Syntax

try {
  // code . . .
} catch (err) {
  // code . . .
}

// Not runnable

try {
  const error = "mismatched quotes";
} catch (error) {
  console.log("will not catch above error");
}
// SyntaxError: Invalid or unexpected token - doesn't go to catch block

// Non-syntactical errors

try {
  noSuchVariable;
} catch (error) {
  // error is just a variable name. 'error', 'err' or 'e' are all commonly used
  console.log("caught an error: " + error.message); // all errors have a message property
}
// caught an error: noSuchVariable is not defined
console.log(
  "even though an error occurred above, it was caught so code continues",
);

// Asynchronous

// try {
//   setTimeout(() => noSuchVariable, 1000);
// } catch (error) {
//   // error is just a variable name. 'error', 'err' or 'e' are all commonly used
//   console.log("only synchronous errors! " + error.message); // all errors have a message property
// }
// console.log(
//   "prints synchronous code then throws uncaught asynchronous error after 1 sec",
// );

console.log(`
========================
throw
========================
`);

function checkJson(json) {
  // checks json argument for validity and ensures a name property
  try {
    const user = JSON.parse(json); // parse string into object
    if (!user.name) {
      throw new SyntaxError("Incomplete data: no name"); // we can throw our own custom errors
    }
    return true; // returns true (valid json) if no error was thrown above
  } catch (err) {
    if (err instanceof SyntaxError) {
      // once caught, we can do specific things based on error type
      console.log("JSON Error: " + err.message);
    } else {
      throw err; // rethrow other non-syntax errors; invalid json will still cause a crash
    }
  }
  return false; // returns false if any error occurred
}

console.log(`
========================
finally
========================
`);

function checkJson(json) {
  try {
    // ... as above
    return true;
  } catch (err) {
    //... as above
  } finally {
    console.log("at the end"); // always prints, even if returning true or throwing an error
    // used to complete operations and perform cleanup regardless if we hit errors or not,
    // eg. closing db connections, removing interval timers, cancelling event listeners, etc
  }
  return false; // returns false if any error occurred
}
