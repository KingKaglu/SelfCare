// src/components/LanguageContext.jsx (or src/context/LanguageContext.jsx)
import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('geo'); // default: Georgian

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// ✅ This is what you're missing:
export const useLanguage = () => useContext(LanguageContext);
