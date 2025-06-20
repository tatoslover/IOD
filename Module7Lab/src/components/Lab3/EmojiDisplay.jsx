import React from 'react';
import { useEmoji } from '../../hooks/useEmoji';

const EmojiDisplay = ({
  size = 'medium',
  showName = false,
  inline = false,
  style = {}
}) => {
  const { currentMood } = useEmoji();

  const getSizeStyle = (size) => {
    switch (size) {
      case 'small':
        return { fontSize: '1.5rem' };
      case 'medium':
        return { fontSize: '2rem' };
      case 'large':
        return { fontSize: '3rem' };
      case 'xlarge':
        return { fontSize: '4rem' };
      default:
        return { fontSize: '2rem' };
    }
  };

  const containerStyle = {
    display: inline ? 'inline-flex' : 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    ...style
  };

  const emojiStyle = {
    ...getSizeStyle(size),
    color: currentMood.color,
    textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
    transition: 'all 0.3s ease'
  };

  const nameStyle = {
    fontSize: size === 'small' ? '0.8rem' : '1rem',
    fontWeight: '500',
    color: currentMood.color,
    transition: 'color 0.3s ease'
  };

  return (
    <div className="emoji-display" style={containerStyle}>
      <span className="emoji" style={emojiStyle}>
        {currentMood.emoji}
      </span>
      {showName && (
        <span className="emoji-name" style={nameStyle}>
          {currentMood.name}
        </span>
      )}
    </div>
  );
};

export default EmojiDisplay;
