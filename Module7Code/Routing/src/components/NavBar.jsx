import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MyThemeContext } from "../context/MyThemeContext";
import { useUserContext } from "../context/useUserContext";

export default function NavBar() {
  const { theme } = useContext(MyThemeContext);
  const { currentUser, logout } = useUserContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav
      className="NavBar"
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/dash">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Posts</NavLink>
        </li>
        {currentUser.email ? (
          <li>
            <button
              onClick={handleLogout}
              style={{
                padding: '0.8rem 1.5rem',
                background: 'linear-gradient(45deg, #dc3545, #c82333)',
                color: 'white',
                border: 'none',
                borderRadius: '25px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '500',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease'
              }}
            >
              Logout ({currentUser.email})
            </button>
          </li>
        ) : (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
