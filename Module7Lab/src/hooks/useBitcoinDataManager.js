import { useReducer, useCallback } from 'react';

// Action types for complex Bitcoin data management
const DATA_ACTIONS = {
  ADD_CURRENCY: 'ADD_CURRENCY',
  REMOVE_CURRENCY: 'REMOVE_CURRENCY',
  UPDATE_PRICE: 'UPDATE_PRICE',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR',
  SET_FAVORITE: 'SET_FAVORITE',
  TOGGLE_AUTO_REFRESH: 'TOGGLE_AUTO_REFRESH',
  RESET_ALL: 'RESET_ALL'
};

// Initial state for complex Bitcoin data management
const initialState = {
  currencies: {},
  favorites: new Set(),
  autoRefresh: false,
  lastUpdated: null,
  globalError: null
};

// Complex reducer for Bitcoin data management
function bitcoinDataReducer(state, action) {
  switch (action.type) {
    case DATA_ACTIONS.ADD_CURRENCY: {
      return {
        ...state,
        currencies: {
          ...state.currencies,
          [action.payload.currency]: {
            price: null,
            loading: true,
            error: null,
            lastFetched: null
          }
        }
      };
    }

    case DATA_ACTIONS.REMOVE_CURRENCY: {
      const remainingCurrencies = { ...state.currencies };
      delete remainingCurrencies[action.payload.currency];
      const newFavorites = new Set(state.favorites);
      newFavorites.delete(action.payload.currency);
      
      return {
        ...state,
        currencies: remainingCurrencies,
        favorites: newFavorites
      };
    }

    case DATA_ACTIONS.UPDATE_PRICE: {
      return {
        ...state,
        currencies: {
          ...state.currencies,
          [action.payload.currency]: {
            ...state.currencies[action.payload.currency],
            price: action.payload.price,
            loading: false,
            error: null,
            lastFetched: new Date().toISOString()
          }
        },
        lastUpdated: new Date().toISOString(),
        globalError: null
      };
    }

    case DATA_ACTIONS.SET_LOADING: {
      return {
        ...state,
        currencies: {
          ...state.currencies,
          [action.payload.currency]: {
            ...state.currencies[action.payload.currency],
            loading: action.payload.loading
          }
        }
      };
    }

    case DATA_ACTIONS.SET_ERROR: {
      return {
        ...state,
        currencies: {
          ...state.currencies,
          [action.payload.currency]: {
            ...state.currencies[action.payload.currency],
            loading: false,
            error: action.payload.error
          }
        }
      };
    }

    case DATA_ACTIONS.CLEAR_ERROR: {
      if (action.payload.currency) {
        return {
          ...state,
          currencies: {
            ...state.currencies,
            [action.payload.currency]: {
              ...state.currencies[action.payload.currency],
              error: null
            }
          }
        };
      }
      return {
        ...state,
        globalError: null
      };
    }

    case DATA_ACTIONS.SET_FAVORITE: {
      const updatedFavorites = new Set(state.favorites);
      if (action.payload.isFavorite) {
        updatedFavorites.add(action.payload.currency);
      } else {
        updatedFavorites.delete(action.payload.currency);
      }
      
      return {
        ...state,
        favorites: updatedFavorites
      };
    }

    case DATA_ACTIONS.TOGGLE_AUTO_REFRESH: {
      return {
        ...state,
        autoRefresh: !state.autoRefresh
      };
    }

    case DATA_ACTIONS.RESET_ALL: {
      return initialState;
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

// Custom hook for managing multiple Bitcoin currency data
export function useBitcoinDataManager() {
  const [state, dispatch] = useReducer(bitcoinDataReducer, initialState);

  // Add a new currency to track
  const addCurrency = useCallback((currency) => {
    dispatch({ 
      type: DATA_ACTIONS.ADD_CURRENCY, 
      payload: { currency } 
    });
  }, []);

  // Remove a currency from tracking
  const removeCurrency = useCallback((currency) => {
    dispatch({ 
      type: DATA_ACTIONS.REMOVE_CURRENCY, 
      payload: { currency } 
    });
  }, []);

  // Update price for a specific currency
  const updatePrice = useCallback((currency, price) => {
    dispatch({ 
      type: DATA_ACTIONS.UPDATE_PRICE, 
      payload: { currency, price } 
    });
  }, []);

  // Set loading state for a currency
  const setLoading = useCallback((currency, loading) => {
    dispatch({ 
      type: DATA_ACTIONS.SET_LOADING, 
      payload: { currency, loading } 
    });
  }, []);

  // Set error for a currency
  const setError = useCallback((currency, error) => {
    dispatch({ 
      type: DATA_ACTIONS.SET_ERROR, 
      payload: { currency, error } 
    });
  }, []);

  // Clear error for a currency or globally
  const clearError = useCallback((currency = null) => {
    dispatch({ 
      type: DATA_ACTIONS.CLEAR_ERROR, 
      payload: { currency } 
    });
  }, []);

  // Toggle favorite status for a currency
  const toggleFavorite = useCallback((currency) => {
    const isFavorite = !state.favorites.has(currency);
    dispatch({ 
      type: DATA_ACTIONS.SET_FAVORITE, 
      payload: { currency, isFavorite } 
    });
  }, [state.favorites]);

  // Toggle auto-refresh functionality
  const toggleAutoRefresh = useCallback(() => {
    dispatch({ type: DATA_ACTIONS.TOGGLE_AUTO_REFRESH });
  }, []);

  // Reset all data
  const resetAll = useCallback(() => {
    dispatch({ type: DATA_ACTIONS.RESET_ALL });
  }, []);

  // Fetch price for a specific currency
  const fetchPrice = useCallback(async (currency) => {
    try {
      setLoading(currency, true);
      clearError(currency);

      const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency.toLowerCase()}`;
      
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const price = data.bitcoin[currency.toLowerCase()];

      if (price !== undefined) {
        updatePrice(currency, price);
      } else {
        throw new Error(`Currency ${currency} not found in response`);
      }
    } catch (error) {
      setError(currency, error.message);
    }
  }, [setLoading, clearError, updatePrice, setError]);

  // Fetch prices for all tracked currencies
  const fetchAllPrices = useCallback(async () => {
    const currencies = Object.keys(state.currencies);
    if (currencies.length === 0) return;

    const promises = currencies.map(currency => fetchPrice(currency));
    await Promise.allSettled(promises);
  }, [state.currencies, fetchPrice]);

  // Get favorite currencies
  const getFavorites = useCallback(() => {
    return Array.from(state.favorites);
  }, [state.favorites]);

  // Get currencies with their data, sorted by favorites first
  const getSortedCurrencies = useCallback(() => {
    const currencies = Object.entries(state.currencies);
    return currencies.sort(([currencyA], [currencyB]) => {
      const aIsFavorite = state.favorites.has(currencyA);
      const bIsFavorite = state.favorites.has(currencyB);
      
      if (aIsFavorite && !bIsFavorite) return -1;
      if (!aIsFavorite && bIsFavorite) return 1;
      return currencyA.localeCompare(currencyB);
    });
  }, [state.currencies, state.favorites]);

  // Get summary statistics
  const getStats = useCallback(() => {
    const currencies = Object.values(state.currencies);
    const total = currencies.length;
    const loaded = currencies.filter(c => c.price !== null && !c.loading).length;
    const loading = currencies.filter(c => c.loading).length;
    const errors = currencies.filter(c => c.error !== null).length;
    
    return {
      total,
      loaded,
      loading,
      errors,
      favorites: state.favorites.size,
      lastUpdated: state.lastUpdated
    };
  }, [state.currencies, state.favorites, state.lastUpdated]);

  return {
    // State
    currencies: state.currencies,
    favorites: state.favorites,
    autoRefresh: state.autoRefresh,
    lastUpdated: state.lastUpdated,
    globalError: state.globalError,
    
    // Actions
    addCurrency,
    removeCurrency,
    updatePrice,
    setLoading,
    setError,
    clearError,
    toggleFavorite,
    toggleAutoRefresh,
    resetAll,
    fetchPrice,
    fetchAllPrices,
    
    // Computed values
    getFavorites,
    getSortedCurrencies,
    getStats
  };
}

export default useBitcoinDataManager;