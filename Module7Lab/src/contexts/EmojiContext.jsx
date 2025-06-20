import React, { useState } from 'react';
import { MOODS } from '../constants/emojiMoods';
import { getRandomMood, getAllMoods, getMoodStats } from '../utils/emojiUtils';
import EmojiContext from './emojiContextDefinition';



// Provider component
export const EmojiProvider = ({ children }) => {
  const [currentMood, setCurrentMood] = useState(MOODS.HAPPY);
  const [moodHistory, setMoodHistory] = useState([]);

  // Change to a specific mood
  const changeMood = (moodKey) => {
    if (MOODS[moodKey]) {
      const previousMood = currentMood;
      setCurrentMood(MOODS[moodKey]);

      // Add to history
      setMoodHistory(prev => [...prev, {
        from: previousMood,
        to: MOODS[moodKey],
        timestamp: new Date().toISOString()
      }]);
    }
  };

  // Change to random mood
  const changeToRandomMood = () => {
    const randomMoodKey = getRandomMood(currentMood.name);
    changeMood(randomMoodKey);
  };

  // Toggle between happy and sad (for backward compatibility)
  const toggleMood = () => {
    if (currentMood.name === 'Happy') {
      changeMood('SAD');
    } else {
      changeMood('HAPPY');
    }
  };



  // Clear mood history
  const clearMoodHistory = () => {
    setMoodHistory([]);
  };

  // Get mood statistics
  const getMoodStatsForHistory = () => {
    return getMoodStats(moodHistory);
  };

  const value = {
    // Current state
    currentMood,
    moodHistory,

    // Actions
    changeMood,
    changeToRandomMood,
    toggleMood,
    clearMoodHistory,

    // Getters
    getAllMoods,
    getMoodStats: getMoodStatsForHistory,

    // Constants
    MOODS
  };

  return (
    <EmojiContext.Provider value={value}>
      {children}
    </EmojiContext.Provider>
  );
};

export default EmojiContext;
