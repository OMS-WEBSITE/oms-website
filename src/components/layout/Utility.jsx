import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FaGlobe } from "react-icons/fa";

const Utility = ({ language, setLanguage }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const selectLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("preferredLanguage", lang); // save preference
    setDropdownOpen(false);
  };

  const languages = [
    { code: "EN-IN", label: "India English" },
    { code: "EN-AU", label: "Australia English" },
    // add more languages as needed
  ];

  // Detect language dynamically on first load
  useEffect(() => {
    // Only detect location if user has not manually selected language
    const savedLang = localStorage.getItem("preferredLanguage");
    if (savedLang) {
      setLanguage(savedLang);
      return;
    }

    const detectLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        let detectedLang = "EN-IN"; // default
        if (data.country_code === "AU") detectedLang = "EN-AU";
        else if (data.country_code === "IN") detectedLang = "EN-IN";
        setLanguage(detectedLang);
      } catch (err) {
        // fallback to browser language
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.includes("en-AU")) setLanguage("EN-AU");
        else setLanguage("EN-IN");
      }
    };

    detectLocation();
  }, [setLanguage]);

  return (
    <div className="hidden md:flex w-full bg-gray-100 border-b border-gray-200 shadow-sm z-40">
      <div className="container mx-auto max-w-7xl h-[50px] flex justify-end items-center space-x-4 px-4">
        {/* Try Free Button */}
        <Button
          className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white py-2 px-4 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
          style={{ height: "36px", minHeight: "36px" }}
        >
          Try 14 days free
        </Button>

        {/* Login Button */}
        <Button
          variant="outline"
          className="border border-orange-500 text-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:text-white py-2 px-4 rounded-md shadow-sm hover:shadow-md transition-all duration-300"
          style={{ height: "36px", minHeight: "36px" }}
        >
          Login
        </Button>

        {/* Language Selector */}
        <div className="relative">
          <button
            className="flex items-center justify-center gap-2 p-2 rounded-full border border-gray-200 hover:bg-orange-50 transition-all duration-300 w-28 z-50 relative"
            style={{ height: "46px", minHeight: "46px" }}
            onClick={toggleDropdown}
          >
            <FaGlobe className="text-orange-500" size={18} />
            <span className="truncate text-orange-500">
              {language || "Detecting..."}
            </span>
          </button>

          {dropdownOpen && (
            <div className="fixed right-20 top-[60px] w-40 bg-white border border-gray-200 rounded-md shadow-lg z-[9999]">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className="block w-full text-left px-4 py-2 hover:bg-orange-50 transition-all duration-200"
                  onClick={() => selectLanguage(lang.code)}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Utility;
