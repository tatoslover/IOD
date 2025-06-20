import { useState } from "react";
import { useBitcoinPrice } from "../../hooks/useBitcoinPrice";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);

  // Use custom hook with useReducer for state management
  const { price: bitcoinPrice, loading, error, refetch } = useBitcoinPrice(currency);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <div className="currency-selector">
        <label>
          Choose currency:
        </label>
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </div>
      <div className="price-display">
        {loading && <p>Loading Bitcoin price...</p>}
        {error && (
          <div style={{
            padding: '1rem',
            backgroundColor: '#fff5f5',
            border: '1px solid #fed7d7',
            borderRadius: '6px',
            color: '#c53030'
          }}>
            <p style={{ margin: '0 0 1rem 0', fontWeight: '500' }}>⚠️ {error}</p>
            <button
              onClick={refetch}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
            >
              Try Again
            </button>
          </div>
        )}
        {!loading && !error && bitcoinPrice && (
          <div>
            <div style={{
              padding: '1.5rem',
              backgroundColor: '#f0f8ff',
              border: '2px solid #667eea',
              borderRadius: '8px',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              <p style={{
                margin: '0 0 0.5rem 0',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                color: '#2c3e50'
              }}>
                1 Bitcoin = {bitcoinPrice.toLocaleString()} {currency}
              </p>
              <p style={{
                margin: 0,
                fontSize: '0.9rem',
                color: '#6c757d',
                fontStyle: 'italic'
              }}>
                Last updated: {new Date().toLocaleTimeString()}
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <button
                onClick={refetch}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#667eea',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#5a6fd8'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#667eea'}
              >
                🔄 Refresh Price
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BitcoinRates;
