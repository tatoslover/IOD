// MoodChanger.jsx
import { useState } from "react";

function MoodChanger() {
  const [mood, setMood] = useState("happy");

  return (
    <div className="MoodChanger componentBox">
      <p>Current Mood: {mood}</p>
      <button onClick={() => setMood("excited")}>Excited</button>
      <button onClick={() => setMood("sad")}>Sad</button>
      <button onClick={() => setMood("chill")}>Chill</button>
    </div>
  );
}

export default MoodChanger;
