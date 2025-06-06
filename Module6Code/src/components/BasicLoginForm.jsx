import { useState } from "react";

function BasicLoginForm() {
  // input state values always need to be strings - empty initially
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  // Submit handler using preventDefault to stop page refresh
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior (page refresh)
    console.log("Form submitted:", { userName, userEmail, userPassword });
    // Here you would typically send data to a server or process it
    alert(`Welcome ${userName}! Email: ${userEmail}`);
  };

  return (
    <div className="BasicLoginForm componentBox">
      <form onSubmit={handleSubmit}>
        <div className="formRow">
          <label>
            Name:
            <input
              type="text"
              value={userName}
              name="userName"
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your name"
            />
          </label>
        </div>
        <div className="formRow">
          <label>
            Email Address:
            <input
              type="email"
              value={userEmail}
              name="userEmail"
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </label>
        </div>
        <div className="formRow">
          <label>
            Password:
            <input
              type="password"
              value={userPassword}
              name="password"
              onChange={(e) => setUserPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </label>
        </div>
        <div className="formRow">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default BasicLoginForm;