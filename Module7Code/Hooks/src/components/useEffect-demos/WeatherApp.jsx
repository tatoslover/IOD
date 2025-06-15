import { useState, useEffect } from "react";

// Weather App component demonstrating CORS proxy usage
function WeatherApp() {
  const [city, setCity] = useState('Wellington');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [corsError, setCorsError] = useState(false);

  // List of cities that work with the API
  const cities = [
    'Wellington',
    'London',
    'Tokyo',
    'Sydney',
    'Paris'
  ];

  useEffect(() => {
    console.log('🌤️ Fetching weather for:', city);
    setLoading(true);
    setError('');
    setCorsError(false);
    
    // Using the proxy path instead of direct API call
    // This will be forwarded to https://goweather.herokuapp.com/weather/{city}
    fetch(`/api/weather/${city}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('✅ Weather data received:', data);
        // Check if the API returned empty or error data
        if (!data || !data.temperature || data.temperature === '') {
          setError(`Weather data not available for ${city}. Try a different city.`);
          setWeather(null);
        } else {
          setWeather(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('❌ Weather fetch error:', err);
        
        // Check if it's a CORS error
        if (err.message.includes('CORS') || err.message.includes('fetch')) {
          setCorsError(true);
          setError('CORS error detected - proxy not configured properly');
        } else if (err.message.includes('404')) {
          setError(`Weather data not available for ${city}. This city may not be supported by the API.`);
        } else {
          setError(`Failed to fetch weather: ${err.message}`);
        }
        setLoading(false);
      });
  }, [city]); // Effect runs when city changes

  return (
    <div className="WeatherApp">
      <h3>🌤️ Weather App with CORS Proxy</h3>
      
      <div className="controls">
        <label htmlFor="city-select">
          Choose a city:
          <select 
            id="city-select"
            className="city-selector"
            value={city}
            onChange={e => setCity(e.target.value)}
          >
            {cities.map(cityName => (
              <option key={cityName} value={cityName}>
                {cityName}
              </option>
            ))}
          </select>
        </label>
      </div>
      
      <div className="weather-result">
        {loading && (
          <div className="loading">
            🔄 Loading weather for {city}...
          </div>
        )}
        
        {corsError && (
          <div className="cors-error">
            <h4>⚠️ CORS Error Detected!</h4>
            <p>The proxy is not configured properly. Here's what you need to do:</p>
            <ol>
              <li>Check your <code>vite.config.js</code> file</li>
              <li>Make sure the proxy configuration is set up correctly</li>
              <li>Restart your development server after making changes</li>
            </ol>
          </div>
        )}
        
        {error && !corsError && (
          <div className="error">❌ {error}</div>
        )}
        
        {!loading && !error && weather && (
          <div className="weather-display success">
            <h4>✅ Weather in {city}</h4>
            <div className="weather-info">
              <div className="temperature">
                <strong>Temperature:</strong> {weather.temperature || 'N/A'}
              </div>
              <div className="wind">
                <strong>Wind:</strong> {weather.wind || 'N/A'}
              </div>
              <div className="description">
                <strong>Description:</strong> {weather.description || 'N/A'}
              </div>
            </div>
            
            {weather.forecast && weather.forecast.length > 0 && (
              <div className="forecast">
                <h5>3-Day Forecast:</h5>
                <div className="forecast-items">
                  {weather.forecast.slice(0, 3).map((day, index) => (
                    <div key={index} className="forecast-item">
                      <div><strong>Day {index + 1}:</strong></div>
                      <div>🌡️ {day.temperature}</div>
                      <div>💨 {day.wind}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      
      <div className="instructions">
        <small>
          💡 This component uses a proxy to bypass CORS restrictions.
          <br />
          Check the console to see the API calls being made.
          <br />
          <strong>Note:</strong> Only certain cities work with this API (Wellington, London, Tokyo, Sydney, Paris).
        </small>
      </div>
    </div>
  );
}

// Component showing direct API call (will fail due to CORS)
function WeatherAppDirect() {
  const [city, setCity] = useState('Wellington');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const cities = ['Wellington', 'London'];

  useEffect(() => {
    console.log('🌤️ [DIRECT] Attempting direct API call for:', city);
    setLoading(true);
    setError('');
    
    // Direct API call - this will likely fail due to CORS
    fetch(`https://goweather.herokuapp.com/weather/${city}`)
      .then(response => response.json())
      .then(data => {
        console.log('✅ [DIRECT] Weather data received:', data);
        setWeather(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('❌ [DIRECT] Weather fetch error:', err);
        setError(`CORS Error: ${err.message}`);
        setLoading(false);
      });
  }, [city]);

  return (
    <div className="WeatherAppDirect cors-error-demo">
      <h3>⚠️ Direct API Call (Will Show CORS Error)</h3>
      
      <div className="controls">
        <label htmlFor="city-select-direct">
          Choose a city:
          <select 
            id="city-select-direct"
            className="city-selector"
            value={city}
            onChange={e => setCity(e.target.value)}
          >
            {cities.map(cityName => (
              <option key={cityName} value={cityName}>
                {cityName}
              </option>
            ))}
          </select>
        </label>
      </div>
      
      <div className="weather-result">
        {loading && <div className="loading">🔄 Loading...</div>}
        {error && (
          <div className="error">
            <strong>❌ Expected CORS Error:</strong>
            <br />
            {error}
          </div>
        )}
        {!loading && !error && weather && (
          <div className="weather-display success">
            <p>✅ Direct API call worked! Temperature: {weather.temperature}</p>
            <small>This means the API allows cross-origin requests from localhost.</small>
          </div>
        )}
      </div>
      
      <div className="instructions">
        <small>
          ⚠️ This component tries to call the API directly and will fail due to CORS.
          <br />
          Compare this with the proxied version above.
          <br />
          <strong>Note:</strong> Limited to cities that work with the API.
        </small>
      </div>
    </div>
  );
}

// Demo container for both weather components
function WeatherAppDemo() {
  const [showProxy, setShowProxy] = useState(true);
  const [showDirect, setShowDirect] = useState(false);

  return (
    <div className="demo-container">
      <h2>CORS Proxy Demo</h2>
      <p className="demo-description">
        This demonstrates how to use a Vite proxy to bypass CORS restrictions when calling external APIs.
      </p>
      
      <div className="cors-explanation">
        <h4>🔒 What is CORS?</h4>
        <p>
          CORS (Cross-Origin Resource Sharing) is a security feature that controls which websites 
          can access a back-end service. Many APIs block requests from localhost.
        </p>
        
        <h4>🛠️ The Solution: Proxy Configuration</h4>
        <p>Add this to your <code>vite.config.js</code> (restart dev server after changes):</p>
        <pre className="code-block">
{`export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/weather': {
        target: 'https://goweather.herokuapp.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\\/api\\/weather/, '/weather'),
      },
    },
  },
})`}
        </pre>
        <div className="proxy-explanation">
          <p><strong>How this works:</strong></p>
          <ul>
            <li><code>/api/weather/Wellington</code> → <code>https://goweather.herokuapp.com/weather/Wellington</code></li>
            <li>The proxy changes the request origin to match the target domain</li>
            <li>If you get a 404, some cities may not be available in the API</li>
            <li>If the direct API works, the API may have relaxed CORS policies</li>
          </ul>
        </div>
      </div>
      
      <div className="demo-controls">
        <button 
          onClick={() => setShowProxy(!showProxy)}
          className={`toggle-button ${showProxy ? 'active' : ''}`}
        >
          {showProxy ? 'Hide' : 'Show'} Proxied Weather App
        </button>
        
        <button 
          onClick={() => setShowDirect(!showDirect)}
          className={`toggle-button ${showDirect ? 'active' : ''}`}
        >
          {showDirect ? 'Hide' : 'Show'} Direct API Call (CORS Error)
        </button>
      </div>
      
      {showProxy && <WeatherApp />}
      {showDirect && <WeatherAppDirect />}
      
      <div className="learning-points">
        <h4>🎓 Key Learning Points:</h4>
        <ul>
          <li><strong>CORS Protection:</strong> Browsers block cross-origin requests for security</li>
          <li><strong>Proxy Solution:</strong> Vite proxy forwards requests and changes the origin</li>
          <li><strong>Development vs Production:</strong> Proxies work in dev, need different solutions for production</li>
          <li><strong>Path Rewriting:</strong> <code>/api/weather</code> becomes requests to the target URL</li>
          <li><strong>API Behavior:</strong> Some APIs may not enforce CORS strictly, but it's good practice to use proxies</li>
          <li><strong>API Limitations:</strong> Not all cities are available - APIs often have limited data coverage</li>
        </ul>
        
        <h4>🚀 Setup Instructions:</h4>
        <ol>
          <li>Add the proxy configuration to <code>vite.config.js</code></li>
          <li>Restart your development server (<code>npm run dev</code>)</li>
          <li>Use relative URLs like <code>/api/weather/Wellington</code> in your fetch calls</li>
          <li>The proxy will forward to <code>https://goweather.herokuapp.com/weather/Wellington</code></li>
        </ol>
      </div>
      
      <div className="warning-box">
        <h4>⚠️ Important Notes:</h4>
        <ul>
          <li>This proxy only works in development with Vite</li>
          <li>For production, you'll need a backend proxy or CORS-enabled API</li>
          <li>Always restart your dev server after changing vite.config.js</li>
          <li>Check the browser console for detailed error messages</li>
          <li><strong>Real-world behavior:</strong> CORS restrictions vary by API and environment</li>
          <li>Some APIs allow localhost requests, others block them completely</li>
          <li>Third-party APIs may have limited geographic coverage or data availability</li>
        </ul>
      </div>
    </div>
  );
}

export default WeatherAppDemo;
export { WeatherApp, WeatherAppDirect };