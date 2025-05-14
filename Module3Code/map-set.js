// node /Users/samuellove/Documents/GitHub/IOD/Module3/map-set.js

console.log(`
========================
Map methods
========================
`);

// === Creating and Using a Map ===
const exampleMap = new Map(); // Create a new empty Map object

// === .set(key, value) ===
exampleMap.set(1, "number one"); // Adds a number key
exampleMap.set("1", "string one"); // Adds a string key (distinct from number key)
exampleMap.set(true, "true"); // Adds a boolean key
exampleMap.set({ name: "John" }, { phone: "0412345678" }); // Adds an object key
exampleMap.set("1", "second string one"); // Overwrites existing value for key "1"

console.log(exampleMap.size); // === .size ===
// Output: 4 (only 4 keys due to overwrite)

console.log(exampleMap); // View full Map content
// Output: Map(4) {
//   1 => 'number one',
//   '1' => 'second string one',
//   true => 'true',
//   { name: 'John' } => { phone: '0412345678' }
// }

// === .get(key) ===
console.log(exampleMap.get("1")); // Output: 'second string one'
console.log(exampleMap.get(2)); // Output: undefined (key doesn't exist)

// === .has(key) ===
console.log(exampleMap.has(1)); // Output: true

// === .delete(key) ===
console.log(exampleMap.delete(true)); // Output: true (key removed)

// === .clear() ===
exampleMap.clear(); // Removes all entries from the Map

// === Creating a Map with Initial Values ===
const recipeMap = new Map([
  ["flour", "1 cup"],
  ["milk", "1/2 cup"],
  ["eggs", 2],
  ["butter", "50g"],
]);

// === .keys() ===
for (let ingredient of recipeMap.keys()) {
  console.log(ingredient); // Output: flour, milk, eggs, butter
}

// === .values() ===
for (let quantity of recipeMap.values()) {
  console.log(quantity); // Output: 1 cup, 1/2 cup, 2, 50g
}

// === .entries() (default for for...of) ===
for (let item of recipeMap) {
  console.log(item); // Output: ['flour', '1 cup'], ['milk', '1/2 cup'], etc.
}

console.log(`
========================
Map conversions
========================
`);

const priceMap = new Map([
  ["banana", 1],
  ["pineapple", 2],
  ["watermelon", 5],
]);
const priceObject = Object.fromEntries(priceMap);
console.log(priceObject); // { banana: 1, pineapple: 2, watermelon: 5 }

const priceMap2 = new Map(Object.entries(priceObject));
console.log(priceMap2); // Map(3) { 'banana' => 1, 'pineapple' => 2, 'watermelon' => 5 }
console.log(priceMap2.get("banana")); // 1

console.log(`
========================
Caching
========================
`);

// Simulate fetching external data, which can be slow
function fetchExternalData(id) {
  console.log(`Fetching data for ID: ${id}`);
  const data = `Data for ID: ${id}`; // Simulated data
  // Simulate delay
  const start = Date.now();
  while (Date.now() - start < 100) {} // 100ms delay
  return data;
}

// Create a Map for caching
const cache = new Map();

function getCachedData(id) {
  // Check if data is already in the cache
  if (cache.has(id)) {
    return cache.get(id); // return cached value
  }

  // If not in cache, fetch "external" data and store in cache
  const data = fetchExternalData(id);
  cache.set(id, data);
  return data;
}

// Example usage with timers

console.time("First fetch");
console.log("#1: " + getCachedData(1)); // First fetch: 99.466ms
console.timeEnd("First fetch");

console.time("Second fetch (cached)");
console.log("#2: " + getCachedData(1)); // Second fetch (cached): 0.014ms
console.timeEnd("Second fetch (cached)");

console.log(`
========================
Set methods
========================
`);

// Create a new Set with initial names
const names = new Set(["Pedro", "Oliver", "Jack", "Mateo"]); // new Set(iterable)

// Attempt to add duplicate values (will not be added)
names.add("Mateo"); // .add(value): 'Mateo' already exists, no effect
names.add("Oliver"); // .add(value): 'Oliver' already exists, no effect

// Add a new unique name
names.add("Bruno"); // .add(value): adds 'Bruno' to the Set

// Check how many unique names are in the Set
console.log(names.size); // .size: 5 - only unique names are counted

// View the entire Set
console.log(names);
// Set(5) { 'Pedro', 'Oliver', 'Jack', 'Mateo', 'Bruno' }

// Delete a value from the Set
console.log(names.delete("Jack")); // .delete(value): true - 'Jack' was found and removed

// Check if certain names exist in the Set
console.log(names.has("Jack")); // .has(value): false - 'Jack' was deleted
console.log(names.has("Mateo")); // .has(value): true - 'Mateo' is still in the Set

// Clear all values from the Set
names.clear(); // .clear(): removes all values

// Confirm the Set is now empty
console.log(names); // Set(0) {}

console.log(`
========================
Set iteration
========================
`);

const names2 = new Set(["Pedro", "Oliver", "Jack", "Mateo"]);
// traditional style of for loop - works because Sets are iterable
for (let name of names2) {
  console.log(name);
}
// more concise for simple operations, newer syntax using arrow function
names2.forEach((name) => console.log(name));
