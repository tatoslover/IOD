// BirthdayTranslator.jsx
import { useState } from "react";

const phrases = new Map([
  ['english', 'Happy Birthday'],
  ['german', 'Alles Gute zum Geburtstag'],
  ['spanish', 'Feliz Cumpleaños'],
  ['french', 'Joyeux Anniversaire']
]);

function BirthdayTranslator() {
  const [currentPhrase, setCurrentPhrase] = useState(
    {lang: 'english', phrase: 'Happy Birthday'}
  );

  const handleChangeLanguage = (newlang) => {
    setCurrentPhrase({lang: newlang, phrase: phrases.get(newlang)});
  };

  return (
    <div className="BirthdayTranslator componentBox">
      <h3>{currentPhrase.phrase}! ({currentPhrase.lang})</h3>
      <button onClick={() => handleChangeLanguage('english')}>English</button>
      <button onClick={() => handleChangeLanguage('german')}>German</button>
      <button onClick={() => handleChangeLanguage('spanish')}>Spanish</button>
      <button onClick={() => handleChangeLanguage('french')}>French</button>
    </div>
  );
}

export default BirthdayTranslator;