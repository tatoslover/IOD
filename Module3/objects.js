// node /Users/samuellove/Documents/GitHub/IOD/Module3/objects.js

let student = {};
console.log(student);

const user = {
  // user object contained within curly braces
  name: "joe", // string property with key 'name' and value 'joe'
  age: 20, // numeric property with key 'age' and value 20
  "has a dog": true, // multi-word property key 'has a dog' with boolean value true
};

console.log(user); // get object property called name and log it
let dogOwner = user["has a dog"]; // get value of property 'has a dog' and assign to new variable
user.age = 21; // set (or assign) new value to object property called age
user.location = "NSW"; // create new object property called location and set (assign) a value
delete user.location; // delete property of user object called location
console.log(user);

const object = {
  2: "value of numeric property",
  2: "value of string property",
};
console.log(object); // { '2': 'value of string property' } since 2 and ‘2’ are same

const phone = {
  model: "iPhone 11",
  colour: "black",
};
if (phone.colour) console.log(`My ${phone.model} is ${phone.colour}`); // prints message
if (phone.storage) {
  // undefined counts as false, so the below won't print
  console.log(`My ${phone.model} has ${phone.storage}GB`);
} else {
  console.log("Phone object doesn't have storage property");
}
