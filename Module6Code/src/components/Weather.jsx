// Weather.jsx - Parent component storing common state data
import { useState } from "react";
import Temperature from "./Temperature";
import CheckWeather from "./CheckWeather";

function Weather() {
  // two separate state values to store weather data
  const [weather, setWeather] = useState('sunny');
  const [tempCelcius, setTempCelcius] = useState(27);
  const [units, setUnits] = useState('C');

  // handler function to update both state values at once
  const handleWeatherChange = (newWeather, newTemp) => {
    setWeather(newWeather);
    setTempCelcius(newTemp);
  };

  // handler function to toggle temperature units
  const toggleUnits = () => {
    setUnits(units === 'C' ? 'F' : 'C');
  };

  return (
    <div className="Weather componentBox">
      <h2>Today's Weather</h2>
      <div>
        <strong>{weather}</strong> with a temp of{' '}
        {/* Child component to display temp - needs temp value as prop */}
        <Temperature temp={tempCelcius} units={units} />
        <button 
          onClick={toggleUnits}
          style={{
            marginLeft: '10px',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            padding: '4px 8px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px'
          }}
        >
          Convert to °{units === 'C' ? 'F' : 'C'}
        </button>
      </div>

      {/* Child component to update the weather - needs handler function as prop */}
      <CheckWeather onWeatherChange={handleWeatherChange} />
    </div>
  );
}

export default Weather;