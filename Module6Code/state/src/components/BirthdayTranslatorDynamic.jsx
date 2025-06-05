// BirthdayTranslatorDynamic.jsx
import { useState } from "react";

const phrases = new Map([
  ['english', 'Happy Birthday'],
  ['german', 'Alles Gute zum Geburtstag'], 
  ['spanish', 'Feliz Cumpleaños'],
  ['french', 'Joyeux Anniversaire'],
  ['italian', 'Buon Compleanno'],
  ['portuguese', 'Feliz Aniversário'],
  ['japanese', 'お誕生日おめでとう'],
  ['korean', '생일 축하합니다']
]);

function BirthdayTranslatorDynamic() {
  const [currentPhrase, setCurrentPhrase] = useState(
    {lang: 'english', phrase: 'Happy Birthday'}
  );

  const handleChangeLanguage = (newlang) => {
    setCurrentPhrase({lang: newlang, phrase: phrases.get(newlang)});
  };

  // Generate buttons dynamically from the phrases Map
  const generateLanguageButtons = () => {
    return Array.from(phrases.keys()).map(language => (
      <button 
        key={language}
        onClick={() => handleChangeLanguage(language)}
        style={{
          backgroundColor: currentPhrase.lang === language ? '#0056b3' : '#007bff'
        }}
      >
        {language.charAt(0).toUpperCase() + language.slice(1)}
      </button>
    ));
  };

  return (
    <div className="BirthdayTranslator componentBox">
      <h3>{currentPhrase.phrase}! ({currentPhrase.lang})</h3>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        {generateLanguageButtons()}
      </div>
      <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
        Buttons generated dynamically from phrases Map - Combined state object
      </p>
    </div>
  );
}

export default BirthdayTranslatorDynamic;