// calculatorController.js
const Calculator = require("../libraries/Calculator");
const calculatorObj = new Calculator();

const addNumbers = (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const result = calculatorObj.add(num1, num2);
  res.status(200).json({ res: result });
};

const subtractNumbers = (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const result = num1 - num2;
  res.status(200).json({ res: result });
};

module.exports = { addNumbers, subtractNumbers };
