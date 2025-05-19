// node /Users/samuellove/Documents/GitHub/IOD/Module3Code/class-exercise.js

console.log(`
========================
Task 1 – Synchronous
========================
`);

function startPreparing1() {
  console.log("(1.1) Started preparing pizza ...");
}

const makeBase1 = function () {
  console.log("(1.2) Made the base");
};

const addSauceAndCheese1 = () => {
  console.log("(1.3) Added the sauce and cheese");
};

function addToppings1() {
  console.log("(1.4) Added the pizza toppings");
}

const cookPizza1 = function () {
  console.log("(1.5) Cooked the pizza");
};

const pizzaReady1 = () => {
  console.log("(1.6) Pizza is ready");
};

startPreparing1();
makeBase1();
addSauceAndCheese1();
addToppings1();
cookPizza1();
pizzaReady1();

setTimeout(() => {
  console.log(`
========================
Task 2 – setTimeout
========================
  `);

  function startPreparing2() {
    setTimeout(() => console.log("(2.1) Started preparing pizza ..."), 500);
  }

  const makeBase2 = function () {
    setTimeout(() => console.log("(2.2) Made the base"), 1000);
  };

  const addSauceAndCheese2 = () => {
    setTimeout(() => console.log("(2.3) Added the sauce and cheese"), 1500);
  };

  function addToppings2() {
    setTimeout(() => console.log("(2.4) Added the pizza toppings"), 2000);
  }

  const cookPizza2 = function () {
    setTimeout(() => console.log("(2.5) Cooked the pizza"), 2500);
  };

  const pizzaReady2 = () => {
    setTimeout(() => console.log("(2.6) Pizza is ready"), 3000);
  };

  startPreparing2();
  makeBase2();
  addSauceAndCheese2();
  addToppings2();
  cookPizza2();
  pizzaReady2();
}, 100);

setTimeout(() => {
  console.log(`
========================
Task 3 – Promises
========================
`);

  function startPreparing3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("(3.1) Started preparing pizza ...");
        resolve();
      }, 500);
    });
  }

  const makeBase3 = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        console.log("(3.2) Made the base");
        resolve();
      }, 500);
    });

  const addSauceAndCheese3 = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        console.log("(3.3) Added the sauce and cheese");
        resolve();
      }, 500);
    });

  function addToppings3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("(3.4) Added the pizza toppings");
        resolve();
      }, 500);
    });
  }

  const cookPizza3 = function () {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("(3.5) Cooked the pizza");
        resolve();
      }, 500);
    });
  };

  const pizzaReady3 = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        console.log("(3.6) Pizza is ready");
        resolve();
      }, 500);
    });

  startPreparing3()
    .then(makeBase3)
    .then(addSauceAndCheese3)
    .then(addToppings3)
    .then(cookPizza3)
    .then(pizzaReady3);
}, 4000);

setTimeout(() => {
  console.log(`
========================
Task 4 – Async/Await
========================
`);

  function delay(message, step, duration = 500) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`(4.${step}) ${message}`);
        resolve();
      }, duration);
    });
  }

  async function makePizza4() {
    await delay("Started preparing pizza ...", 1);
    await delay("Made the base", 2);
    await delay("Added the sauce and cheese", 3);
    await delay("Added the pizza toppings", 4);
    await delay("Cooked the pizza", 5);
    await delay("Pizza is ready", 6);
  }

  makePizza4();
}, 8000);
