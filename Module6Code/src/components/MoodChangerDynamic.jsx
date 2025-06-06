// MoodChangerDynamic.jsx
import { useState } from "react";

function MoodChangerDynamic() {
  const [mood, setMood] = useState("happy");

  return (
    <div className="MoodChanger componentBox">
      <h2>Current Mood: {mood}</h2>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <button onClick={() => setMood("tired")}>Stay Up Late</button>
        <button onClick={() => setMood("hungry")}>Skip Lunch</button>
        <button onClick={() => setMood("excited")}>Get Good News</button>
        <button onClick={() => setMood("relaxed")}>Take a Nap</button>
        <button onClick={() => setMood("happy")}>Reset</button>
      </div>
    </div>
  );
}

export default MoodChangerDynamic;
