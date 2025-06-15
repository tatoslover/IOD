import { useNavigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/useUserContext";

export default function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="DashboardPage componentBox">
      <h1>Dashboard</h1>

      <div className="intro-section">
        <p>
          Nested routing demo. Notice how URLs change and content updates without page refreshes.
        </p>
      </div>

      <div className="button-group">
        <button onClick={() => navigate("/dash/tasks")}>Show Tasks</button>
        <button onClick={() => navigate("/dash/messages")}>Show Messages</button>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>

      <Outlet />
    </div>
  );
}

export function DashboardMessages() {
  const { currentUser } = useUserContext();
  return (
    <div className="DashboardMessages">
      <h3>Messages</h3>
      <p>Welcome, {currentUser.email || 'Guest User'}!</p>
      <p>
        This demonstrates nested routing. URL: <code>/dash/messages</code>
      </p>
      <div style={{
        background: 'white',
        padding: '1rem',
        borderRadius: '6px',
        marginTop: '1rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h4>Sample Message</h4>
        <p>Nested route content rendered via Outlet component.</p>
        <small style={{ color: '#666' }}>Received: {new Date().toLocaleTimeString()}</small>
      </div>
    </div>
  );
}

export function DashboardTasks() {
  const tasks = [
    { id: 1, name: "Learn React Router fundamentals", completed: true },
    { id: 2, name: "Implement nested routing", completed: true },
    { id: 3, name: "Master programmatic navigation", completed: false },
    { id: 4, name: "Integrate with React Context", completed: true },
    { id: 5, name: "Build responsive navigation", completed: false },
  ];

  return (
    <div className="DashboardTasks">
      <h3>Tasks</h3>
      <p>
        Task list via nested routing. URL: <code>/dash/tasks</code>
      </p>
      <ul className="tasks">
        {tasks.map((task) => (
          <li key={task.id} style={{
            opacity: task.completed ? 0.8 : 1,
            textDecoration: task.completed ? 'line-through' : 'none'
          }}>
            {task.name}
            {task.completed && <span style={{
              marginLeft: '0.5rem',
              color: 'green',
              fontWeight: 'bold'
            }}>✓</span>}
          </li>
        ))}
      </ul>

    </div>
  );
}
