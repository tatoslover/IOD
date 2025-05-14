// node /Users/samuellove/Documents/GitHub/IOD/Module3/destructuring-assignment.js

console.log(`
========================
Array destructuring
========================
`);

const mj = ["Michael", "Jordan"];
const [mjFirst, mjLast] = mj; // destructure (unpack) array on right into separate variables on left
console.log(mjFirst, mjLast); // Michael Jordan

const [jcFirst, jcLast, , , jcPlace] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the",
  "Roman",
  "Republic",
];
console.log(`${jcFirst} ${jcLast} is a ${jcPlace}`); // Julius Caesar is a Roman

const [a, b, c] = "abc"; // strings are iterable, so can break into characters
const [one, two, three] = new Set([1, 2, 3]); // Sets are iterable, so can be destructured
const [[type, quantity]] = new Map([["apple", 4]]); // Maps are iterable too
// now we have 8 individual variables: a, b, c, one, two, three, type, quantity
console.log(a, b, c, one, two, three, type, quantity); // a b c 1 2 3 apple 4

const monarch = {}; // empty object
[monarch.title, monarch.name] = "King Charles".split(" "); // store array pieces in object properties
console.log(monarch); // { title: 'King', name: 'Charles' }

const teeProduct = {
  id: 1,
  title: "Sleeveless Tee",
  price: 23.95,
  category: "Shirts",
};
// key and value are just variable names, could be anything
for (let [key, value] of Object.entries(teeProduct)) {
  console.log(`${key}: ${value}`); // id: 1, title: Sleeveless Tee, price: 23.95 ...
}

let student = "James",
  teacher = "Andrew";
[student, teacher] = [teacher, student];
console.log(student); // Andrew
console.log(teacher); // James

console.log(`
========================
The array rest …
========================
`);

const [jc2First, jc2Last, ...jc2Titles] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the",
  "Roman",
  "Republic",
];
console.log(jc2Titles); // [ 'Consul', 'of the', 'Roman', 'Republic' ]
console.log(jc2Titles.length); // 4

const [firstName = "Unknown", lastName = "Unknown", title = "Citizen"] = [
  "Marcus",
];
console.log(firstName); // "Marcus"
console.log(lastName); // "Unknown" (default value used)
console.log(title); // "Citizen" (default value used)

console.log(`
========================
Object destructuring
========================
`);

// property names (keys) on right are matched to variable names on left
let { width1, height1, title1 } = {
  title1: "My Component",
  height1: 100,
  width1: 200,
};
console.log(width1, height1, title1); // 200 100 My Component

let { width2 = 200, height2 = 100, title2 } = { title2: "My Component" };
console.log(width2, height2, title2); // 200 100 My Component

function displayComponent({ height = 200, width = 100, title }) {
  console.log(
    `<div style="width:${width}px; height:${height}px"><h2>${title}</h2></div>`,
  );
}
displayComponent({ width: 200, title: "My Awesome Component" });
displayComponent({ title: "My Amazing Component" });
displayComponent({ width: 300, height: 300, title: "My Average Component" });

let options = { width3: 200, height3: 100, title3: "My Component" };
let { title3, ...rest } = options;
console.log(title3); // My Component
console.log(rest); // { width: 200, height: 100 }
