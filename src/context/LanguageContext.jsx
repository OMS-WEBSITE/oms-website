// import React, { createContext, useContext, useState, useEffect } from "react";
// import useDetectLanguage from "@/hooks/useDetectLanguage";

// // const LanguageContext = createContext();
// const LanguageContext = createContext({
//   language: "EN-IN", // default fallback language
//   updateLanguage: () => {}, // noop function to avoid errors
// });

// export const LanguageProvider = ({ children }) => {
//   const detectedLanguage = useDetectLanguage();
//   const [language, setLanguage] = useState("Detecting...");

//   // Set detected or stored language
//   useEffect(() => {
//     const storedLang = localStorage.getItem("preferredLanguage");
//     if (storedLang) {
//       setLanguage(storedLang);
//     } else if (detectedLanguage) {
//       setLanguage(detectedLanguage);
//     }
//   }, [detectedLanguage]);

//   // Manual update from components (like Utility, Header)
//   const updateLanguage = (lang) => {
//     setLanguage(lang);
//     localStorage.setItem("preferredLanguage", lang);
//   };

//   // Listen for manual language changes from Astro
//   useEffect(() => {
//     const handleLanguageChange = (event) => {
//       const newLang = event.detail?.lang;
//       if (newLang) {
//         setLanguage(newLang);
//         localStorage.setItem("preferredLanguage", newLang);
//       }
//     };

//     window.addEventListener("languageChanged", handleLanguageChange);
//     return () =>
//       window.removeEventListener("languageChanged", handleLanguageChange);
//   }, []);

//   return (
//     <LanguageContext.Provider value={{ language, updateLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// // ✅ Easy access hook
// export const useLanguage = () => useContext(LanguageContext);

// src/context/LanguageContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import useDetectLanguage from "@/hooks/useDetectLanguage";

const LanguageContext = createContext({
  language: "EN-IN",
  updateLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
  const detectedLanguage = useDetectLanguage();
  const [language, setLanguage] = useState("Detecting...");

  // ✅ Initialize from localStorage or detection
  useEffect(() => {
    const storedLang = localStorage.getItem("preferredLanguage");
    if (storedLang) {
      setLanguage(storedLang);
    } else if (detectedLanguage) {
      setLanguage(detectedLanguage);
    }
  }, [detectedLanguage]);

  // ✅ Manual update (when user selects from dropdown)
  const updateLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("preferredLanguage", lang);

    // Broadcast event so other components/pages can sync
    window.dispatchEvent(
      new CustomEvent("languageChanged", { detail: { lang } })
    );
  };

  // ✅ Listen for global manual changes (from Astro or another tab)
  useEffect(() => {
    const handleLanguageChange = (event) => {
      const newLang =
        event.detail?.lang || localStorage.getItem("preferredLanguage");
      if (newLang && newLang !== language) {
        console.log("🌍 Language updated globally:", newLang);
        setLanguage(newLang);
      }
    };

    window.addEventListener("languageChanged", handleLanguageChange);
    window.addEventListener("storage", handleLanguageChange);

    return () => {
      window.removeEventListener("languageChanged", handleLanguageChange);
      window.removeEventListener("storage", handleLanguageChange);
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, updateLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
