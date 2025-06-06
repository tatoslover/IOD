function TableOfContents() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="TableOfContents componentBox">
      <h1>📚 Table of Contents</h1>
      <p>Click any section below to jump directly to it:</p>
      
      <div className="toc-grid">
        <div className="toc-section">
          <h3>🚀 Basic React Concepts</h3>
          <ul>
            <li>
              <button onClick={() => scrollToSection('first-react-examples')}>
                First React App Examples
              </button>
            </li>
          </ul>
        </div>

        <div className="toc-section">
          <h3>🧩 Component Composition</h3>
          <ul>
            <li>
              <button onClick={() => scrollToSection('comment-section')}>
                Comment Section
              </button>
            </li>
          </ul>
        </div>

        <div className="toc-section">
          <h3>🎭 State Management</h3>
          <ul>
            <li>
              <button onClick={() => scrollToSection('mood-changer')}>
                Original MoodChanger
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('mood-changer-dynamic')}>
                Dynamic MoodChanger
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('mood-changer-event')}>
                Event Handler MoodChanger
              </button>
            </li>
          </ul>
        </div>

        <div className="toc-section">
          <h3>🎂 Complex State Examples</h3>
          <ul>
            <li>
              <button onClick={() => scrollToSection('birthday-translator')}>
                Birthday Translator (Combined State)
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('birthday-translator-dynamic')}>
                Birthday Translator (Dynamic)
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('birthday-translator-streamlined')}>
                Birthday Translator (Streamlined)
              </button>
            </li>
          </ul>
        </div>

        <div className="toc-section">
          <h3>🌤️ Advanced Patterns</h3>
          <ul>
            <li>
              <button onClick={() => scrollToSection('weather-app')}>
                Weather App (Lifting State Up)
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('movies-list')}>
                Movies List (Array State)
              </button>
            </li>
          </ul>
        </div>

        <div className="toc-section">
          <h3>📝 Forms & Validation</h3>
          <ul>
            <li>
              <button onClick={() => scrollToSection('basic-login-form')}>
                Basic Login Form (Simple)
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('login-form')}>
                Advanced Login Form (With Validation)
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('tv-shows-list')}>
                TV Shows List (Form + Array State)
              </button>
            </li>
          </ul>
        </div>

        <div className="toc-section">
          <h3>🚨 Error Handling</h3>
          <ul>
            <li>
              <button onClick={() => scrollToSection('error-handling')}>
                Error Boundary Demo
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="toc-summary">
        <p>
          <strong>💡 What you'll learn:</strong> JSX basics, props, state management, 
          event handling, form validation, component composition, and React best practices.
        </p>
      </div>
    </div>
  );
}

export default TableOfContents;