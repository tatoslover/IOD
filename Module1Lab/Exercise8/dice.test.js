const rollDice = require("./dice");

// Test all common dice types
const diceTypes = [4, 6, 8, 10, 12, 20, 100];

diceTypes.forEach(faces => {
  test(`rollDice returns a number between 1 and ${faces} for a D${faces}`, () => {
    for (let i = 0; i < 100; i++) {
      const result = rollDice(faces);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(faces);
      expect(Number.isInteger(result)).toBe(true);
    }
  });
});

test("rollDice throws an error for invalid input", () => {
  expect(() => rollDice(0)).toThrow("Invalid number of faces.");
  expect(() => rollDice(-3)).toThrow("Invalid number of faces.");
  expect(() => rollDice(-1)).toThrow("Invalid number of faces.");
});

test("rollDice distribution test for D6", () => {
  const results = {};
  const rolls = 6000; // Large sample size
  
  // Initialize results object
  for (let i = 1; i <= 6; i++) {
    results[i] = 0;
  }
  
  // Roll dice many times
  for (let i = 0; i < rolls; i++) {
    const result = rollDice(6);
    results[result]++;
  }
  
  // Each face should appear roughly 1000 times (±200 for randomness)
  for (let face = 1; face <= 6; face++) {
    expect(results[face]).toBeGreaterThan(800);
    expect(results[face]).toBeLessThan(1200);
  }
});
