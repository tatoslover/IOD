// node "/Users/samuellove/Documents/GitHub/IOD/Module1/Module1.7-Variables&DataStructures/arrays.js"

let seas = ["Black Sea", "Caribbean Sea", "North Sea", "Baltic Sea"];
console.log(seas); // [ 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea' ]
seas.push("Red Sea");
console.log(seas); // [ 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea', 'Red Sea' ]

seas.unshift("Adriatic Sea");
console.log(seas); // [ 'Adriatic Sea', 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea', 'Red Sea' ]

let rivers = ["Mississippi", "Amazon", "Nile"];
let lastRiver = rivers.pop();
console.log(lastRiver); // Nile
console.log(rivers); // [ 'Mississippi', 'Amazon' ]

let firstRiver = rivers.shift();
console.log(firstRiver); // Mississippi
console.log(rivers); // [ 'Amazon' ]

let volcanoes = ["Mount Vesuvius", "Mount Etna", "Mount Fuji"];
let fujiIndex = volcanoes.indexOf("Mount Fuji");
console.log(fujiIndex); // 2 (indexes start at 0)

let numVolcanoes = volcanoes.length;
console.log(numVolcanoes); // 3
