// Temperature.jsx - Child component to display and convert temp if needed
function Temperature({ temp, units = "C" }) {
  // default to celsius
  // convert to Fahrenheit if units is F (or not C)
  let displayTemp = units === "C" ? temp : (temp * 9) / 5 + 32;

  return (
    <span className="temperature">
      <strong>
        {parseInt(displayTemp)}&deg;{units}
      </strong>
    </span>
  );
}

export default Temperature;
