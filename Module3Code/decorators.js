// node /Users/samuellove/Documents/GitHub/IOD/Module3/decorators.js

console.log(`
========================
logging/timing information
========================
`);

function printGreeting(name) {
  // simple undecorated function
  console.log("Hello, " + name);
}
printGreeting("Undecorated");
function loggingTimingDecorator(originalFunction) {
  // decorator takes a function as parameter
  return function (name) {
    // and returns that function with extra bits - timing/logging
    console.time("Function timer"); // start a timer
    console.log(`\nExecuting function ...`); // log a message
    const result = originalFunction(name); // execute the original function and store result
    console.timeEnd("Function timer"); // stop the timer
    return result; // return the result of running the original function
  };
}
// returns the original function WITH the timing/logging features included
const decoratedPrintGreeting = loggingTimingDecorator(printGreeting);
decoratedPrintGreeting("Decorated"); // we can still call the decorated version in the same way

console.log(`
========================
caching
========================
`);

function slow(x) {
  // there can be a time-consuming job here, like adding up to a large number
  let random = 0,
    goal = Math.floor(Math.random() * x * 1_000_000); // random large number
  console.log(
    `slow(${x}): randomly generated goal for ${x * 1_000_000} is ${goal}`,
  );
  for (let i = 0; i < goal; i++) random++;
  return random; // return large number after counting to it
}
function cachingDecorator(origFunction) {
  // decorator takes a function as parameter
  const cache = new Map(); // can also include outer environment variables via a closure
  return function (x) {
    // decorator returns same function with extra bits - caching
    if (cache.has(x)) {
      // if the key exists in the cache,
      console.log("returned cached value for " + x);
      return cache.get(x); // read and return the result from it
    }
    let result = origFunction(x); // otherwise, call the original function and store the result
    cache.set(x, result); // then cache (remember) the result for next time
    return result;
  };
}
const fast = cachingDecorator(slow); // we can decorate the original slow function to use caching and make it fast
const fastTimed = loggingTimingDecorator(fast); // we can decorate the fast version to include timing for testing
fastTimed(8); // first time will still be slow because it's uncached
fastTimed(8); // but every time after this will be much faster because result is cached

console.log(`
========================
call-apply
========================
`);

function loggingTimingDecorator(originalFunction) {
  // same decorator function as before
  return function () {
    // BUT now the returned function doesn't name its arguments from here
    console.time("Function timer");
    console.log(`\nExecuting function ...`);
    //const result = originalFunction(name); // WON'T work as name is now undefined
    //const result = originalFunction.call(this, ...arguments) // WILL work, no matter how many args
    const result = originalFunction.apply(this, arguments); // and so does this - try out both
    console.log(arguments); // [Arguments] { '0': 8 }
    console.timeEnd("Function timer"); // stop the timer
    return result; // return the result of running the original function
  };
}

function cachingDecorator(func) {
  const cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }

    // Use call to ensure `this` context is preserved
    const result = func.call(this, x);
    cache.set(x, result);
    return result;
  };
}

let worker = {
  getMultiplier() {
    return Math.floor(Math.random() * 1_000_000);
  },

  slow(x) {
    // This method relies on `this.getMultiplier()`
    const goal = x * this.getMultiplier();
    let counter = 0;
    for (let i = 0; i < goal; i++) counter++;

    console.log(`worker.slow(${x}): randomly generated goal is ${goal}`);
    return counter;
  },
};

// Original method works fine
worker.slow(5);

// Decorate with caching
worker.fast = cachingDecorator(worker.slow);

// Works because `this` context is preserved using call()
console.log(worker.fast(3)); // correct behavior
console.log(worker.fast(3)); // retrieved from cache

console.log(`
========================
borrowing
========================
`);

function isOdd(number) {
  return number % 2;
} // returns true if number is odd, false otherwise
function getOddNumbers() {
  // arguments is not an array, but it 'borrows' the filter function from Array by using call
  return [].filter.call(arguments, isOdd); // arguments is context, isOdd is parameter for filter
}
let results = getOddNumbers(10, 1, 3, 4, 8, 9);
console.log(results); // [ 1, 3, 9 ] (array of all odd arguments)

console.log(`
========================
inheriting
========================
`);

function Product(name, price) {
  this.name = name;
  this.price = price;
  this.salePrice = price * 0.9; // 10% off
}
function Food(name, price) {
  Product.call(this, name, price); // inherits from Product with custom context
  this.category = "food";
}
const cheese = new Food("cheese", 5);
console.log(
  `${cheese.name} is a ${cheese.category} and costs $${cheese.price} ($${cheese.salePrice} on sale)`,
);
