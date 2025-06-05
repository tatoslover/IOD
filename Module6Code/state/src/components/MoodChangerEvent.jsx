// MoodChangerEvent.jsx
import { useState } from "react";

function MoodChangerEvent() {
  const [mood, setMood] = useState("happy");

  // Custom handler: set to a fixed mood
  const handleWinLotto = () => {
    setMood("ecstatic");
  };

  // Custom handler: set to a conditional mood
  const handleRunningLate = () => {
    let newMood = "stressed";
    if (mood === "stressed") newMood = "really stressed";
    else if (mood === "really stressed") newMood = "giving up";
    setMood(newMood);
  };

  // Custom handler: toggle between two moods
  const handleCoffeeBreak = () => {
    setMood(mood === "energized" ? "caffeinated" : "energized");
  };

  // Custom handler: mood based on current state
  const handleWorkDeadline = () => {
    if (mood === "happy" || mood === "relaxed") {
      setMood("focused");
    } else if (mood === "stressed" || mood === "really stressed") {
      setMood("overwhelmed");
    } else {
      setMood("determined");
    }
  };

  // Custom handler: reset to default
  const handleReset = () => {
    setMood("happy");
  };

  return (
    <div className="MoodChanger componentBox">
      <p>Current Mood: {mood}</p>

      {/* Using inline arrow functions */}
      <button onClick={() => setMood("tired")}>Stay Up Late</button>

      {/* Using custom event handler functions */}
      <button onClick={handleRunningLate}>Running Late</button>
      <button onClick={handleWinLotto}>Win Lotto</button>
      <button onClick={handleCoffeeBreak}>Coffee Break</button>
      <button onClick={handleWorkDeadline}>Work Deadline</button>
      <button onClick={handleReset}>Reset Mood</button>
    </div>
  );
}

export default MoodChangerEvent;
