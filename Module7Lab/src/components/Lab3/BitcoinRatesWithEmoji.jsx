import { useState } from "react";
import { useBitcoinPrice } from "../../hooks/useBitcoinPrice";
import EmojiDisplay from "./EmojiDisplay";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRatesWithEmoji() {
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
      <div className="header-with-emoji">
        <h3>Lab 3: Bitcoin Exchange Rate with Emoji Context</h3>
        <EmojiDisplay size="medium" showName={true} />
      </div>

      <div className="context-explanation" style={{
        backgroundColor: '#f0f8ff',
        padding: '1rem',
        borderRadius: '6px',
        marginBottom: '1.5rem',
        borderLeft: '4px solid #667eea'
      }}>
        <p style={{ margin: 0, fontSize: '0.9rem', color: '#555' }}>
          <strong>Context Integration:</strong> The emoji above is shared from the global EmojiContext.
          Changes made in the Emoji Mood Switcher will be reflected here automatically!
        </p>
      </div>

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
            <EmojiDisplay size="small" inline={true} />
            <p>Loading Bitcoin price...</p>
          </div>
        )}
        {error && (
          <div className="error-state">
            <p style={{ color: 'red' }}>Error: {error}</p>
            <EmojiDisplay size="small" inline={true} />
          </div>
        )}
        {!loading && !error && bitcoinPrice && (
          <div className="success-state" style={{ textAlign: 'center' }}>
            <div className="price-info" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <EmojiDisplay size="small" inline={true} style={{ marginRight: '1rem' }} />
              <div>
                <p>
                  <strong>1 Bitcoin = {bitcoinPrice.toLocaleString()} {currency}</strong>
                </p>
              </div>
            </div>
            <button
              onClick={refetch}
              style={{
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

      <div className="emoji-integration-demo" style={{
        marginTop: '2rem',
        padding: '1rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '6px'
      }}>
        <h5>Current Market Mood:</h5>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '1rem',
          backgroundColor: 'white',
          borderRadius: '4px'
        }}>
          <EmojiDisplay size="large" />
          <div>
            <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: '500' }}>
              The market is feeling: <EmojiDisplay size="small" showName={true} inline={true} />
            </p>
            <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: '#666' }}>
              This emoji reflects the current mood set in the Emoji Mood Switcher component.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BitcoinRatesWithEmoji;
