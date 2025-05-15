// node /Users/samuellove/Documents/GitHub/IOD/Module3Code/classes.js

console.log(`
========================
Overview
========================
`);

// a class is like a template or blueprint
class ExampleClass {
  // each instance of the class will have any properties
  prop1 = "value1";
  prop2 = "value2";
  constructor() {
    // constructor function creates a new instance of this class
  }
  method1() {
    // methods are functions of the class
  }
}

console.log(`
========================
Inheritance
========================
`);

// 1. Basic inheritance example

class Animal1 {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed} kph.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

class Rabbit1 extends Animal1 {
  hide() {
    console.log(`${this.name} hides!`);
  }
}

let bunny1 = new Rabbit1("bunny1");
bunny1.run(9);
bunny1.hide();

// 2. Method override using super

class Rabbit2 extends Animal1 {
  stop() {
    super.stop();
    this.hide();
  }

  hide() {
    console.log(`${this.name} hides!`);
  }
}

let bunny2 = new Rabbit2("bunny2");
bunny2.run(9);
bunny2.stop();

// 3. Constructor extension and new properties

class Rabbit3 extends Animal1 {
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }

  stop() {
    super.stop();
    this.hide();
  }

  hide() {
    console.log(`${this.name} hides!`);
  }
}

let bunny3 = new Rabbit3("bunny3", 8);
console.log(bunny3.earLength); // 8

// 4. Property override

class Animal4 {
  type = "animal";

  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  describe() {
    console.log(`${this.name} is a ${this.type}`);
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed} kph.`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

class Rabbit4 extends Animal4 {
  type = "rabbit";

  hide() {
    console.log(`${this.name} hides!`);
  }

  stop() {
    super.stop();
    this.hide();
  }
}

let bunny4 = new Rabbit4("bunny4");
bunny4.describe(); // bunny4 is a rabbit
bunny4.run(12);
bunny4.stop();

let animal4 = new Animal4("fuzzy wuzzy");
animal4.describe(); // fuzzy wuzzy is a animal

console.log(`
========================
Static methods & properties
========================
`);

class Person {
  static latin = "persona"; // static (class) property, belongs to class not any instance
  constructor(name) {
    this.name = name; // standard property, is unique to each instance of the class
  }
  getName() {
    // standard method, belongs to each instance of the class
    return this.name;
  }
  static createAnonymous() {
    // static (class) method, belongs to class not any instance
    return new Person("Unnamed Person");
  }
}
let jonas = new Person("Jonas");
console.log(jonas.getName()); // Jonas - name and getName() belong to an instance of Person
console.log(jonas.latin); // undefined - latin property doesn't belong to jonas
console.log(Person.latin); // persona - latin property belongs to Person class
let anon = Person.createAnonymous(); // use static (factory) method to create generic Person instance

console.log(`
========================
Protected Methods & Properties
========================
`);

class Laptop {
  _hardDiskType = "HDD"; // protected property, meant to be internal
  constructor(brand) {
    this.brand = brand; // public property, can be used externally by instances
  }
  getHDiskType() {
    return this._hardDiskType;
  } // public method to access protected property
}
const macbook = new Laptop("Macbook Pro");
console.log(macbook.brand); // public property, accessed externally from any instance
console.log(macbook._hardDiskType); // works, not recommended as it violates encapsulation principles
console.log(macbook.getHDiskType()); // recommended way to access protected property

console.log(`
========================
Private Methods & Properties
========================
`);

class Laptop2 {
  _hardDiskType = "HDD"; // protected property, SHOULD only be used by inheriting classes
  #numCPUFans = 1; // private property, CAN only be used internally by class methods
  constructor(brand) {
    // constructors are always public
    this.brand = brand; // public property
  }
  isGaming() {
    return false;
  } // public method
  getHDiskType() {
    return this._hardDiskType;
  } // public method to access protected property
  _;
  increaseCPUFans() {
    // protected method
    if (this.isGaming()) this.#numCPUFans++; // can access private properties internally
  }
}
const macbook2 = new Laptop2("Macbook Pro");
// console.log(macbook2.#numCPUFans); // error: private property is not accessible

// Protected vs Private

class Laptop3 {
  #numCPUFans = 1; // truly private — only accessible inside Laptop

  constructor(brand) {
    this.brand = brand; // public
    this._hardDiskType = "HDD"; // "protected" by convention
  }

  _increaseCPUFans() {
    this.#numCPUFans++; // works: it's in same class
  }

  getHDiskType() {
    return this._hardDiskType;
  }

  getNumCPUFans() {
    return this.#numCPUFans;
  }
}

class GamingLaptop extends Laptop3 {
  constructor(brand) {
    super(brand);
    this._hardDiskType = "SSD"; // OK: protected-style property
    this._increaseCPUFans(); // OK: inherited protected-style method

    // ❌ Not allowed: this.#numCPUFans = 2;
    // SyntaxError: Private field '#numCPUFans' must be declared in an enclosing class
  }

  isGaming() {
    return true;
  }
}

const alienware = new GamingLaptop("Alienware");

console.log(alienware.brand); // ✅ public
console.log(alienware.getHDiskType()); // ✅ safe way to access "protected"
console.log(alienware.getNumCPUFans()); // ✅ can expose private info via method

// ❌ Direct access to private field not allowed
// console.log(alienware.#numCPUFans); // SyntaxError
