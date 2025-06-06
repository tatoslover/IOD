import "./App.css";

import TableOfContents from "./components/TableOfContents";
import FirstReactAppExamples from "./components/FirstReactAppExamples";
import MoodChanger from "./components/MoodChanger";
import MoodChangerDynamic from "./components/MoodChangerDynamic";
import MoodChangerEvent from "./components/MoodChangerEvent";
import BirthdayTranslator from "./components/BirthdayTranslator";
import BirthdayTranslatorDynamic from "./components/BirthdayTranslatorDynamic";
import BirthdayTranslatorStreamlined from "./components/BirthdayTranslatorStreamlined";
import Weather from "./components/Weather";
import MoviesList from "./components/MoviesList";
import CommentSection from "./components/CommentSection";
import TVShowsList from "./components/TVShowsList";
import ExplodingBomb from "./components/ExplodingBomb";
import BasicLoginForm from "./components/BasicLoginForm";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <>
      <TableOfContents />

      <div id="first-react-examples" style={{ marginTop: "2rem" }}>
        <h3>First React App Examples - Basic React Concepts</h3>
        <FirstReactAppExamples />
      </div>

      <div id="comment-section" style={{ marginTop: "2rem" }}>
        <h3>Comment Section - Component Composition</h3>
        <CommentSection />
      </div>

      <div id="mood-changer" style={{ marginTop: "2rem" }}>
        <h3>Original MoodChanger Component</h3>
        <MoodChanger />
      </div>

      <div id="mood-changer-dynamic" style={{ marginTop: "2rem" }}>
        <h3>Dynamic MoodChanger Component</h3>
        <MoodChangerDynamic />
      </div>

      <div id="mood-changer-event" style={{ marginTop: "2rem" }}>
        <h3>Event Handler MoodChanger Component</h3>
        <MoodChangerEvent />
      </div>

      <div id="birthday-translator" style={{ marginTop: "2rem" }}>
        <h3>Birthday Translator - Combined State Object</h3>
        <BirthdayTranslator />
      </div>

      <div id="birthday-translator-dynamic" style={{ marginTop: "2rem" }}>
        <h3>Birthday Translator - Dynamic Buttons</h3>
        <BirthdayTranslatorDynamic />
      </div>

      <div id="birthday-translator-streamlined" style={{ marginTop: "2rem" }}>
        <h3>Birthday Translator - Streamlined (No Redundant State)</h3>
        <BirthdayTranslatorStreamlined />
      </div>

      <div id="weather-app" style={{ marginTop: "2rem" }}>
        <h3>Weather App - Lifting State Up</h3>
        <Weather />
      </div>

      <div id="movies-list" style={{ marginTop: "2rem" }}>
        <h3>Movies List - Array State Management</h3>
        <MoviesList />
      </div>

      <div id="basic-login-form" style={{ marginTop: "2rem" }}>
        <h3>Basic Login Form - Simple Controlled Components</h3>
        <BasicLoginForm />
      </div>

      <div id="login-form" style={{ marginTop: "2rem" }}>
        <h3>Advanced Login Form - With Validation & Attempt Limiting</h3>
        <LoginForm />
      </div>

      <div id="tv-shows-list" style={{ marginTop: "2rem" }}>
        <h3>TV Shows List - Interactive Form with Array State</h3>
        <TVShowsList />
      </div>

      <div id="error-handling" style={{ marginTop: "2rem" }}>
        <h3>Error Handling - Error Boundary Demo</h3>
        <ExplodingBomb />
      </div>
    </>
  );
}

export default App;
