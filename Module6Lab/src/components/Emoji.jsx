import React, { useState } from 'react';

const Emoji = () => {
  const [isHappy, setIsHappy] = useState(true);

  const toggleMood = () => {
    setIsHappy(!isHappy);
  };

  return (
    <div className="emoji-container">
      <div className="emoji-display">
        <span className="emoji">{isHappy ? '😊' : '😢'}</span>
      </div>
      <button className="mood-button" onClick={toggleMood}>
        Change Mood
      </button>
    </div>
  );
};

export default Emoji;