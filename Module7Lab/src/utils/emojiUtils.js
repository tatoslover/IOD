import { MOODS } from '../constants/emojiMoods';

// Get random mood different from current
export const getRandomMood = (currentMoodName) => {
  const availableMoods = Object.keys(MOODS).filter(
    key => MOODS[key].name !== currentMoodName
  );
  const randomKey = availableMoods[Math.floor(Math.random() * availableMoods.length)];
  return randomKey;
};

// Get all available moods
export const getAllMoods = () => {
  return Object.entries(MOODS).map(([key, mood]) => ({
    key,
    ...mood
  }));
};

// Get mood statistics from history
export const getMoodStats = (moodHistory) => {
  const stats = {};
  moodHistory.forEach(entry => {
    const moodName = entry.to.name;
    stats[moodName] = (stats[moodName] || 0) + 1;
  });
  return stats;
};

// Format timestamp for display
export const formatTime = (timestamp) => {
  return new Date(timestamp).toLocaleTimeString();
};

// Get mood by key
export const getMoodByKey = (key) => {
  return MOODS[key] || null;
};

// Validate mood key
export const isValidMoodKey = (key) => {
  return key in MOODS;
};
