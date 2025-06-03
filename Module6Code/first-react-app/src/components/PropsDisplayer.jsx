// components/PropsDisplayer.jsx

function PropsDisplayer(props) {
  const stringProps = JSON.stringify(props);

  return (
    <div className="PropsDisplayer componentBox">
      <h2>Check out my props!</h2>
      <h3>{stringProps}</h3>
      {/* Try this: <h3>{props}</h3> — won't work, because props is an object */}
    </div>
  );
}

export default PropsDisplayer;
