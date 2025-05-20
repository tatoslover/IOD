// node /Users/samuellove/Documents/GitHub/IOD/Module4Code/data.js

const carData = [
  {
    title: "Audi",
    description:
      "Audi AG is a German automotive manufacturer of luxury vehicles headquartered in Ingolstadt, Bavaria, Germany.",
  },
  {
    title: "Mercedes-Benz",
    description:
      "Mercedes-Benz, commonly referred to as Mercedes, is a German luxury automotive brand.",
  },
  {
    title: "BMW",
    description:
      "Bayerische Motoren Werke AG, commonly referred to as BMW, is a German multinational corporate manufacturer of luxury vehicles and motorcycles headquartered in Munich, Bavaria, Germany.",
  },
];

function getCars() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(carData);
    }, 1000);
  });
}

// Get data asynchronously, then log for testing
getCars().then((cars) => console.log(cars));
