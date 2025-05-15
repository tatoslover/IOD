// node /Users/samuellove/Documents/GitHub/IOD/Module3Code/prototypes.js

console.log(`
========================
Prototypal Inheritance
========================
`);

let animal = { eats: true, sleeps: true, legs: 4, mammal: true }; // inherits from Object prototype
let animalPrototype = Object.getPrototypeOf(animal); // recommended way to get prototype
console.log(animalPrototype); // BUT printing it via console.log is incomplete
console.log(Object.getOwnPropertyNames(animalPrototype)); // prints all prototype (Object) properties

let rabbit1 = { jumps: true };
Object.setPrototypeOf(rabbit1, animal); // NEW recommended way, uses default property descriptor settings

let rabbit2 = Object.create(animal, {
  // creates a new object from prototype, with custom properties
  jumps: {
    // name of custom 'own' property for rabbit object
    value: true, // property descriptor to set the property value
    enumerable: true, // property descriptor to make this enumerable - otherwise jumps won’t be in for...in
  },
});

console.log(rabbit1, rabbit2); // { jumps: true } - only prints 'own' properties, not inherited ones
console.log(rabbit1.legs, rabbit2.legs); // 4 - inherited properties do exist
for (let prop in rabbit1) console.log(`${prop} is ${rabbit1[prop]}`); // own properties, then inherited ones
for (let prop in rabbit2) console.log(`${prop} is ${rabbit2[prop]}`); // own properties, then inherited ones

console.log(`
========================
Constructor Function Prototypes
========================
`);

function Rabbit(name) {
  // constructor function, first letter capitalised by convention
  this.jumps = true;
  this.name = name;
}
Rabbit.prototype = animal; // sets the prototype to inherit from (same animal object as previous)
let whiteRabbit = new Rabbit("White Rabbit");
console.log(whiteRabbit); // { jumps: true, name: 'White Rabbit' } - own properties
for (let prop in whiteRabbit) console.log(`${prop} is ${whiteRabbit[prop]}`); // all properties

console.log(`
========================
Native Prototypes
========================
`);

const obj = {}; // simple empty object
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true: its prototype is Object prototype
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(obj))); // inherited properties from Object prototype

const arr = []; // simple empty array
console.log(Object.getPrototypeOf(arr) === Array.prototype); // true: its prototype is Array prototype
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(arr))); //inherited properties from prototype

String.prototype.show = function () {
  // creates new 'show' function on built-in String prototype
  console.log(this);
};
"BOOM!".show(); // BOOM! - we can now call .show() on any string, since they all inherit from the prototype;

// polyfilling for String.prototype
if (!String.prototype.repeat) {
  // if there's no such function in the prototype already
  String.prototype.repeat = function (n) {
    // define a repeat function to repeat the string n times
    return new Array(n).join(this); // uses the string ('this') as glue to join n empty array items
  };
}
console.log("La".repeat(3)); // LaLaLa

// define our own join() function for objects
const obj2 = {
  0: "Hello",
  1: "world",
  length: 2, // needed for join to work
};
obj2.join = Array.prototype.join; // adds a join function to THIS object that uses Array.join()
Object.prototype.join = Array.prototype.join; // adds a join function to ALL objects
console.log(obj2.join(",")); // Hello,world
