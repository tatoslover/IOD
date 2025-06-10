import { useState, useEffect } from "react";

// Enhanced Clock component with tick counter to demonstrate cleanup
function ClockWithTicker() {
  const [date, setDate] = useState(new Date());
  const [tickCount, setTickCount] = useState(0);

  useEffect(() => {
    let clockInterval = setInterval(() => tick(), 1000);
    console.log('🕐 Clock component mounted');
    
    // Function returned from useEffect is run on unmount
    // and used to cleanup any side effects
    return () => {
      console.log('🧹 Clock component unmounted');
      clearInterval(clockInterval);
      // Reset tick count on unmount (though component will be destroyed anyway)
      setTickCount(0);
    };
  }, []); // Empty dependency array - runs once on mount

  const tick = () => {
    setDate(new Date());
    setTickCount(prevCount => {
      const newCount = prevCount + 1;
      console.log(`⏰ Tick #${newCount} - time updated`);
      return newCount;
    });
  };

  return (
    <div className="ClockWithTicker">
      <h3>🕐 Enhanced Clock with Tick Counter</h3>
      <div className="clock-display">
        <div className="time">{date.toLocaleTimeString()}</div>
        <div className="tick-counter">
          Ticks since mount: <strong>{tickCount}</strong>
        </div>
      </div>
      <div className="instructions">
        <small>
          💡 Watch the console to see mounting/unmounting behavior.
          <br />
          Notice how the tick counter resets when remounted!
        </small>
      </div>
    </div>
  );
}

// Parent component to toggle the ClockWithTicker
function ClockWithTickerDemo() {
  const [showClock, setShowClock] = useState(false);
  const [mountCount, setMountCount] = useState(0);

  const toggleClock = () => {
    if (!showClock) {
      setMountCount(prev => prev + 1);
      console.log(`🎬 Mounting ClockWithTicker (mount #${mountCount + 1})`);
    } else {
      console.log("🎬 Unmounting ClockWithTicker - watch for cleanup!");
    }
    setShowClock(!showClock);
  };

  return (
    <div className="demo-container">
      <h2>useEffect Cleanup Demo</h2>
      <p className="demo-description">
        This demonstrates how useEffect cleanup prevents memory leaks.
        The cleanup function clears the interval when the component unmounts.
      </p>
      
      {showClock && <ClockWithTicker />}
      
      <button 
        onClick={toggleClock}
        className={`toggle-button ${showClock ? 'unmount' : 'mount'}`}
      >
        {showClock ? '🔴 Unmount Clock (Watch Console!)' : '🟢 Mount Clock'}
      </button>
      
      <div className="mount-info">
        <p>Total mounts: {mountCount}</p>
      </div>

      <div className="learning-points">
        <h4>🎓 Key Learning Points:</h4>
        <ul>
          <li>The cleanup function prevents the interval from continuing after unmount</li>
          <li>Without cleanup, intervals would keep running and cause memory leaks</li>
          <li>The tick counter resets each time the component is remounted</li>
          <li>Console logs show exactly when mounting, ticking, and cleanup occur</li>
        </ul>
      </div>
    </div>
  );
}

export default ClockWithTickerDemo;
export { ClockWithTicker };