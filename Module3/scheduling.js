// node /Users/samuellove/Documents/GitHub/IOD/Module3/scheduling.js

console.log(`
========================
setTimeout
========================
`);

function printMessage(msg) {
  console.log(`Message: ${msg}`);
}
// function to be executed, then milliseconds to delay, then arguments for function
let timerId = setTimeout(printMessage, 1000, "prints after 1 sec"); // Message: prints after 1 sec

let cancelledTimerId = setTimeout(
  printMessage,
  1000,
  "timeout cancelled so never prints",
);
clearTimeout(cancelledTimerId); // printMessage function is cancelled before delay of 1 second

setTimeout(() => console.log("log statement inside arrow function"), 500);
// prints 'log statement inside arrow function' after 0.5 seconds

setTimeout(() => console.log("first message"), 5000); //asynchronous code with 5s delay
setTimeout(() => console.log("second message"), 3000); //asynchronous code with 3s delay
setTimeout(() => console.log("third message"), 1000); //asynchronous code with 1s delay
setTimeout(() => console.log("fourth message"), 0); //asynchronous code with no delay
console.log("fifth message"); //standard synchronous code
//order of messages when running code:
// fifth message (first, synchronous therefore no delay)
// fourth message (second, even though comes before fifth message, still no delay)
// third message (prints after 1s)
// second message (prints after 3s)
// first message (prints after 5s). Timers do not stack, so total of 5s delay between first and fifth;

console.log(`
========================
setInterval
========================
`);

let tickId = setInterval(() => console.log("tick"), 2000); // 'tick' every 2s
setTimeout(() => clearInterval(tickId), 10 * 1000); // after 10s ticking stops

function repeatInterval(delay, limit) {
  let counter = 1; // part of the outer environment record for repeatInterval
  // intervalTimer is a reference to interval, to allow it to be cancelled
  let intervalTimer = setInterval(function repeatThis() {
    console.log(
      "repeatInterval: repeated " + counter + " of " + limit + " times",
    );
    if (counter == limit) clearInterval(intervalTimer); // cancel interval after execution limit
    counter++; // keep track of how many times the interval has executed, in outer environment
  }, delay); // delay is milliseconds between intervals
}
repeatInterval(2000, 10); // make the interval repeat every 2 seconds for a max of 10 times

console.log(`
========================
Nested setTimeout
========================
`);

function repeatTimeout(delay, limit) {
  let counter = 1;
  // setTimeout only happens once, so we don't need the reference to cancel it
  setTimeout(
    function repeatThis(current) {
      // named function, so we can refer to it recursively
      console.log(
        "repeatTimeout: repeated " + current + " of " + limit + " times",
      );
      // we do need to call setTimeout recursively so that it repeats executing the function
      if (current < limit) setTimeout(repeatThis, delay, current + 1); // repeat if limit not reached
    },
    delay,
    counter,
  );
}
repeatTimeout(2000, 10); // make the timeout repeat every 2 seconds for a max of 10 times
