import { useContext } from 'react';
import EmojiContext from '../contexts/emojiContextDefinition';

// Custom hook to use the emoji context
export const useEmoji = () => {
  const context = useContext(EmojiContext);
  if (!context) {
    throw new Error('useEmoji must be used within an EmojiProvider');
  }
  return context;
};

export default useEmoji;
