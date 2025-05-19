// node /Users/samuellove/Documents/GitHub/IOD/Module3Lab/JSAdvanced.js

console.log(`
========================
Question 1
========================
`);

function makeCounter(startFrom = 0, incrementBy = 1) {
  let currentCount = startFrom; // argument specifying where counter starts with default 0
  return function () {
    currentCount += incrementBy; // argument specifying counters increase each step with default 1
    console.log(currentCount);
    return currentCount;
  };
}

let counter1 = makeCounter(0, -2);
counter1(); // -2
counter1(); // -4
counter1(); // -6

let counter2 = makeCounter(5, 3); // independent counter
counter2(); // 8
counter2(); // 11
counter2(); // 14

console.log(`
========================
Question 2
========================
`);

const delayMsg = (msg) => {
  // arrow function
  console.log(`This message will be printed after a delay: ${msg}`);
};

setTimeout(delayMsg, 100, "#1: Delayed by 100ms"); // fourth
setTimeout(delayMsg, 20, "#2: Delayed by 20ms"); // third
setTimeout(delayMsg, 0, "#3: Delayed by 0ms"); // second
delayMsg("#4: Not delayed at all"); // first

const timerId = setTimeout(delayMsg, 15000, "#5: Delayed by 15 seconds"); // large delay message
clearTimeout(timerId); // prevented large delay message

console.log(`
========================
Question 3
========================
`);

function debounce(func, ms) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, ms);
  };
}

function printMe(msg) {
  console.log(`printing debounced message: ${msg}`);
}

printMe = debounce(printMe, 1000);

// Fire multiple times — only last one runs
setTimeout(() => printMe("#1"), 100);
setTimeout(() => printMe("#2"), 200);
setTimeout(() => printMe("#3"), 300); // Only this one should print (after 1000ms)

console.log(`
========================
Question 4
========================
`);

function printFibonacci(limit = 10) {
  let a = 0,
    b = 1,
    count = 0;

  const intervalId = setInterval(() => {
    console.log(b);
    [a, b] = [b, a + b];
    count++;

    if (count >= limit) {
      clearInterval(intervalId);
    }
  }, 1000);
}

printFibonacci(10); // prints 10 Fibonacci numbers, one every second

console.log(`
========================
Question 5
========================
`);

console.log(`
========================
Question 6
========================
`);

console.log(`
========================
Question 7
========================
`);

console.log(`
========================
Question 8
========================
`);

console.log(`
========================
Question 9
========================
`);

console.log(`
========================
Question 10
========================
`);
