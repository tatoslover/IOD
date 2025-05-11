// node /Users/samuellove/Documents/GitHub/IOD/Module3/primatives.js

const n = 1.23456; // primitive floating point number
console.log(n.toFixed(2)); // 1.23 - fixed to 2 decimal places
console.log(n.toPrecision(10)); // 1.234560000 - fills or rounds to the exact number of digits

const hello = "hello world"; // primitive string
console.log(hello.toUpperCase()); // HELLO WORLD
console.log(hello.endsWith("world")); // true

const user = {
  name: "John",
};
console.log("User: " + user); // User: [object Object]

const user2 = {
  name: "John",
  toString() {
    return this.name; // custom string value
  },
};
console.log("User: " + user2); // User: John

const apple = {
  name: "Apple",
  category: "Granny Smith",
  price: 1.2,
  valueOf() {
    // without this special function, we can’t multiply the object below
    return this.price;
  },
};
console.log(apple * 2); // 2.4
