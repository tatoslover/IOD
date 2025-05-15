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
