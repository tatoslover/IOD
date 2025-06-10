import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [lastCalculation, setLastCalculation] = useState(null);

  const handleCalculate = () => {
    setError('');
    
    // Validate inputs
    if (num1 === '' || num2 === '') {
      setError('Please enter both numbers');
      setResult(null);
      return;
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    // Check for valid numbers
    if (isNaN(number1) || isNaN(number2)) {
      setError('Please enter valid numbers');
      setResult(null);
      return;
    }

    let calculation;
    switch (operator) {
      case '+':
        calculation = number1 + number2;
        break;
      case '-':
        calculation = number1 - number2;
        break;
      case '*':
        calculation = number1 * number2;
        break;
      case '/':
        if (number2 === 0) {
          setError('Cannot divide by zero');
          setResult(null);
          return;
        }
        calculation = number1 / number2;
        break;
      default:
        setError('Invalid operator');
        setResult(null);
        return;
    }

    setResult(calculation);
    setLastCalculation({
      num1: number1,
      num2: number2,
      operator: operator,
      result: calculation
    });
  };

  const handleClear = () => {
    setNum1('');
    setNum2('');
    setOperator('+');
    setResult(null);
    setError('');
    setLastCalculation(null);
  };

  const getDisplaySymbol = (op) => {
    switch (op) {
      case '*': return '×';
      case '/': return '÷';
      default: return op;
    }
  };

  return (
    <div className="calculator-container">
      <h3>Basic Calculator</h3>
      
      <div className="calculator-form">
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="num1">First Number:</label>
            <input
              type="number"
              id="num1"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              placeholder="Enter first number"
            />
          </div>
          
          <div className="operator-group">
            <label htmlFor="operator">Operator:</label>
            <select
              id="operator"
              value={operator}
              onChange={(e) => setOperator(e.target.value)}
            >
              <option value="+">+ (Add)</option>
              <option value="-">- (Subtract)</option>
              <option value="*">× (Multiply)</option>
              <option value="/">÷ (Divide)</option>
            </select>
          </div>
          
          <div className="input-group">
            <label htmlFor="num2">Second Number:</label>
            <input
              type="number"
              id="num2"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              placeholder="Enter second number"
            />
          </div>
        </div>
        
        <div className="button-row">
          <button onClick={handleCalculate} className="calculate-btn">
            Calculate
          </button>
          <button onClick={handleClear} className="clear-btn">
            Clear
          </button>
        </div>
        
        <div className="result-section">
          {error && (
            <div className="error-message">
              ❌ {error}
            </div>
          )}
          
          {result !== null && !error && lastCalculation && (
            <div className="result-display">
              <h4>Result:</h4>
              <div className="result-value">
                {lastCalculation.num1} {getDisplaySymbol(lastCalculation.operator)} {lastCalculation.num2} = <span className="answer">{lastCalculation.result}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculator;