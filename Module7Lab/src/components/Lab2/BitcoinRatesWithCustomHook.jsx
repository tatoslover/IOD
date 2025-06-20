import React, { useState } from 'react';
import { useBitcoinPrice } from '../../hooks/useBitcoinPrice';
import './BitcoinRatesWithCustomHook.css';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRatesWithCustomHook() {
  const [currency, setCurrency] = useState(currencies[0]);

  // Exercise 2: Using custom hook with useReducer for state management
  const { price: bitcoinPrice, loading, error, refetch } = useBitcoinPrice(currency);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRatesWithCustomHook componentBox">
      <h3>Lab 2: Bitcoin Rates with Custom Hook</h3>
      <p className="lab-description">
        This component demonstrates Exercise 2: Using a custom hook (<code>useBitcoinPrice</code>)
        that implements <code>useReducer</code> for complex state management. Includes API caching
        and rate limiting to prevent excessive requests.
      </p>

      <div className="currency-selector">
        <label>
          Choose currency:
        </label>
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </div>

      <div className="price-display">
        {loading && (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading Bitcoin price for {currency}...</p>
          </div>
        )}

        {error && (
          <div className="error-state">
            <p style={{ color: 'red' }}>❌ {error}</p>
            {error.includes('Rate limit') && (
              <p style={{ color: '#ff8c00', fontSize: '0.9rem', margin: '0.5rem 0' }}>
                💡 The API has usage limits. Prices are cached for 30 seconds to reduce requests.
              </p>
            )}
            <button
              onClick={refetch}
              className="retry-button"
            >
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && bitcoinPrice && (
          <div className="success-state">
            <div className="price-card">
              <h4>Current Bitcoin Price</h4>
              <p className="price-value">
                <strong>1 BTC = {bitcoinPrice.toLocaleString()} {currency}</strong>
              </p>
              <p className="last-updated">
                Last updated: {new Date().toLocaleTimeString()}
              </p>
            </div>
            <button
              onClick={refetch}
              className="refresh-button"
            >
              🔄 Refresh Price
            </button>
          </div>
        )}
      </div>

      <div className="technical-info">
        <h4>🔧 Technical Implementation:</h4>
        <ul>
          <li><strong>Custom Hook:</strong> <code>useBitcoinPrice(currency)</code></li>
          <li><strong>State Management:</strong> <code>useReducer</code> with actions for FETCH_START, FETCH_SUCCESS, FETCH_ERROR</li>
          <li><strong>API Integration:</strong> CoinGecko API with caching and rate limiting</li>
          <li><strong>Cleanup:</strong> AbortController prevents race conditions</li>
          <li><strong>Dependencies:</strong> Effect re-runs when currency changes</li>
        </ul>
      </div>
    </div>
  );
}

export default BitcoinRatesWithCustomHook;
