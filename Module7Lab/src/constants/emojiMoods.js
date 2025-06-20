// Define available moods/emojis
export const MOODS = {
  HAPPY: { emoji: '😊', name: 'Happy', color: '#4CAF50' },
  SAD: { emoji: '😢', name: 'Sad', color: '#2196F3' },
  EXCITED: { emoji: '🤩', name: 'Excited', color: '#FF9800' },
  ANGRY: { emoji: '😠', name: 'Angry', color: '#F44336' },
  CONFUSED: { emoji: '😕', name: 'Confused', color: '#9C27B0' },
  LOVE: { emoji: '😍', name: 'In Love', color: '#E91E63' },
  COOL: { emoji: '😎', name: 'Cool', color: '#607D8B' },
  SURPRISED: { emoji: '😲', name: 'Surprised', color: '#FF5722' }
};

// Export individual moods for convenience
export const {
  HAPPY,
  SAD,
  EXCITED,
  ANGRY,
  CONFUSED,
  LOVE,
  COOL,
  SURPRISED
} = MOODS;

// Helper function to get all mood keys
export const getMoodKeys = () => Object.keys(MOODS);

// Helper function to get all mood values
export const getMoodValues = () => Object.values(MOODS);

// Helper function to get a random mood key
export const getRandomMoodKey = (excludeKey = null) => {
  const keys = getMoodKeys();
  const availableKeys = excludeKey ? keys.filter(key => key !== excludeKey) : keys;
  return availableKeys[Math.floor(Math.random() * availableKeys.length)];
};
