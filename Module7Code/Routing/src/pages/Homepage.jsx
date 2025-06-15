import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <div className="Homepage">
      <h1>React Router Demo</h1>

      <div className="intro-section">
        <h2>Client-Side Routing</h2>
        <p>
          React Router enables single page applications (SPAs) to simulate multiple pages
          by updating the URL and rendering different components without server requests.
        </p>
      </div>

      <div className="demo-concepts">
        <div className="concept-card">
          <h3>Basic Navigation</h3>
          <p>
            <strong>Link & NavLink:</strong> Declarative navigation with active state styling.
            Try the navigation above to see URL changes without page refreshes.
          </p>
        </div>

        <div className="concept-card">
          <h3>Nested Routes</h3>
          <p>
            <strong>Outlet:</strong> Child routes render within parent components.
            <Link to="/dash">Dashboard</Link> demonstrates nested Messages and Tasks sections.
          </p>
        </div>

        <div className="concept-card">
          <h3>Dynamic Routes</h3>
          <p>
            <strong>useParams:</strong> Extract parameters from URLs like <code>/posts/:id</code>.
            Browse <Link to="/posts">Posts</Link> to see dynamic routing in action.
          </p>
        </div>

        <div className="concept-card">
          <h3>Query Parameters</h3>
          <p>
            <strong>useSearchParams:</strong> Manage URL query strings like <code>?limit=10</code>.
            Change post limits in the Posts section to see query parameters update.
          </p>
        </div>

        <div className="concept-card">
          <h3>Protected Routes</h3>
          <p>
            <strong>Navigate:</strong> Redirect unauthorized users automatically.
            <Link to="/login">Login</Link> to access protected Dashboard content.
          </p>
        </div>

        <div className="concept-card">
          <h3>Programmatic Navigation</h3>
          <p>
            <strong>useNavigate:</strong> Navigate through JavaScript functions.
            Dashboard buttons demonstrate navigation via onClick handlers.
          </p>
        </div>
      </div>

      <div className="intro-section">
        <h2>Quick Navigation</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/posts" className="nav-button">Browse Posts</Link>
          <Link to="/dash" className="nav-button">Dashboard</Link>
          <Link to="/about" className="nav-button">About</Link>
        </div>
      </div>
    </div>
  )
}
