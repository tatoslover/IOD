// node /Users/samuellove/Documents/GitHub/IOD/tests.js

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
