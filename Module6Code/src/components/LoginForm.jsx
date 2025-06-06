import { useState } from "react";

function LoginForm() {
  // input state values always need to be strings - empty initially
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  
  // new state values for validation and attempts
  const [submitResult, setSubmitResult] = useState('');
  const [attemptCount, setAttemptCount] = useState(0);
  const [isFormHidden, setIsFormHidden] = useState(false);
  const maxAttempts = 3;

  // Submit handler using preventDefault to stop page refresh
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior (page refresh)
    
    // add some password validation
    if (userPassword.length < 5) {
      setSubmitResult('Password must be at least 5 characters long');
      setAttemptCount(attemptCount + 1);
    } else if (userPassword === userEmail) {
      setSubmitResult('Password must not match email address');
      setAttemptCount(attemptCount + 1);
    } else if (userName.length < 2) {
      setSubmitResult('Name must be at least 2 characters long');
      setAttemptCount(attemptCount + 1);
    } else if (!userEmail.includes('@')) {
      setSubmitResult('Please enter a valid email address');
      setAttemptCount(attemptCount + 1);
    } else {
      setSubmitResult('Successful login.');
      setIsFormHidden(true); // hide form on successful login
      return;
    }
    
    // check if max attempts reached
    if (attemptCount + 1 >= maxAttempts) {
      setSubmitResult(`Maximum login attempts (${maxAttempts}) exceeded. Form is now locked.`);
      setIsFormHidden(true);
    }
  };

  return (
    <div className="LoginForm componentBox">
      {!isFormHidden ? (
        <form onSubmit={handleSubmit}>
          <div className="formRow">
            <label>Name:
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
            <label>Email Address:
              {/* Controlled form element needs both value and onChange. onChange handler uses event param e to access target
              value.
              Whenever user types, new value is stored in state. */}
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
            <label>Password:
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
          {submitResult && <p className="submitMessage">{submitResult}</p>}
          <p className="attemptCounter">Attempts: {attemptCount} / {maxAttempts}</p>
        </form>
      ) : (
        <div className="formHidden">
          <p className="submitMessage">{submitResult}</p>
          {submitResult.includes('Successful') ? (
            <p>Welcome, {userName}! You have successfully logged in.</p>
          ) : (
            <p>Please contact support to unlock your account.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default LoginForm;
