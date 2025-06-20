import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './NavigationDemo.css';

const NavigationDemo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pages = [
    { path: '/', name: 'Home', icon: '🏠', description: 'Main landing page with overview' },
    { path: '/login', name: 'Login', icon: '🔐', description: 'User authentication form' },
    { path: '/bitcoin-rates', name: 'Bitcoin Rates', icon: '₿', description: 'Cryptocurrency price dashboard' },
    { path: '/posts', name: 'Posts', icon: '📝', description: 'Content management with MUI cards' }
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  const goBack = () => {
    navigate(-1);
  };

  const goForward = () => {
    navigate(1);
  };

  return (
    <div className="NavigationDemo componentBox">
      <h3>Lab 4: React Router Navigation Demo</h3>
      <p className="lab-description">
        This component demonstrates Exercise 4: Creating a multi-page application with
        React Router navigation. The app includes Home, Login, Bitcoin Rates, and Posts pages.
        Features programmatic navigation and route tracking.
      </p>

      {/* Navigation Controls */}
      <div className="navigation-controls">
        <h4>🧭 Navigation Controls:</h4>
        <div className="nav-buttons">
          <button onClick={goBack} className="nav-button back">
            ← Back
          </button>
          <button onClick={goForward} className="nav-button forward">
            Forward →
          </button>
        </div>
      </div>

      {/* Page Navigation */}
      <div className="page-navigation">
        <h4>🚀 Navigate to Pages:</h4>
        <div className="page-grid">
          {pages.map((page) => (
            <div
              key={page.path}
              className={`page-card ${location.pathname === page.path ? 'active' : ''}`}
              onClick={() => handleNavigation(page.path)}
            >
              <div className="page-icon">{page.icon}</div>
              <div className="page-content">
                <h5>{page.name}</h5>
                <p>{page.description}</p>
                <code>{page.path}</code>
              </div>
              {location.pathname === page.path && (
                <div className="active-indicator">
                  ✓ Current Page
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Features */}
      <div className="navigation-features">
        <h4>⚡ Navigation Features Demonstrated:</h4>
        <div className="features-grid">
          <div className="feature-item">
            <h5>🔄 Programmatic Navigation</h5>
            <p>Using <code>useNavigate()</code> hook to navigate between routes</p>
          </div>
          <div className="feature-item">
            <h5>📍 Location Tracking</h5>
            <p>Using <code>useLocation()</code> hook to track current route</p>
          </div>
          <div className="feature-item">
            <h5>🗂️ Nested Routes</h5>
            <p>Layout component with <code>Outlet</code> for nested routing</p>
          </div>
          <div className="feature-item">
            <h5>🎯 Route Parameters</h5>
            <p>Dynamic routing with URL parameters and query strings</p>
          </div>
        </div>
      </div>

      {/* Technical Implementation */}
      <div className="technical-info">
        <h4>🔧 Technical Implementation:</h4>
        <ul>
          <li><strong>Router Setup:</strong> <code>BrowserRouter</code> wrapping the entire app</li>
          <li><strong>Route Definition:</strong> <code>Routes</code> and <code>Route</code> components</li>
          <li><strong>Navigation Hook:</strong> <code>useNavigate()</code> for programmatic navigation</li>
          <li><strong>Location Hook:</strong> <code>useLocation()</code> for route information</li>
          <li><strong>Layout Pattern:</strong> <code>MUILayout</code> with <code>Outlet</code> for consistent structure</li>
          <li><strong>Navigation Guard:</strong> Conditional rendering based on current route</li>
        </ul>
      </div>

      {/* Code Example */}
      <div className="code-example">
        <h4>💻 Key Code Pattern:</h4>
        <pre>
{`// App.jsx Route Setup
<Router>
  <Routes>
    <Route path="/" element={<MUILayout />}>
      <Route index element={<MUIHomePage />} />
      <Route path="login" element={<MUILoginForm />} />
      <Route path="bitcoin-rates" element={<BitcoinRatesPage />} />
      <Route path="posts" element={<PostList />} />
    </Route>
  </Routes>
</Router>

// Navigation Component Usage
const navigate = useNavigate();
const location = useLocation();

const handleNavigation = (path) => {
  navigate(path);
};`}
        </pre>
      </div>
    </div>
  );
};

export default NavigationDemo;
