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

setTimeout(() => {
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
}, 1000); // Delay enough to ensure Question 2 appears first

setTimeout(() => {
  console.log(`
========================
Question 4
========================
  `);

  // using setInterval
  function printFibonacci(limit = 10) {
    return new Promise((resolve) => {
      let a = 0,
        b = 1,
        count = 0;

      const intervalId = setInterval(() => {
        console.log(b);
        [a, b] = [b, a + b];
        count++;

        if (count >= limit) {
          clearInterval(intervalId);
          resolve(); // finish and allow chaining
        }
      }, 1000);
    });
  }

  // using setTimeout
  function printFibonacciTimeouts(limit = 10) {
    let a = 0,
      b = 1,
      count = 0;

    function printNext() {
      if (count >= limit) return;

      console.log(b);
      [a, b] = [b, a + b];
      count++;

      setTimeout(printNext, 1000);
    }

    printNext(); // initial call
  }

  printFibonacci(8).then(() => {
    printFibonacciTimeouts(8);
  });
}, 2500);

setTimeout(() => {
  console.log(`
========================
Question 5
========================
`);

  let car = {
    make: "Porsche",
    model: "911",
    year: 1964,
    description() {
      console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    },
  };

  let car2 = {
    ...car,
    year: 2020,
  }; // cloning doesn't alter original so output remains the same

  let car3 = {
    ...car,
    model: "Cayenne",
  };

  setTimeout(car.description.bind(car), 200); // Still logs "911", not "Cayenne"

  car.description(); // works because "this" refers to "car"

  setTimeout(car.description, 200); // when passing car.description directly to setTimeout, it loses its binding to the car object

  setTimeout(() => car.description(), 200); // fixed by wrapping the call inside a function

  setTimeout(car.description.bind(car), 200); // doesn't need a wrapper function & still refers to original
}, 19000);

setTimeout(() => {
  console.log(`
========================
Question 6
========================
`);

  Function.prototype.delay = function (ms) {
    const originalFunction = this;

    return function (...args) {
      setTimeout(() => originalFunction(...args), ms);
    };
  };

  function multiply(a, b) {
    console.log(a * b);
  }

  multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

  Function.prototype.delay = function (ms) {
    const originalFunction = this;

    return function (...args) {
      setTimeout(() => originalFunction.apply(this, args), ms);
    };
  };

  function multiplyAll(a, b, c, d) {
    console.log(a * b * c * d);
  }

  multiplyAll.delay(1000)(2, 3, 4, 5); // prints 120 after 1 second
}, 21000);

setTimeout(() => {
  console.log(`
========================
Question 7
========================
`);

  class DigitalClock {
    constructor(prefix) {
      this.prefix = prefix;
    }
    display() {
      let date = new Date();
      //create 3 variables in one go using array destructuring
      let [hours, mins, secs] = [
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
      ];
      if (hours < 10) hours = "0" + hours;
      if (mins < 10) mins = "0" + mins;
      if (secs < 10) secs = "0" + secs;
      console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }
    stop() {
      clearInterval(this.timer);
    }
    start() {
      this.display();
      this.timer = setInterval(() => this.display(), 1000);
    }
  }
  const myClock = new DigitalClock("my clock:");
  // myClock.start();

  class PrecisionClock extends DigitalClock {
    constructor(prefix, precision = 1000) {
      super(prefix);
      this.precision = precision;
    }

    start() {
      this.display();
      this.timer = setInterval(() => this.display(), this.precision);
    }
  }

  class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime = "07:00:00") {
      super(prefix);
      this.wakeupTime = wakeupTime;
    }

    display() {
      let date = new Date();
      let [hours, mins, secs] = [
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
      ];

      if (hours < 10) hours = "0" + hours;
      if (mins < 10) mins = "0" + mins;
      if (secs < 10) secs = "0" + secs;

      const timeStr = `${hours}:${mins}:${secs}`;
      console.log(`${this.prefix} ${hours}:${mins}:${secs}`);

      if (timeStr === this.wakeupTime) {
        console.log("Wake Up!");
        this.stop();
      }
    }
  }

  const clock1 = new PrecisionClock("precision clock:", 2000); // ticks every 2 seconds
  clock1.start();

  setTimeout(() => {
    clock1.stop();
    console.log("precision clock stopped after 5 seconds");
  }, 5000);

  setTimeout(() => {
    const alarm = new Date(Date.now() + 5000); // 5 seconds from now
    let hh = alarm.getHours().toString().padStart(2, "0");
    let mm = alarm.getMinutes().toString().padStart(2, "0");
    let ss = alarm.getSeconds().toString().padStart(2, "0");

    const clock2 = new AlarmClock("alarm clock:", `${hh}:${mm}:${ss}`);
    clock2.start();
  }, 6000);
}, 23000);

setTimeout(() => {
  console.log(`
========================
Question 8
========================
`);

  function orderItems(...itemNames) {
    return `Order placed for: ${itemNames.join(", ")}`;
  }

  function validateStringArg(fn) {
    return function (...args) {
      for (let arg of args) {
        if (typeof arg !== "string") {
          throw new Error("All arguments must be strings");
        }
      }
      return fn(...args);
    };
  }

  const validatedOrderItem = validateStringArg(orderItems);

  try {
    console.log(validatedOrderItem("Apple Watch", "iPhone"));
  } catch (error) {
    console.error("Error:", error.message);
  }

  try {
    console.log(validatedOrderItem("MacBook", 123));
  } catch (error) {
    console.error("Error:", error.message);
  }
}, 35000);

setTimeout(() => {
  console.log(`
========================
Question 9
========================
`);

  function randomDelay() {
    const delay = Math.floor(Math.random() * 20) + 1; // 1 to 20 seconds
    const ms = delay * 1000;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (delay % 2 === 0) {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, ms);
    });
  }

  randomDelay()
    .then((delay) => {
      console.log(`Delay of ${delay} seconds completed successfully.`);
    })
    .catch((delay) => {
      console.log(`Delay of ${delay} seconds failed (odd number).`);
    });
}, 36000);

setTimeout(() => {
  console.log(`
========================
Question 10
========================
`);
}, 57000);
