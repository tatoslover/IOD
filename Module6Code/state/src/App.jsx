import "./App.css";

import MoodChanger from "./components/MoodChanger";
import MoodChangerDynamic from "./components/MoodChangerDynamic";
import MoodChangerEvent from "./components/MoodChangerEvent";
import BirthdayTranslator from "./components/BirthdayTranslator";
import BirthdayTranslatorDynamic from "./components/BirthdayTranslatorDynamic";

function App() {
  return (
    <>
      <div style={{ marginTop: "2rem" }}>
        <h3>Original MoodChanger Component</h3>
        <MoodChanger />
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3>Dynamic MoodChanger Component</h3>
        <MoodChangerDynamic />
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3>Event Handler MoodChanger Component</h3>
        <MoodChangerEvent />
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3>Birthday Translator - Combined State Object</h3>
        <BirthdayTranslator />
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3>Birthday Translator - Dynamic Buttons</h3>
        <BirthdayTranslatorDynamic />
      </div>
    </>
  );
}

export default App;
