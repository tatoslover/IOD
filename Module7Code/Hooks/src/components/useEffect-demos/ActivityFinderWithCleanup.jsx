import { useState, useEffect } from "react";

// Activity Finder with race condition prevention using cleanup
function ActivityFinderWithCleanup() {
  const [participants, setParticipants] = useState(1);
  const [activity, setActivity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Updated useEffect hook with ignore flag to prevent race conditions
  useEffect(() => {
    console.log('🚀 Running effect for', participants, 'participants');
    let ignore = false; // Flag to allow ignoring of the fetch result
    
    setLoading(true);
    setError('');
    
    fetch('https://bored.api.lewagon.com/api/activity?' + 
          'participants=' + participants)
      .then(response => response.json())
      .then(json => {
        // Only update state if the effect is still valid
        // i.e. the dependency hasn't changed since the request
        if (!ignore) {
          console.log('✅ Setting activity (not ignored):', json.activity);
          setActivity(json.activity);
          setLoading(false);
        } else {
          console.log('🚫 Ignoring stale result:', json.activity);
        }
      })
      .catch(err => {
        if (!ignore) {
          console.error('❌ Error fetching activity:', err);
          setError('Failed to fetch activity');
          setLoading(false);
        } else {
          console.log('🚫 Ignoring stale error');
        }
      });

    // Cleanup function - runs when unmounted or dependencies change
    return () => {
      ignore = true; // Ignore now invalid fetch results
      console.log('🧹 Cleanup effect - setting ignore = true');
    };
  }, [participants]); // Effect dependencies

  return (
    <div className="ActivityFinderWithCleanup">
      <h3>🛡️ Activity Finder with Race Condition Protection</h3>
      <div className="controls">
        <label>
          Choose number of participants:
          <select 
            value={participants}
            onChange={e => setParticipants(e.target.value)}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </label>
      </div>
      
      <div className="activity-result">
        {loading && <div className="loading">🔄 Loading activity...</div>}
        {error && <div className="error">❌ {error}</div>}
        {!loading && !error && activity && (
          <div>
            <strong>Suggested Activity: </strong>
            {activity}
          </div>
        )}
      </div>
      
      <div className="instructions">
        <small>
          💡 This version prevents race conditions using an ignore flag.
          <br />
          Try changing participants quickly to see the cleanup in action!
        </small>
      </div>
    </div>
  );
}

// Component to demonstrate the race condition problem (without cleanup)
function ActivityFinderWithoutCleanup() {
  const [participants, setParticipants] = useState(1);
  const [activity, setActivity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [requestCount, setRequestCount] = useState(0);

  // This version has potential race conditions
  useEffect(() => {
    setRequestCount(prevCount => {
      const currentRequest = prevCount + 1;
      console.log(`🏃 Starting request #${currentRequest} for ${participants} participants`);
      
      setLoading(true);
      setError('');
      
      fetch('https://bored.api.lewagon.com/api/activity?' + 
            'participants=' + participants)
        .then(response => response.json())
        .then(json => {
          console.log(`📥 Request #${currentRequest} completed:`, json.activity);
          setActivity(json.activity);
          setLoading(false);
        })
        .catch(err => {
          console.error(`❌ Request #${currentRequest} failed:`, err);
          setError('Failed to fetch activity');
          setLoading(false);
        });
      
      return currentRequest;
    });
  }, [participants]); // No cleanup function!

  return (
    <div className="ActivityFinderWithoutCleanup">
      <h3>⚠️ Activity Finder WITHOUT Race Condition Protection</h3>
      <div className="controls">
        <label>
          Choose number of participants:
          <select 
            value={participants}
            onChange={e => setParticipants(e.target.value)}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </label>
      </div>
      
      <div className="activity-result">
        {loading && <div className="loading">🔄 Loading activity...</div>}
        {error && <div className="error">❌ {error}</div>}
        {!loading && !error && activity && (
          <div>
            <strong>Suggested Activity: </strong>
            {activity}
          </div>
        )}
        <div className="request-counter">
          <small>Total requests made: {requestCount}</small>
        </div>
      </div>
      
      <div className="instructions">
        <small>
          ⚠️ This version can have race conditions!
          <br />
          Try changing participants rapidly - older requests might overwrite newer ones.
        </small>
      </div>
    </div>
  );
}

// Demo container comparing both approaches
function ActivityFinderCleanupDemo() {
  const [showWithCleanup, setShowWithCleanup] = useState(true);
  const [showWithoutCleanup, setShowWithoutCleanup] = useState(false);

  return (
    <div className="demo-container">
      <h2>Race Condition Prevention Demo</h2>
      <p className="demo-description">
        This demonstrates how cleanup functions in useEffect can prevent race conditions
        when making API calls. Watch the console messages carefully!
      </p>
      
      <div className="demo-controls">
        <button 
          onClick={() => setShowWithCleanup(!showWithCleanup)}
          className={`toggle-button ${showWithCleanup ? 'active' : ''}`}
        >
          {showWithCleanup ? 'Hide' : 'Show'} Protected Version
        </button>
        
        <button 
          onClick={() => setShowWithoutCleanup(!showWithoutCleanup)}
          className={`toggle-button ${showWithoutCleanup ? 'active' : ''}`}
        >
          {showWithoutCleanup ? 'Hide' : 'Show'} Unprotected Version
        </button>
      </div>
      
      {showWithCleanup && <ActivityFinderWithCleanup />}
      {showWithoutCleanup && <ActivityFinderWithoutCleanup />}
      
      <div className="learning-points">
        <h4>🎓 Understanding Race Conditions:</h4>
        <ul>
          <li><strong>Problem:</strong> When you change state quickly, multiple API requests are sent</li>
          <li><strong>Issue:</strong> Older, slower requests might complete after newer ones</li>
          <li><strong>Result:</strong> You see stale data instead of the latest request result</li>
          <li><strong>Solution:</strong> Use cleanup function with ignore flag</li>
        </ul>
        
        <h4>🧪 How to Test:</h4>
        <ol>
          <li>Open the browser console to see request logs</li>
          <li>Rapidly change the participant count in both components</li>
          <li>Compare the console messages between protected and unprotected versions</li>
          <li>Notice how the protected version ignores stale results</li>
        </ol>
      </div>
      
      <div className="warning-box">
        <h4>⚠️ Why This Matters:</h4>
        <p>
          Without proper cleanup, your app might display wrong information when users
          interact quickly with your interface. This is especially important for:
        </p>
        <ul>
          <li>Search functionality</li>
          <li>Dynamic filtering</li>
          <li>Form validation</li>
          <li>Any rapid state changes that trigger API calls</li>
        </ul>
      </div>
    </div>
  );
}

export default ActivityFinderCleanupDemo;
export { ActivityFinderWithCleanup, ActivityFinderWithoutCleanup };