import { useState, useEffect } from "react";

// Simple Clock component demonstrating basic useEffect usage
function BasicClock() {
  const [date, setDate] = useState(new Date());

  // EXAMPLE 1: useEffect with empty dependency array []
  // This effect runs ONLY ONCE when the component mounts
  useEffect(() => {
    console.log("🚀 BasicClock component mounted - effect runs ONCE");
    
    // Set up an interval to update the time every second
    const intervalId = setInterval(() => {
      setDate(new Date());
      console.log("⏰ Basic tick - time updated");
    }, 1000);

    // CLEANUP FUNCTION: This is crucial!
    // It runs when the component unmounts to prevent memory leaks
    return () => {
      console.log("🧹 BasicClock cleanup: Clearing interval on unmount");
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array = effect runs only on mount

  return (
    <div className="BasicClock">
      <h3>🕐 Basic Clock</h3>
      <div className="clock-display">
        <div className="time">{date.toLocaleTimeString()}</div>
      </div>
      <div className="instructions">
        <small>
          💡 Check console - this uses useEffect with empty dependency array [].
          <br />
          The effect runs only once when mounted.
        </small>
      </div>
    </div>
  );
}

// Parent component to toggle the BasicClock
function BasicClockDemo() {
  const [showClock, setShowClock] = useState(false);
  const [mountCount, setMountCount] = useState(0);

  const toggleClock = () => {
    if (!showClock) {
      setMountCount(prev => prev + 1);
      console.log(`🎬 Mounting BasicClock (mount #${mountCount + 1})`);
    } else {
      console.log("🎬 Unmounting BasicClock");
    }
    setShowClock(!showClock);
  };

  return (
    <div className="demo-container">
      <h2>Basic useEffect Demo</h2>
      <p className="demo-description">
        This demonstrates the most common useEffect pattern: running an effect once when the component mounts.
      </p>
      
      {showClock && <BasicClock />}
      
      <button 
        onClick={toggleClock}
        className={`toggle-button ${showClock ? 'unmount' : 'mount'}`}
      >
        {showClock ? '🔴 Unmount Clock' : '🟢 Mount Clock'}
      </button>
      
      <div className="mount-info">
        <p>Total mounts: {mountCount}</p>
      </div>

      <div className="learning-points">
        <h4>🎓 Key Learning Points:</h4>
        <ul>
          <li><strong>Empty dependency array []:</strong> Effect runs only once on mount</li>
          <li><strong>Cleanup function:</strong> Prevents memory leaks by cleaning up intervals</li>
          <li><strong>Component lifecycle:</strong> Mount → run effect → unmount → cleanup</li>
          <li><strong>Console logging:</strong> Shows exactly when effects and cleanup occur</li>
        </ul>
      </div>
    </div>
  );
}

// Component showing different useEffect patterns side by side
function UseEffectPatternsDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('React');

  // Pattern 1: No dependencies - runs on every render
  useEffect(() => {
    console.log('📊 Effect with no deps - runs on EVERY render');
  });

  // Pattern 2: Empty dependencies - runs once on mount
  useEffect(() => {
    console.log('🎯 Effect with empty deps [] - runs ONCE on mount');
    return () => console.log('🧹 Cleanup from mount-only effect');
  }, []);

  // Pattern 3: Specific dependencies - runs when dependencies change
  useEffect(() => {
    console.log(`🔢 Count changed to: ${count}`);
  }, [count]);

  useEffect(() => {
    console.log(`👤 Name changed to: ${name}`);
  }, [name]);

  return (
    <div className="UseEffectPatternsDemo">
      <h3>🔬 useEffect Patterns Comparison</h3>
      <div className="patterns-content">
        <div className="state-display">
          <p><strong>Count:</strong> {count}</p>
          <p><strong>Name:</strong> {name}</p>
        </div>
        
        <div className="pattern-controls">
          <button onClick={() => setCount(c => c + 1)}>
            Increment Count
          </button>
          <button onClick={() => setName(name === 'React' ? 'Vue' : 'React')}>
            Toggle Name
          </button>
          <button onClick={() => setCount(0)}>
            Reset Count
          </button>
        </div>
      </div>
      
      <div className="patterns-info">
        <h4>Effect Patterns in this component:</h4>
        <ul>
          <li><strong>No dependencies:</strong> Runs on every render (watch console!)</li>
          <li><strong>[] (empty):</strong> Runs once on mount</li>
          <li><strong>[count]:</strong> Runs when count changes</li>
          <li><strong>[name]:</strong> Runs when name changes</li>
        </ul>
        <small>
          💡 Watch the console as you interact with the buttons to see when each effect runs!
        </small>
      </div>
    </div>
  );
}

export default BasicClockDemo;
export { BasicClock, UseEffectPatternsDemo };