import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { 
  BasicClockDemo,
  UseEffectPatternsDemo,
  ClockWithTickerDemo, 
  ActivityFinderDemo, 
  ActivityFinderCleanupDemo,
  WeatherAppDemo
} from './components/useEffect-demos/index.js'

function App() {
  const [count, setCount] = useState(0)
  const [activeDemo, setActiveDemo] = useState('basic')

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <h1>React useEffect Hook Demo</h1>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* Demo Navigation */}
      <div className="demo-navigation">
        <h2>Choose a useEffect Demo:</h2>
        <div className="demo-buttons">
          <button 
            onClick={() => setActiveDemo('basic')}
            className={`demo-nav-button ${activeDemo === 'basic' ? 'active' : ''}`}
          >
            🕐 Basic Clock Demo
          </button>
          <button 
            onClick={() => setActiveDemo('ticker')}
            className={`demo-nav-button ${activeDemo === 'ticker' ? 'active' : ''}`}
          >
            ⏱️ Clock with Cleanup
          </button>
          <button 
            onClick={() => setActiveDemo('api')}
            className={`demo-nav-button ${activeDemo === 'api' ? 'active' : ''}`}
          >
            🎯 API Dependencies
          </button>
          <button 
            onClick={() => setActiveDemo('race')}
            className={`demo-nav-button ${activeDemo === 'race' ? 'active' : ''}`}
          >
            🛡️ Race Condition Fix
          </button>
          <button 
            onClick={() => setActiveDemo('patterns')}
            className={`demo-nav-button ${activeDemo === 'patterns' ? 'active' : ''}`}
          >
            🔬 Effect Patterns
          </button>
          <button 
            onClick={() => setActiveDemo('cors')}
            className={`demo-nav-button ${activeDemo === 'cors' ? 'active' : ''}`}
          >
            🌤️ CORS Proxy Demo
          </button>
        </div>
      </div>

      {/* Render selected demo */}
      {activeDemo === 'basic' && <BasicClockDemo />}
      {activeDemo === 'ticker' && <ClockWithTickerDemo />}
      {activeDemo === 'api' && <ActivityFinderDemo />}
      {activeDemo === 'race' && <ActivityFinderCleanupDemo />}
      {activeDemo === 'patterns' && (
        <div className="demo-container">
          <h2>useEffect Patterns</h2>
          <p className="demo-description">
            Compare different useEffect dependency patterns and see when they run.
          </p>
          <UseEffectPatternsDemo />
        </div>
      )}
      {activeDemo === 'cors' && <WeatherAppDemo />}

      <div className="learning-section">
        <h3>🎓 Complete useEffect Learning Guide</h3>
        <p>This comprehensive demo covers all essential useEffect concepts:</p>
        
        <div className="demo-overview">
          <div className="demo-card">
            <h4>🕐 Basic Clock Demo</h4>
            <p>Learn fundamental useEffect concepts with mounting/unmounting</p>
          </div>
          <div className="demo-card">
            <h4>⏱️ Clock with Cleanup</h4>
            <p>See how cleanup functions prevent memory leaks and manage tick counters</p>
          </div>
          <div className="demo-card">
            <h4>🎯 API Dependencies</h4>
            <p>Understand how useEffect reacts to changing dependencies with API calls</p>
          </div>
          <div className="demo-card">
            <h4>🛡️ Race Condition Fix</h4>
            <p>Learn to prevent race conditions in async operations using cleanup</p>
          </div>
          <div className="demo-card">
            <h4>🔬 Effect Patterns</h4>
            <p>Compare different dependency array patterns side by side</p>
          </div>
          <div className="demo-card">
            <h4>🌤️ CORS Proxy Demo</h4>
            <p>Learn how to use Vite proxy to bypass CORS restrictions with external APIs</p>
          </div>
        </div>
        
        <h4>🔍 What to observe:</h4>
        <ul>
          <li>Open your browser's Developer Console (F12) to see detailed logging</li>
          <li>Try each demo and watch the console messages carefully</li>
          <li>Notice when effects run, when cleanup occurs, and how dependencies work</li>
          <li>Experiment with rapid changes to see race condition prevention</li>
        </ul>
        
        <h4>🧪 Key Concepts Covered:</h4>
        <ul>
          <li><strong>Effect Dependencies:</strong> [], no array, [var1, var2]</li>
          <li><strong>Cleanup Functions:</strong> Preventing memory leaks and stale updates</li>
          <li><strong>API Integration:</strong> Fetching data based on state changes</li>
          <li><strong>Race Conditions:</strong> Handling multiple async operations safely</li>
          <li><strong>Component Lifecycle:</strong> Mount, update, and unmount phases</li>
        </ul>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App