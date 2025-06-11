import { useRef } from 'react';

export default function RefCounter() {
  let countRef = useRef(0); // one counter stored in a ref
  let count = 0; // one counter stored in a normal variable
  
  function handleClick() {
    // update countRef object when clicking, via current property
    countRef.current = countRef.current + 1;
    count = count + 1; // update count variable when clicking
    // both counts should be the same value
    alert(`You clicked ${countRef.current} (${count}) times!`);
  }
  
  return (
    <div className="RefCounter componentBox">
      <button onClick={handleClick}>
        REFCOUNTER: Click me!
        {/* try rendering {count} and {countRef.current} here */}
      </button>
    </div>
  );
}

// Any variables rendered inside the returned JSX should be
// part of STATE, so that updates trigger re-rendering and keep
// everything in sync. Updates to refs and normal variables DO NOT
// trigger re-renders, so the updated count values don't show.

/* 
Showcasing these concepts: This example uses both a ref and a standard variable to keep
track of the number of times the button has been clicked.
Because the component is not re-rendering, both counts work as expected in the alert message, 
and neither will be updated in the JSX.
This is because alerts are outside React, but React doesn't know that the content in the JSX needs updating.
*/

// Demo wrapper component
export function RefCounterDemo() {
  return (
    <div className="demo-container">
      <h2>useRef vs Regular Variables Demo</h2>
      <p className="demo-description">
        This demonstrates the difference between useRef and regular variables. 
        Neither triggers re-renders, so UI updates won't occur.
      </p>
      
      <RefCounter />
      
      <div className="learning-points">
        <h4>🎓 Key Learning Points:</h4>
        <ul>
          <li><strong>useRef:</strong> Persists values between renders without triggering re-renders</li>
          <li><strong>Regular variables:</strong> Reset on every render, don't persist</li>
          <li><strong>No re-renders:</strong> Neither ref updates nor variable changes cause re-renders</li>
          <li><strong>Alert works:</strong> Both counters work in alerts because they're outside React's render cycle</li>
          <li><strong>JSX won't update:</strong> To show values in JSX, you need state (useState)</li>
        </ul>
        
        <div className="warning-box">
          <h4>⚠️ Try This Experiment:</h4>
          <p>
            Try uncommenting the JSX comments in the button to render the count values. 
            You'll notice they always show their initial values (0) because:
          </p>
          <ul>
            <li>The regular variable <code>count</code> resets to 0 on every render</li>
            <li>The ref value <code>countRef.current</code> persists but doesn't trigger re-renders</li>
            <li>Only state changes trigger re-renders that update the JSX</li>
          </ul>
        </div>
      </div>
    </div>
  );
}