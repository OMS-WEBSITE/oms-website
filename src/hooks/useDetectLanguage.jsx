import { useEffect, useState } from "react";

const useDetectLanguage = () => {
  const [language, setLanguage] = useState(null);
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    const detectLanguage = async () => {
      if (hasFetched) return; // prevent duplicate API calls
      setHasFetched(true);

      try {
        console.log("🌍 Detecting language...");

        // 2️⃣ Fetch country info from a reliable API
        const res = await fetch("https://api.country.is/");
        const data = await res.json();
        console.log("📡 API Response:", data);

        let detectedLang = "EN-IN"; // default

        if (data.country === "AU") detectedLang = "EN-AU";
        else if (data.country === "IN") detectedLang = "EN-IN";
        else {
          // fallback to browser language
          const browserLang = navigator.language || navigator.userLanguage;
          detectedLang = browserLang.toLowerCase().includes("en-au")
            ? "EN-AU"
            : "EN-IN";
        }

        console.log("✅ Country:", data.country);
        console.log("🌐 Selected Language:", detectedLang);

        setLanguage(detectedLang);
        localStorage.setItem("preferredLanguage", detectedLang);
      } catch (error) {
        console.error(" Error detecting language:", error);

        // Final fallback to browser language if API fails
        const browserLang = navigator.language || navigator.userLanguage;
        const fallbackLang = browserLang.toLowerCase().includes("en-au")
          ? "EN-AU"
          : "EN-IN";

        console.log("🧭 Fallback Language:", fallbackLang);
        setLanguage(fallbackLang);
        localStorage.setItem("preferredLanguage", fallbackLang);
      }
    };

    detectLanguage();
  }, [hasFetched]);

  return language;
};

export default useDetectLanguage;
