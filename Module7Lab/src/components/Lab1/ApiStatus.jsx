import React, { useState, useEffect } from 'react';

const ApiStatus = () => {
  const [apiStatus, setApiStatus] = useState({
    status: 'checking',
    responseTime: null,
    error: null,
    lastChecked: null
  });

  const checkApiStatus = async () => {
    setApiStatus(prev => ({ ...prev, status: 'checking' }));

    const startTime = Date.now();

    try {
      const response = await fetch('https://api.coingecko.com/api/v3/ping', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        }
      });

      const endTime = Date.now();
      const responseTime = endTime - startTime;

      if (response.ok) {
        setApiStatus({
          status: 'online',
          responseTime,
          error: null,
          lastChecked: new Date().toLocaleTimeString()
        });
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      setApiStatus({
        status: 'offline',
        responseTime: null,
        error: error.message,
        lastChecked: new Date().toLocaleTimeString()
      });
    }
  };

  useEffect(() => {
    checkApiStatus();
    const interval = setInterval(checkApiStatus, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = () => {
    switch (apiStatus.status) {
      case 'online':
        return '#28a745';
      case 'offline':
        return '#dc3545';
      case 'checking':
        return '#ffc107';
      default:
        return '#6c757d';
    }
  };

  const getStatusIcon = () => {
    switch (apiStatus.status) {
      case 'online':
        return '🟢';
      case 'offline':
        return '🔴';
      case 'checking':
        return '🟡';
      default:
        return '⚪';
    }
  };

  const getStatusText = () => {
    switch (apiStatus.status) {
      case 'online':
        return 'API Online';
      case 'offline':
        return 'API Offline';
      case 'checking':
        return 'Checking...';
      default:
        return 'Unknown';
    }
  };

  return (
    <div style={{
      padding: '1rem',
      backgroundColor: '#f8f9fa',
      border: '1px solid #e9ecef',
      borderRadius: '6px',
      marginBottom: '1rem',
      fontSize: '0.9rem'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '0.5rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <span>{getStatusIcon()}</span>
          <strong style={{ color: getStatusColor() }}>
            {getStatusText()}
          </strong>
        </div>
        <button
          onClick={checkApiStatus}
          style={{
            padding: '0.25rem 0.5rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.8rem'
          }}
        >
          Refresh
        </button>
      </div>

      <div style={{ color: '#6c757d', fontSize: '0.8rem' }}>
        {apiStatus.responseTime && (
          <div>Response time: {apiStatus.responseTime}ms</div>
        )}
        {apiStatus.lastChecked && (
          <div>Last checked: {apiStatus.lastChecked}</div>
        )}
        {apiStatus.error && (
          <div style={{ color: '#dc3545', marginTop: '0.25rem' }}>
            Error: {apiStatus.error}
          </div>
        )}
      </div>

      {apiStatus.status === 'offline' && (
        <div style={{
          marginTop: '0.5rem',
          padding: '0.5rem',
          backgroundColor: '#fff3cd',
          border: '1px solid #ffeaa7',
          borderRadius: '4px',
          color: '#856404',
          fontSize: '0.8rem'
        }}>
          <strong>Troubleshooting:</strong>
          <ul style={{ margin: '0.25rem 0', paddingLeft: '1rem' }}>
            <li>Check your internet connection</li>
            <li>The CoinGecko API may be temporarily unavailable</li>
            <li>Rate limits may be in effect - wait 1-2 minutes</li>
            <li>Try refreshing the page</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ApiStatus;
