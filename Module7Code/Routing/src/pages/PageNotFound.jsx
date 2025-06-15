import { Link, useNavigate } from 'react-router-dom'

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="PageNotFound">
      <h1>404</h1>
      <p>Page not found</p>

      <div className="intro-section">
        <p>
          React Router's catch-all route. When no routes match the URL,
          this component renders instead of a browser error.
        </p>
      </div>

      <div className="button-group">
        <button onClick={() => navigate(-1)} className="nav-button">
          ← Go Back
        </button>
        <Link to="/" className="nav-button">
          Home
        </Link>
        <Link to="/posts" className="nav-button">
          Posts
        </Link>
      </div>

      <div className="intro-section">
        <h3>Navigation Comparison</h3>
        <ul>
          <li><strong>React Router Link:</strong> <Link to="/">Home</Link> (No page refresh)</li>
          <li><strong>Standard HTML Link:</strong> <a href="/">Home</a> (Full page refresh)</li>
        </ul>
      </div>
    </div>
  )
}

export default PageNotFound
