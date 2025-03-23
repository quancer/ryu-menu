"use client"; // Клиент талд ажиллана

import { createContext, useState, useContext } from "react";

// Контекст үүсгэх
const LanguageContext = createContext();

// Контекст провайдер үүсгэх
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(true);

    const changeLanguage = ()=> setLanguage(!language);
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Контекст ашиглах хук
export const useLanguage = () => useContext(LanguageContext);
