const rollDice = require("./dice");

test("rollDice returns a number between 1 and 6 for a D6", () => {
  for (let i = 0; i < 100; i++) {
    const result = rollDice(6);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(6);
  }
});

test("rollDice throws an error for invalid input", () => {
  expect(() => rollDice(0)).toThrow("Invalid number of faces.");
  expect(() => rollDice(-3)).toThrow("Invalid number of faces.");
});
