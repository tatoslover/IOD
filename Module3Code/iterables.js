// node /Users/samuellove/Documents/GitHub/IOD/Module3/iterables.js

console.log(`
========================
iterables
========================
`);

const animalsArr = ["tiger", "lion", "elephant", "giraffe"];
for (let animal of animalsArr) {
  console.log(animal);
} // prints each animal in turn

// const animalObj = { name: "tiger", genus: "panthera", class: "mammal" };
// for (let property of animalObj) {
//   console.log(property);
// } // TypeError: animalObj is not iterable

console.log(`
========================
Array.from
========================
`);
// array.from(arraylike, mapFn, thisArg)
// array.from(iterable, mapFn, thisArg)

console.log(Array.from("string")); // [ 's', 't', 'r', 'i', 'n', 'g' ]
console.log(Array.from(new Set(["cat", "bat", "sat", "cat", "bat"]))); // [ 'cat', 'bat', 'sat' ]
console.log(
  Array.from(
    new Map([
      [1, "one"],
      [2, "two"],
      [3, "three"],
    ]),
  ),
);
// [ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]
function makeArray() {
  return Array.from(arguments);
}
console.log(makeArray(1, 2, 3)); // [ 1, 2, 3 ]
