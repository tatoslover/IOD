// CheckWeather.jsx - Child component to update weather state
function CheckWeather({ onWeatherChange }) {
  const weatherTypes = [
    "sunny",
    "windy",
    "raining",
    "cloudy",
    "stormy",
    "snowy",
    "foggy",
  ];

  // generates new random weather data and updates state via prop
  const randomWeather = () => {
    let newTemp = Math.floor(Math.random() * 40);
    let newWeatherIndex = Math.floor(Math.random() * weatherTypes.length);

    // using destructured function from props
    onWeatherChange(weatherTypes[newWeatherIndex], newTemp);
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <h4>Update Weather:</h4>
      <button
        onClick={randomWeather}
        style={{
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          padding: "12px 24px",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
          transition: "background-color 0.2s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#218838")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#28a745")}
      >
        Check Weather
      </button>
    </div>
  );
}

export default CheckWeather;
