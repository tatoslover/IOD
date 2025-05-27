const { square } = require("./square");

test("square 5 to get 25", () => {
  expect(square(5)).toBe(25);
});
