import { useEffect, useReducer, useRef } from 'react';

// Action types for the reducer
const FETCH_ACTIONS = {
  FETCH_START: 'FETCH_START',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
  RESET: 'RESET'
};

// Initial state for the reducer
const initialState = {
  data: null,
  loading: true,
  error: null
};

// Reducer function to handle state transitions
function bitcoinPriceReducer(state, action) {
  switch (action.type) {
    case FETCH_ACTIONS.FETCH_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_ACTIONS.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null
      };
    case FETCH_ACTIONS.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload
      };
    case FETCH_ACTIONS.RESET:
      return initialState;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// Cache for storing API responses
const priceCache = new Map();
const CACHE_DURATION = 30000; // 30 seconds cache

// Request throttling
let lastRequestTime = 0;
const MIN_REQUEST_INTERVAL = 2000; // 2 seconds between requests

// Custom hook for fetching Bitcoin price
export function useBitcoinPrice(currency) {
  const [state, dispatch] = useReducer(bitcoinPriceReducer, initialState);
  const abortControllerRef = useRef(null);

  useEffect(() => {
    if (!currency) return;

    let isCancelled = false;
    const controller = new AbortController();
    abortControllerRef.current = controller;

    const fetchBitcoinPrice = async () => {
      try {
        const cacheKey = currency.toLowerCase();
        const cachedData = priceCache.get(cacheKey);
        const now = Date.now();

        // Check cache first
        if (cachedData && (now - cachedData.timestamp) < CACHE_DURATION) {
          if (!isCancelled) {
            dispatch({
              type: FETCH_ACTIONS.FETCH_SUCCESS,
              payload: cachedData.price
            });
          }
          return;
        }

        // Throttle requests
        const timeSinceLastRequest = now - lastRequestTime;
        if (timeSinceLastRequest < MIN_REQUEST_INTERVAL) {
          const waitTime = MIN_REQUEST_INTERVAL - timeSinceLastRequest;
          await new Promise(resolve => setTimeout(resolve, waitTime));
          if (isCancelled) return;
        }

        dispatch({ type: FETCH_ACTIONS.FETCH_START });
        lastRequestTime = Date.now();

        const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency.toLowerCase()}`;

        const response = await fetch(apiUrl, {
          signal: controller.signal,
          headers: {
            'Accept': 'application/json',
          }
        });

        if (!response.ok) {
          if (response.status === 429) {
            throw new Error('Rate limit exceeded. Please wait a moment before refreshing.');
          }
          throw new Error(`API request failed: ${response.status}`);
        }

        const data = await response.json();

        if (!isCancelled) {
          const price = data.bitcoin[currency.toLowerCase()];
          if (price !== undefined) {
            // Cache the result
            priceCache.set(cacheKey, {
              price: price,
              timestamp: Date.now()
            });

            dispatch({
              type: FETCH_ACTIONS.FETCH_SUCCESS,
              payload: price
            });
          } else {
            throw new Error(`Currency ${currency} not supported`);
          }
        }
      } catch (error) {
        if (!isCancelled && error.name !== 'AbortError') {
          dispatch({
            type: FETCH_ACTIONS.FETCH_ERROR,
            payload: error.message
          });
        }
      }
    };

    fetchBitcoinPrice();

    // Cleanup function
    return () => {
      isCancelled = true;
      controller.abort();
    };
  }, [currency]);

  // Manual refetch function
  const refetch = () => {
    // Clear cache for this currency
    priceCache.delete(currency.toLowerCase());
    // Reset state to trigger new fetch
    dispatch({ type: FETCH_ACTIONS.RESET });
  };

  // Return state and utility functions
  return {
    price: state.data,
    loading: state.loading,
    error: state.error,
    refetch
  };
}

export default useBitcoinPrice;
