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

let goal = 5;
for (let i = 0; i < goal; i++) {
  console.log(`Iteration ${i} of ${goal}`);
}

const phones = {
  model: "iPhone 11",
  colour: "black",
  storage: 64,
};

for (let key in phones) {
  // iterates over each property in the phone object, stores in ‘key’ variable
  console.log("key: " + key); // prints each object property name (key) in turn
  console.log("value: " + phones[key]); // prints each object value in turn
}

let person1 = { name: "Anna" }; // object - stored by reference
let person2 = person1; // person2 points to same memory location as person1
person1.name = "Brian";
console.log(person2.name); // Brian, even though we changed person1.name
let person3 = "Carly"; // string - stored by value
let person4 = person3; // person4 points to separate memory location than person3, but both store same value;
person3 = "David";
console.log(person4); // still Carly, since person3 and person4 are string primitives and store independent values

const user2 = { name: "Elliot", age: 27 };
const userClone = {}; // empty object, refers to different memory location
for (let key in user2) {
  // iterate over user properties
  userClone[key] = user2[key]; // re-create them in userClone
}
console.log(userClone); // { name: 'Elliot', age: 27 }

const userCloneSpread = { ...user2 }; // spread or unpack user properties into new object
console.log(userCloneSpread); // { name: 'Elliot', age: 27 }

const userCloneOverride = { ...user2, age: 28, location: "New Zealand" };
console.log(userCloneOverride); // { name: 'Elliot', age: 28, location: 'New Zealand' }

const vehicle = { make: "Toyota", model: "Camry" };
const mergedUser = { ...user2, ...vehicle };
console.log(mergedUser); // { name: 'Elliot', age: 27, make: 'Toyota', model: 'Camry' }

const box1 = {
  weight: "20kg",
  dimensions: {
    // nested object property
    width: "30cm",
    height: "10cm",
  },
};
const box2 = { ...box1 }; // shallow clone
box1.dimensions.height = "12cm"; // change box1 nested object property
console.log(box2); // box2 references box1 dimensions and picks up height change

const userB = {
  name: "Bilbo Baggins",
  sing: function () {
    // method of user object
    console.log("Roads go ever ever on");
  },
  sing2() {
    // shorthand method syntax, does same as above
    console.log("Over rock and under tree");
  },
};
userB.sing(); // Roads go ever ever on
userB.sing2(); // Over rock and under tree

const userBB = {
  name: "Bilbo Baggins",
  printGreeting() {
    console.log(`Hello, I'm ${this.name}`); // 'this' is the current object
  },
};
// 'userBB' is before the dot, provides the context where 'this' comes from
userBB.printGreeting(); // Hello, I'm Bilbo Baggins

const userB3 = {
  name: "Bilbo Baggins",
  printThis() {
    console.log(this); // 'this' is the current object
    return this; // if we return it, we can 'chain' object methods together
  },
  printGreeting() {
    console.log(`Hello, I'm ${this.name}`); // 'this' is the current object
  },
};
userB3.printThis().printGreeting(); // methods chained together, works because printThis returns this

function User(first, last) {
  // constructor function
  this.first = first;
  this.last = last;
  this.hasShortName = () => this.first.length <= 3;
}
// we can create multiple users with different names
let user1 = new User("Tim", "Smith"); // need to use 'new"
console.log(user1); // User { first: 'Tim', last: 'Smith' }
console.log(user1.hasShortName()); // true

function User2(first, last) {
  // constructor function
  //this = {}; // implicitly
  this.first = first;
  this.last = last;
  this.hasShortName = () => this.first.length <= 3;
  //return this; // implicitly
}

class User3 {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  hasShortName() {
    return this.first.length >= 3;
  }
}
let user3 = new User3("Tina", "Smith"); // need to use 'new'
console.log(user3); // User { first: 'Tina', last: 'Smith' }
console.log(user3.hasShortName()); // false
