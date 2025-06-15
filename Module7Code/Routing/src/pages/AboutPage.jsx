export default function AboutPage() {
  return (
    <div className="About">
      <h1>About React Router</h1>

      <div className="intro-section">
        <h2>Single Page Applications (SPAs)</h2>
        <p>
          React is designed to render SPAs where a single HTML file is served to the browser
          and updated via JavaScript. Client-side routing simulates multiple pages by updating
          the URL and rendering different components without server requests.
        </p>
      </div>

      <div className="intro-section">
        <h2>Benefits of Client-Side Routing</h2>
        <ul>
          <li>Faster navigation - no full page reloads</li>
          <li>Smooth animations and transitions</li>
          <li>Reduced server requests</li>
          <li>Better user experience</li>
          <li>Maintains browser history</li>
        </ul>
      </div>

      <div className="demo-concepts">
        <div className="concept-card">
          <h3>Core Components</h3>
          <ul>
            <li><strong>BrowserRouter:</strong> Top-level router component</li>
            <li><strong>Routes:</strong> Container for route definitions</li>
            <li><strong>Route:</strong> Matches paths to components</li>
            <li><strong>Link:</strong> Navigation without page refresh</li>
            <li><strong>NavLink:</strong> Link with active state styling</li>
            <li><strong>Outlet:</strong> Renders nested child routes</li>
          </ul>
        </div>

        <div className="concept-card">
          <h3>Hooks</h3>
          <ul>
            <li><strong>useNavigate:</strong> Programmatic navigation</li>
            <li><strong>useParams:</strong> Extract URL parameters</li>
            <li><strong>useSearchParams:</strong> Manage query strings</li>
          </ul>
        </div>

        <div className="concept-card">
          <h3>Advanced Features</h3>
          <ul>
            <li><strong>Dynamic Routes:</strong> URLs with parameters like <code>/posts/:id</code></li>
            <li><strong>Nested Routes:</strong> Parent-child route relationships</li>
            <li><strong>Protected Routes:</strong> Authentication-based access control</li>
            <li><strong>Query Parameters:</strong> Optional URL data like <code>?limit=10</code></li>
          </ul>
        </div>
      </div>

      <div className="intro-section">
        <h2>Installation</h2>
        <div className="code-display">
npm install react-router-dom
        </div>
      </div>

      <div className="intro-section">
        <h2>File Structure</h2>
        <div className="code-display">
{`src/
├── components/     # Reusable UI components
├── context/        # React Context providers
├── hooks/          # Custom hooks
├── pages/          # Route components
├── routes/         # Routing configuration
└── App.jsx         # Root component`}
        </div>
      </div>
    </div>
  )
}
