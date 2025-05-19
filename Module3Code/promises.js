// node /Users/samuellove/Documents/GitHub/IOD/Module3Code/promises.js

console.log(`
========================
Overview
========================
`);

// promise // consume the promise by responding to outcomes when they happen
//   .finally(() => console.log("Wait is over, promise has settled.")) // always prints
//   .then((result) => console.log("Success! " + result)) // prints resolve msg
//   .catch((error) => console.log("Error! " + error)); // prints reject msg

console.log(`
========================
Example
========================
`);

// example promise. settles after 250ms with success or failure depending on random number
const promise = new Promise((resolve, reject) => {
  // resolve/reject are callback functions
  if (Math.random() > 0.5)
    setTimeout(() => resolve("Random number ok"), 250); // success
  else setTimeout(() => reject("Random number too low"), 250); // failure
});
promise // consume the promise by responding to outcomes when they happen
  .finally(() => console.log("Wait is over, promise has settled.")) // always prints
  .then((result) => console.log("Success! " + result)) // prints resolve msg
  .catch((error) => console.log("Error! " + error)); // prints reject msg

console.log(`
========================
chanining
========================
`);

let start = 10;
new Promise((resolve, reject) => {
  resolve(start); // resolve promise successfully with value of 10
})
  .then((result) => {
    // when resolve is called, it triggers .then()
    console.log(result);
    return result + start; // values returned from .then() are also promises
  })
  .then((result) => {
    // so we can chain them together
    console.log(result);
    return result + start; // increasing result by 10 each time
  })
  .then((result) => {
    // we can continue to chain them together
    console.log(result);
    return result + start; // increasing result by 10 each time
  });
// prints 10, 20, 30

console.log(`
========================
returning
========================
`);

let start2 = 10;
new Promise((resolve) => setTimeout(() => resolve(start2), start2 * 10))
  .then((result) => {
    // promise handler function inside .then()
    console.log(result);
    let next = result + start2;
    return new Promise((resolve) => setTimeout(() => resolve(next), next * 10));
  })
  .then((result) => {
    // can explicitly return new promises
    console.log(result);
    let next = result + start2;
    return new Promise((resolve) => setTimeout(() => resolve(next), next * 10));
  })
  .then((result) => {
    // which use the results of previously resolved promises in the chain
    console.log(result);
    let next = result + start2;
    return new Promise((resolve) => setTimeout(() => resolve(next), next * 10));
  });
// prints 10, 20, 30, but with 100, 200 and 300ms delays in between

console.log(`
========================
async/await
========================
`);

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve("Simple successful promise2"), 250);
});
// using .then to process asynchronously:
promise2.then((msg) => console.log(msg));
// using await to process synchronously (if using await in a function it needs to be async):
let msg = await promise2;
console.log(msg);

// async function asyncFunctionDeclaration() { ... } // function declaration syntax
// const asyncFunctionExpression = async function() { ... } // function expression syntax
// const asyncFunctionArrow = async () => { ... } // arrow function syntax

async function waitForPromise() {
  // async function allows synchronous promise handling internally
  // since we have synchronous code and no .catch(), we use try ... catch for errors
  try {
    let promiseResult = await promise; // waits here as long as promise needs to resolve
    console.log(`Success: ${promiseResult}`); // then continues executing other code
    return true;
  } catch (error) {
    console.error(`Failure: ${error.message}`);
  }
  //only gets here if return true above did NOT happen, ie. there was an error
  return false;
}
