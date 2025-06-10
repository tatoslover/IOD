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
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <div className="price-display">
        {loading && <p>Loading Bitcoin price...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {!loading && !error && bitcoinPrice && (
          <div>
            <p>
              <strong>1 Bitcoin = {bitcoinPrice.toLocaleString()} {currency}</strong>
            </p>
            <button 
              onClick={refetch}
              style={{ 
                marginTop: '1rem', 
                padding: '0.5rem 1rem',
                backgroundColor: '#667eea',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Refresh Price
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BitcoinRates;
