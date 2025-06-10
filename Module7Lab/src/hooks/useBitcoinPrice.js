import { useEffect, useReducer } from 'react';

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

// Custom hook for fetching Bitcoin price
export function useBitcoinPrice(currency) {
  const [state, dispatch] = useReducer(bitcoinPriceReducer, initialState);

  useEffect(() => {
    if (!currency) return;

    let isCancelled = false;
    const controller = new AbortController();

    const fetchBitcoinPrice = async () => {
      try {
        dispatch({ type: FETCH_ACTIONS.FETCH_START });

        const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency.toLowerCase()}`;
        
        const response = await fetch(apiUrl, {
          signal: controller.signal
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!isCancelled) {
          const price = data.bitcoin[currency.toLowerCase()];
          if (price !== undefined) {
            dispatch({ 
              type: FETCH_ACTIONS.FETCH_SUCCESS, 
              payload: price 
            });
          } else {
            throw new Error(`Currency ${currency} not found in response`);
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

  // Return state and utility functions
  return {
    price: state.data,
    loading: state.loading,
    error: state.error,
    refetch: () => dispatch({ type: FETCH_ACTIONS.RESET })
  };
}

export default useBitcoinPrice;