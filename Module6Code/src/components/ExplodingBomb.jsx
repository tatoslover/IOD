import { useState } from 'react';

function Bomb() {
  throw new Error('💥 KABOOM! The bomb exploded!');
}

function ExplodingBomb() {
  const [exploded, setExploded] = useState(false);
  
  return (
    <div className="ExplodingBomb componentBox">
      <h3>💣 Error Handling Demo</h3>
      <p>Click the button below to trigger an error and see the error boundary in action!</p>
      <button onClick={() => setExploded(!exploded)}>
        DANGER: Click to explode bomb! 💥
      </button>
      {/* Renders the Bomb conditionally, depending on state */}
      {exploded ? <Bomb /> : null}
    </div>
  );
}

export default ExplodingBomb;