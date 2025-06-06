// BirthdayTranslatorStreamlined.jsx
import { useState } from "react";

const phrases = new Map([
  ["english", "Happy Birthday"],
  ["german", "Alles Gute zum Geburtstag"],
  ["spanish", "Feliz Cumpleaños"],
]);

function BirthdayTranslatorStreamlined() {
  const [currentLanguage, setCurrentLanguage] = useState("english");

  const handleChangeLanguage = (newlang) => {
    setCurrentLanguage(newlang);
  };

  return (
    <div className="BirthdayTranslator componentBox">
      <h3>
        {phrases.get(currentLanguage)}! ({currentLanguage})
      </h3>
      <button onClick={() => handleChangeLanguage("english")}>English</button>
      <button onClick={() => handleChangeLanguage("german")}>German</button>
      <button onClick={() => handleChangeLanguage("spanish")}>Spanish</button>
    </div>
  );
}

// It is common to adjust your state values during development
// as you gain experience and grow the complexity of your code.

export default BirthdayTranslatorStreamlined;
