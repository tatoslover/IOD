// MultiLanguageGreeting.jsx
// Advanced component demonstrating comprehensive state management principles:
// 1. Merge state values that need to stay in sync
// 2. Prevent contradictory state values
// 3. Avoid redundant state - calculate derived values
// 4. Don't duplicate information
// 5. Flatten nested data structures

import { useState } from "react";

// Flatten the data structure instead of nesting it deeply
const greetingData = {
  languages: {
    english: { name: 'English', flag: '🇺🇸' },
    spanish: { name: 'Español', flag: '🇪🇸' },
    french: { name: 'Français', flag: '🇫🇷' },
    german: { name: 'Deutsch', flag: '🇩🇪' },
    italian: { name: 'Italiano', flag: '🇮🇹' },
    portuguese: { name: 'Português', flag: '🇵🇹' },
    japanese: { name: '日本語', flag: '🇯🇵' },
    korean: { name: '한국어', flag: '🇰🇷' }
  },
  greetings: {
    birthday: {
      english: 'Happy Birthday',
      spanish: 'Feliz Cumpleaños',
      french: 'Joyeux Anniversaire',
      german: 'Alles Gute zum Geburtstag',
      italian: 'Buon Compleanno',
      portuguese: 'Feliz Aniversário',
      japanese: 'お誕生日おめでとう',
      korean: '생일 축하해요'
    },
    hello: {
      english: 'Hello',
      spanish: 'Hola',
      french: 'Bonjour',
      german: 'Hallo',
      italian: 'Ciao',
      portuguese: 'Olá',
      japanese: 'こんにちは',
      korean: '안녕하세요'
    },
    goodbye: {
      english: 'Goodbye',
      spanish: 'Adiós',
      french: 'Au revoir',
      german: 'Auf Wiedersehen',
      italian: 'Arrivederci',
      portuguese: 'Tchau',
      japanese: 'さようなら',
      korean: '안녕히 가세요'
    }
  }
};

function MultiLanguageGreeting() {
  // Principle #1: Merge state values that need to stay in sync
  // Instead of separate currentLanguage and selectedGreeting states,
  // we use a single state object for related values
  const [settings, setSettings] = useState({
    language: 'english',
    greetingType: 'birthday',
    showTranslation: true
  });

  // Principle #3: Calculate derived values instead of storing them
  const currentLanguageInfo = greetingData.languages[settings.language];
  const currentGreeting = greetingData.greetings[settings.greetingType][settings.language];
  const availableLanguages = Object.keys(greetingData.languages);
  const availableGreetings = Object.keys(greetingData.greetings);

  // Single handler for all setting changes - prevents state contradictions
  const updateSettings = (newSettings) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      ...newSettings
    }));
  };

  return (
    <div className="MultiLanguageGreeting componentBox">
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '2.5em', margin: '16px 0' }}>
          {currentLanguageInfo.flag} {currentGreeting}!
        </h2>
        
        {settings.showTranslation && (
          <p style={{ fontSize: '1.2em', color: '#666', fontStyle: 'italic' }}>
            "{currentGreeting}" in {currentLanguageInfo.name}
          </p>
        )}
      </div>

      <div style={{ display: 'grid', gap: '20px', maxWidth: '600px', margin: '0 auto' }}>
        {/* Greeting Type Selection */}
        <div>
          <h4>Choose Greeting Type:</h4>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {availableGreetings.map((type) => (
              <button
                key={type}
                onClick={() => updateSettings({ greetingType: type })}
                style={{
                  backgroundColor: settings.greetingType === type ? '#28a745' : '#f8f9fa',
                  color: settings.greetingType === type ? 'white' : 'black',
                  border: '1px solid #dee2e6',
                  padding: '10px 16px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                  fontWeight: settings.greetingType === type ? 'bold' : 'normal'
                }}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Language Selection */}
        <div>
          <h4>Choose Language:</h4>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
            gap: '8px' 
          }}>
            {availableLanguages.map((lang) => (
              <button
                key={lang}
                onClick={() => updateSettings({ language: lang })}
                style={{
                  backgroundColor: settings.language === lang ? '#007bff' : '#f8f9fa',
                  color: settings.language === lang ? 'white' : 'black',
                  border: '1px solid #dee2e6',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px'
                }}
              >
                {greetingData.languages[lang].flag}
                <span>{greetingData.languages[lang].name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Options */}
        <div>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={settings.showTranslation}
              onChange={(e) => updateSettings({ showTranslation: e.target.checked })}
            />
            Show translation details
          </label>
        </div>

        {/* State Management Demonstration */}
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '16px', 
          borderRadius: '8px', 
          border: '1px solid #dee2e6' 
        }}>
          <h4 style={{ marginTop: 0 }}>State Management Principles Applied:</h4>
          <div style={{ fontSize: '14px', textAlign: 'left' }}>
            <p><strong>1. Merged Related State:</strong> Language, greeting type, and options are in one object</p>
            <p><strong>2. No Contradictions:</strong> Single update handler prevents inconsistent state</p>
            <p><strong>3. No Redundant State:</strong> Greeting text and language info are calculated</p>
            <p><strong>4. No Duplication:</strong> Data is stored once in the greetingData object</p>
            <p><strong>5. Flattened Structure:</strong> Data is organized in simple, accessible objects</p>
          </div>
          
          <details style={{ marginTop: '12px' }}>
            <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>
              Current State (Click to expand)
            </summary>
            <pre style={{ 
              backgroundColor: 'white', 
              padding: '12px', 
              borderRadius: '4px',
              fontSize: '12px',
              overflow: 'auto'
            }}>
              {JSON.stringify(settings, null, 2)}
            </pre>
          </details>
        </div>
      </div>
    </div>
  );
}

export default MultiLanguageGreeting;