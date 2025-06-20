import { useState, useEffect } from "react";
import { useBitcoinPrice } from "../../hooks/useBitcoinPrice";
import { useBitcoinDataManager } from "../../hooks/useBitcoinDataManager";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRatesAdvanced() {
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Simple hook for single currency
  const { price: currentPrice, loading: currentLoading, error: currentError } = useBitcoinPrice(selectedCurrency);

  // Advanced hook for multiple currencies management
  const {
    currencies: trackedCurrencies,
    favorites,
    autoRefresh,
    addCurrency,
    removeCurrency,
    fetchPrice,
    fetchAllPrices,
    toggleFavorite,
    toggleAutoRefresh,
    resetAll,
    getSortedCurrencies,
    getStats
  } = useBitcoinDataManager();

  // Auto-refresh functionality
  useEffect(() => {
    if (!autoRefresh || Object.keys(trackedCurrencies).length === 0) return;

    const interval = setInterval(() => {
      fetchAllPrices();
    }, 30000); // Refresh every 30 seconds

    return () => clearInterval(interval);
  }, [autoRefresh, trackedCurrencies, fetchAllPrices]);

  const stats = getStats();
  const sortedCurrencies = getSortedCurrencies();

  const handleAddCurrency = (currency) => {
    addCurrency(currency);
    fetchPrice(currency);
  };

  const handleRemoveCurrency = (currency) => {
    removeCurrency(currency);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Never';
    return new Date(dateString).toLocaleTimeString();
  };

  const formatPrice = (price, currency) => {
    if (price === null || price === undefined) return 'N/A';
    return `${price.toLocaleString()} ${currency}`;
  };

  return (
    <div className="BitcoinRatesAdvanced componentBox">
      <h3>Bitcoin Exchange Rate - Advanced Demo</h3>

      {/* Simple Single Currency Section */}
      <div className="simple-section">
        <h4>Single Currency (Basic Hook)</h4>
        <div className="currency-selector">
          <label>
            Choose currency:
          </label>
          <select
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
          >
            {currencies.map((curr) => (
              <option value={curr} key={curr}>
                {curr}
              </option>
            ))}
          </select>
        </div>

        <div className="price-display">
          {currentLoading && <p>Loading Bitcoin price...</p>}
          {currentError && <p style={{ color: 'red' }}>Error: {currentError}</p>}
          {!currentLoading && !currentError && currentPrice && (
            <p>
              <strong>1 Bitcoin = {formatPrice(currentPrice, selectedCurrency)}</strong>
            </p>
          )}
        </div>
      </div>

      {/* Advanced Multi-Currency Section */}
      <div className="advanced-section">
        <div className="section-header">
          <h4>Multi-Currency Manager (Advanced useReducer)</h4>
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="toggle-button"
          >
            {showAdvanced ? 'Hide Advanced' : 'Show Advanced'}
          </button>
        </div>

        {showAdvanced && (
          <div className="advanced-content">
            {/* Controls */}
            <div className="controls">
              <div className="control-group">
                <label>Add Currency to Track:</label>
                <select
                  onChange={(e) => {
                    if (e.target.value && !trackedCurrencies[e.target.value]) {
                      handleAddCurrency(e.target.value);
                      e.target.value = '';
                    }
                  }}
                  defaultValue=""
                >
                  <option value="">Select currency...</option>
                  {currencies
                    .filter(curr => !trackedCurrencies[curr])
                    .map((curr) => (
                      <option value={curr} key={curr}>
                        {curr}
                      </option>
                    ))}
                </select>
              </div>

              <div className="control-group">
                <label>
                  <input
                    type="checkbox"
                    checked={autoRefresh}
                    onChange={toggleAutoRefresh}
                  />
                  Auto-refresh (30s)
                </label>
              </div>

              <div className="control-group">
                <button onClick={fetchAllPrices} className="action-button">
                  Refresh All
                </button>
                <button onClick={resetAll} className="action-button danger">
                  Reset All
                </button>
              </div>
            </div>

            {/* Statistics */}
            <div className="stats">
              <h5>Statistics</h5>
              <div className="stats-grid">
                <div>Total: {stats.total}</div>
                <div>Loaded: {stats.loaded}</div>
                <div>Loading: {stats.loading}</div>
                <div>Errors: {stats.errors}</div>
                <div>Favorites: {stats.favorites}</div>
                <div>Last Updated: {formatDate(stats.lastUpdated)}</div>
              </div>
            </div>

            {/* Currency List */}
            <div className="currency-list">
              <h5>Tracked Currencies</h5>
              {sortedCurrencies.length === 0 ? (
                <p>No currencies being tracked. Add some above!</p>
              ) : (
                <div className="currency-grid">
                  {sortedCurrencies.map(([currency, data]) => (
                    <div key={currency} className="currency-card">
                      <div className="currency-header">
                        <span className="currency-name">
                          {currency}
                          {favorites.has(currency) && <span className="favorite-star">★</span>}
                        </span>
                        <div className="currency-actions">
                          <button
                            onClick={() => toggleFavorite(currency)}
                            className="favorite-button"
                            title={favorites.has(currency) ? "Remove from favorites" : "Add to favorites"}
                          >
                            {favorites.has(currency) ? '★' : '☆'}
                          </button>
                          <button
                            onClick={() => fetchPrice(currency)}
                            className="refresh-button"
                            title="Refresh price"
                          >
                            ↻
                          </button>
                          <button
                            onClick={() => handleRemoveCurrency(currency)}
                            className="remove-button"
                            title="Remove currency"
                          >
                            ×
                          </button>
                        </div>
                      </div>

                      <div className="currency-content">
                        {data.loading && <p className="loading">Loading...</p>}
                        {data.error && <p className="error">Error: {data.error}</p>}
                        {!data.loading && !data.error && data.price && (
                          <div>
                            <p className="price">{formatPrice(data.price, currency)}</p>
                            <p className="last-fetched">
                              Updated: {formatDate(data.lastFetched)}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BitcoinRatesAdvanced;
