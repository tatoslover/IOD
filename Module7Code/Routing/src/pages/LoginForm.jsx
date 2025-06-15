import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/useUserContext';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, currentUser } = useUserContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      if (email && password.length >= 6) {
        login(email, 'Demo User');
        navigate('/dash');
      } else {
        alert('Please enter a valid email and password (min 6 characters)');
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleDemoLogin = () => {
    setEmail('demo@example.com');
    setPassword('password123');
  };

  if (currentUser.email) {
    return (
      <div className="LoginForm">
        <h1>Already Logged In</h1>
        <div className="intro-section">
          <p>Logged in as {currentUser.email}</p>
          <p>You now have access to protected Dashboard content.</p>
          <button onClick={() => navigate('/dash')} className="nav-button">
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="LoginForm">
      <h1>Login</h1>

      <div className="intro-section">
        <h2>Protected Routes</h2>
        <p>
          Dashboard requires authentication. Access it without logging in to see automatic redirect.
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{
        maxWidth: '400px',
        margin: '2rem auto',
        padding: '2rem',
        background: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #ddd'
      }}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: '500',
            color: '#333'
          }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '0.8rem',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '1rem',
              boxSizing: 'border-box'
            }}
            placeholder="Enter your email"
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="password" style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: '500',
            color: '#333'
          }}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            style={{
              width: '100%',
              padding: '0.8rem',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '1rem',
              boxSizing: 'border-box'
            }}
            placeholder="Enter your password (min 6 chars)"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          style={{
            width: '100%',
            padding: '0.8rem',
            background: isLoading
              ? '#ccc'
              : 'linear-gradient(45deg, rgb(210, 105, 30), rgb(190, 95, 25))',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'all 0.3s ease'
          }}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <div className="intro-section">
        <h3>Demo Instructions</h3>
        <p>Use any email and password (min 6 characters).</p>
        <button onClick={handleDemoLogin} className="nav-button">
          Fill Demo Credentials
        </button>
      </div>
    </div>
  );
}
