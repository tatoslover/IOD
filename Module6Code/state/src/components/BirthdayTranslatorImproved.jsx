// BirthdayTranslatorImproved.jsx
// This component demonstrates improved state management principles:
// 1. Avoids redundant state by calculating derived values
// 2. Keeps state simple with a single value
// 3. Prevents state contradictions
import { useState } from "react";

const phrases = new Map([
  ['english', 'Happy Birthday'],
  ['german', 'Alles Gute zum Geburtstag'],
  ['spanish', 'Feliz Cumpleaños'],
  ['french', 'Joyeux Anniversaire'],
  ['italian', 'Buon Compleanno'],
  ['portuguese', 'Feliz Aniversário']
]);

// Available languages for dynamic button generation
const availableLanguages = Array.from(phrases.keys());

function BirthdayTranslatorImproved() {
  // Following principle #3: Avoid redundant state
  // We only store the current language - the phrase can be calculated
  const [currentLanguage, setCurrentLanguage] = useState('english');

  const handleChangeLanguage = (newLang) => {
    setCurrentLanguage(newLang);
  };

  // Calculate the phrase from the current language (no redundant state)
  const currentPhrase = phrases.get(currentLanguage);

  return (
    <div className="BirthdayTranslator componentBox">
      <h3>{currentPhrase}! ({currentLanguage})</h3>
      
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {availableLanguages.map((language) => (
          <button
            key={language}
            onClick={() => handleChangeLanguage(language)}
            style={{
              backgroundColor: currentLanguage === language ? '#007bff' : '#f8f9fa',
              color: currentLanguage === language ? 'white' : 'black',
              border: '1px solid #dee2e6',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              textTransform: 'capitalize'
            }}
          >
            {language}
          </button>
        ))}
      </div>
      
      <div style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
        <p><strong>State Management Benefits:</strong></p>
        <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
          <li>Single source of truth (only language in state)</li>
          <li>No redundant phrase storage</li>
          <li>Impossible for language and phrase to be out of sync</li>
          <li>Simpler updates and debugging</li>
          <li>Better performance (less state updates)</li>
        </ul>
      </div>
    </div>
  );
}

export default BirthdayTranslatorImproved;