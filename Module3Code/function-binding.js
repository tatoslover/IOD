// node /Users/samuellove/Documents/GitHub/IOD/Module3Code/function-binding.js

console.log(`
========================
Losing this
========================
`);

const user = {
  name: "John",
  sayHi() {
    console.log(`Hi, ${this.name}`);
  },
};
user.sayHi(); // called directly, works! Hi, John
// csetTimeout(user.sayHi, 1000); // passed as reference, fails! Hi, undefined

console.log(`
========================
Solutions
========================
`);

const user2 = {
  name: "John",
  sayHi() {
    console.log(`Hi, ${this.name}`);
  },
};
setTimeout(function () {
  user2.sayHi();
}, 1000); // works! Hi, John
setTimeout(() => user2.sayHi(), 1000); // same as above, arrow function (more common)

const user3 = {
  name: "John",
  sayHi() {
    console.log(`Hi, ${this.name}`);
  },
};
const boundSayHi = user3.sayHi.bind(user3); // new function reference with user context explicitly bound
setTimeout(boundSayHi, 1000); // works! Hi, John
