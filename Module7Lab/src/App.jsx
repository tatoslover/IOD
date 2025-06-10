import './App.css'
import BitcoinRates from './components/Lab1/BitcoinRates'
import BitcoinRatesAdvanced from './components/Lab1/BitcoinRatesAdvanced'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Module 7 Lab - React Hooks & API Integration</h1>
        <p>Demonstrating useEffect with API calls and proper cleanup</p>
      </header>
      
      <main className="App-main">
        <BitcoinRates />
        
        <BitcoinRatesAdvanced />
        
        <section className="info-section">
          <h2>About This Demo</h2>
          <div className="info-content">
            <p>This demonstration showcases two implementations:</p>
            
            <h3>Simple Implementation (useBitcoinPrice hook)</h3>
            <ul>
              <li><strong>useEffect Hook:</strong> Fetches data when currency changes</li>
              <li><strong>useReducer:</strong> Manages loading, data, and error states</li>
              <li><strong>Cleanup Function:</strong> Prevents memory leaks with cancellation flag</li>
              <li><strong>Error Handling:</strong> Gracefully handles API failures</li>
              <li><strong>AbortController:</strong> Cancels ongoing requests on unmount</li>
            </ul>
            
            <h3>Advanced Implementation (useBitcoinDataManager hook)</h3>
            <ul>
              <li><strong>Complex useReducer:</strong> Manages multiple currencies and advanced state</li>
              <li><strong>Multiple Actions:</strong> Add/remove currencies, favorites, auto-refresh</li>
              <li><strong>State Management:</strong> Tracks loading states per currency</li>
              <li><strong>Computed Values:</strong> Statistics, sorting, and filtering</li>
              <li><strong>Auto-refresh:</strong> Periodic updates with cleanup</li>
              <li><strong>Persistence:</strong> Favorites and settings management</li>
            </ul>
          </div>
        </section>
      </main>
      
      <footer className="App-footer">
        <p>Data provided by CoinGecko API</p>
      </footer>
    </div>
  )
}

export default App