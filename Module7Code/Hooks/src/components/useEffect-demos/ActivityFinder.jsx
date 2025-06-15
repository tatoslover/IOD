import { useState, useEffect } from "react";

// Activity Finder component that demonstrates useEffect with API calls
function ActivityFinder() {
  const [participants, setParticipants] = useState(1);
  const [activity, setActivity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Basic useEffect with API call - runs when participants changes
  useEffect(() => {
    console.log('🔍 Fetching activity for', participants, 'participants');
    setLoading(true);
    setError('');
    
    fetch('https://bored.api.lewagon.com/api/activity?' + 
          'participants=' + participants)
      .then(response => response.json())
      .then(json => {
        console.log('📥 Activity received:', json.activity);
        setActivity(json.activity);
        setLoading(false);
      })
      .catch(err => {
        console.error('❌ Error fetching activity:', err);
        setError('Failed to fetch activity');
        setLoading(false);
      });
  }, [participants]); // Runs when participants changes

  return (
    <div className="ActivityFinder">
      <h3>🎯 Activity Finder (Basic)</h3>
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
          💡 Watch the console to see when API calls are made.
          <br />
          Change the participant count to trigger new requests.
        </small>
      </div>
    </div>
  );
}

// Enhanced Activity Finder with activity type selection
function EnhancedActivityFinder() {
  const [participants, setParticipants] = useState(1);
  const [activityType, setActivityType] = useState('');
  const [activity, setActivity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Available activity types from the API documentation
  const activityTypes = [
    { value: '', label: 'Any Type' },
    { value: 'education', label: 'Education' },
    { value: 'recreational', label: 'Recreational' },
    { value: 'social', label: 'Social' },
    { value: 'diy', label: 'DIY' },
    { value: 'charity', label: 'Charity' },
    { value: 'cooking', label: 'Cooking' },
    { value: 'relaxation', label: 'Relaxation' },
    { value: 'music', label: 'Music' },
    { value: 'busywork', label: 'Busywork' }
  ];

  useEffect(() => {
    console.log('🔍 Fetching activity for', participants, 'participants, type:', activityType || 'any');
    setLoading(true);
    setError('');
    
    // Build query parameters
    let queryParams = 'participants=' + participants;
    if (activityType) {
      queryParams += '&type=' + activityType;
    }
    
    fetch('https://bored.api.lewagon.com/api/activity?' + queryParams)
      .then(response => response.json())
      .then(json => {
        console.log('📥 Activity received:', json.activity);
        setActivity(json.activity);
        setLoading(false);
      })
      .catch(err => {
        console.error('❌ Error fetching activity:', err);
        setError('Failed to fetch activity');
        setLoading(false);
      });
  }, [participants, activityType]); // Runs when either participants or activityType changes

  return (
    <div className="EnhancedActivityFinder">
      <h3>🎯 Enhanced Activity Finder</h3>
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
        
        <label>
          Choose activity type:
          <select 
            value={activityType}
            onChange={e => setActivityType(e.target.value)}
          >
            {activityTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
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
          💡 This version has multiple dependencies: [participants, activityType].
          <br />
          The effect runs when either value changes.
        </small>
      </div>
    </div>
  );
}

// Demo container for both ActivityFinder components
function ActivityFinderDemo() {
  const [showBasic, setShowBasic] = useState(true);
  const [showEnhanced, setShowEnhanced] = useState(false);

  return (
    <div className="demo-container">
      <h2>useEffect with API Calls Demo</h2>
      <p className="demo-description">
        These components demonstrate how useEffect works with API calls and dependencies.
        Watch the console to see when effects run.
      </p>
      
      <div className="demo-controls">
        <button 
          onClick={() => setShowBasic(!showBasic)}
          className={`toggle-button ${showBasic ? 'active' : ''}`}
        >
          {showBasic ? 'Hide' : 'Show'} Basic Activity Finder
        </button>
        
        <button 
          onClick={() => setShowEnhanced(!showEnhanced)}
          className={`toggle-button ${showEnhanced ? 'active' : ''}`}
        >
          {showEnhanced ? 'Hide' : 'Show'} Enhanced Activity Finder
        </button>
      </div>
      
      {showBasic && <ActivityFinder />}
      {showEnhanced && <EnhancedActivityFinder />}
      
      <div className="learning-points">
        <h4>🎓 Key Learning Points:</h4>
        <ul>
          <li><strong>Basic version:</strong> useEffect runs when [participants] changes</li>
          <li><strong>Enhanced version:</strong> useEffect runs when [participants, activityType] changes</li>
          <li>API calls are made automatically when dependencies change</li>
          <li>Loading states help show when effects are running</li>
          <li>Error handling prevents crashes from failed API calls</li>
        </ul>
      </div>
    </div>
  );
}

export default ActivityFinderDemo;
export { ActivityFinder, EnhancedActivityFinder };