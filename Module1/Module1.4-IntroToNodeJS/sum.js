// node /Users/samuellove/Documents/GitHub/IOD/Module1.4-IntroToNodeJS/sum.js
//
// simple sum function.

function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2)); // logs 3
console.log(sum(sum(1, 2), sum(3, 4))); // logs 10
