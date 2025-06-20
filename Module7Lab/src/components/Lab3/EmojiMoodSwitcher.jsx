import React, { useState } from 'react';
import { useEmoji } from '../../hooks/useEmoji';

const EmojiMoodSwitcher = () => {
  const {
    currentMood,
    moodHistory,
    changeMood,
    changeToRandomMood,
    toggleMood,
    clearMoodHistory,
    getAllMoods,
    getMoodStats
  } = useEmoji();

  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  const allMoods = getAllMoods();
  const moodStats = getMoodStats();

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString();
  };

  return (
    <div className="emoji-mood-switcher componentBox">
      <h3>Lab 3: Emoji Mood Switcher with Context</h3>

      {/* Current Mood Display */}
      <div className="current-mood-display">
        <div
          className="emoji-large"
          style={{
            color: currentMood.color,
            fontSize: '4rem',
            textAlign: 'center',
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}
        >
          {currentMood.emoji}
        </div>
        <p className="mood-name" style={{
          textAlign: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: currentMood.color,
          marginBottom: '2rem'
        }}>
          Currently feeling: {currentMood.name}
        </p>
      </div>

      {/* Basic Controls */}
      <div className="mood-controls" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        flexWrap: 'wrap'
      }}>
        <button
          className="mood-button primary"
          onClick={toggleMood}
          style={{
            backgroundColor: '#667eea',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
        >
          Toggle Happy/Sad
        </button>

        <button
          className="mood-button secondary"
          onClick={changeToRandomMood}
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
        >
          Random Mood
        </button>

        <button
          className="mood-button tertiary"
          onClick={() => setShowAdvanced(!showAdvanced)}
          style={{
            backgroundColor: '#6f42c1',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
        >
          {showAdvanced ? 'Hide Advanced' : 'Show Advanced'}
        </button>
      </div>

      {/* Advanced Controls */}
      {showAdvanced && (
        <div className="advanced-controls" style={{ marginTop: '2rem' }}>
          <h4>Choose Specific Mood:</h4>
          <div className="mood-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            {allMoods.map(mood => (
              <button
                key={mood.key}
                className={`mood-option ${currentMood.name === mood.name ? 'active' : ''}`}
                onClick={() => changeMood(mood.key)}
                style={{
                  backgroundColor: currentMood.name === mood.name ? mood.color : 'white',
                  color: currentMood.name === mood.name ? 'white' : mood.color,
                  border: `2px solid ${mood.color}`,
                  borderRadius: '8px',
                  padding: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                  {mood.emoji}
                </div>
                {mood.name}
              </button>
            ))}
          </div>

          {/* Mood Statistics */}
          {Object.keys(moodStats).length > 0 && (
            <div className="mood-stats" style={{
              backgroundColor: '#f8f9fa',
              padding: '1rem',
              borderRadius: '8px',
              marginBottom: '1rem'
            }}>
              <h5>Mood Statistics:</h5>
              <div className="stats-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                gap: '0.5rem'
              }}>
                {Object.entries(moodStats).map(([mood, count]) => (
                  <div key={mood} style={{
                    textAlign: 'center',
                    padding: '0.5rem',
                    backgroundColor: 'white',
                    borderRadius: '4px',
                    fontSize: '0.9rem'
                  }}>
                    <strong>{mood}</strong><br />
                    {count} time{count !== 1 ? 's' : ''}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* History Controls */}
          <div className="history-controls" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <button
              className="mood-button"
              onClick={() => setShowHistory(!showHistory)}
              style={{
                backgroundColor: '#17a2b8',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                fontSize: '0.9rem',
                cursor: 'pointer'
              }}
            >
              {showHistory ? 'Hide History' : 'Show History'} ({moodHistory.length})
            </button>

            {moodHistory.length > 0 && (
              <button
                className="mood-button danger"
                onClick={clearMoodHistory}
                style={{
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
              >
                Clear History
              </button>
            )}
          </div>

          {/* History Display */}
          {showHistory && moodHistory.length > 0 && (
            <div className="mood-history" style={{
              marginTop: '1rem',
              backgroundColor: '#f8f9fa',
              padding: '1rem',
              borderRadius: '8px',
              maxHeight: '200px',
              overflowY: 'auto'
            }}>
              <h5>Mood Change History:</h5>
              <div className="history-list">
                {moodHistory.slice(-10).reverse().map((entry, index) => (
                  <div key={index} className="history-entry" style={{
                    padding: '0.5rem',
                    marginBottom: '0.5rem',
                    backgroundColor: 'white',
                    borderRadius: '4px',
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <span>
                      {entry.from.emoji} → {entry.to.emoji}
                      <strong> {entry.to.name}</strong>
                    </span>
                    <span style={{ color: '#666' }}>
                      {formatTime(entry.timestamp)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}


    </div>
  );
};

export default EmojiMoodSwitcher;
