import React, { createContext, useContext, useState, useEffect } from "react";
import useDetectLanguage from "@/hooks/useDetectLanguage";

// const LanguageContext = createContext();
const LanguageContext = createContext({
  language: "EN-IN",       // default fallback language
  updateLanguage: () => {}, // noop function to avoid errors
});

export const LanguageProvider = ({ children }) => {
  const detectedLanguage = useDetectLanguage();
  const [language, setLanguage] = useState("Detecting...");

  // Set detected or stored language
  useEffect(() => {
    const storedLang = localStorage.getItem("preferredLanguage");
    if (storedLang) {
      setLanguage(storedLang);
    } else if (detectedLanguage) {
      setLanguage(detectedLanguage);
    }
  }, [detectedLanguage]);

  // Manual update from components (like Utility, Header)
  const updateLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("preferredLanguage", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, updateLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// ✅ Easy access hook
export const useLanguage = () => useContext(LanguageContext);
