import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { FaGlobe } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

const Utility = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // ✅ Access global language state
  const { language, updateLanguage } = useLanguage();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const selectLanguage = (lang) => {
    updateLanguage(lang); // updates context + localStorage automatically
  };

  const languages = [
    { code: "EN-IN", label: "India English" },
    { code: "EN-AU", label: "Australia English" },
    { code: "EN-GB", label: "Global" },
  ];

  // Close dropdown when clicking outside or scrolling
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    const handleScroll = () => setDropdownOpen(false);

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hidden md:flex w-full bg-gray-100 border-b border-gray-200 shadow-sm z-40">
      <div className="w-[90%] mx-auto h-[50px] flex justify-end items-center space-x-4 px-4">
        {/* Try Free Button */}
        <Button
          onClick={() =>
            window.dispatchEvent(new CustomEvent("openQuickConnect"))
          }
          className="hover:cursor-pointer bg-gradient-to-r from-[#ea885e] to-[#fe781f] hover:from-orange-500 hover:to-orange-600 text-white py-2 px-4 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
        >
          Request Demo
        </Button>
        {/* Login Button */}
        {/* <Button
          variant="outline"
          className="hover:cursor-pointer border border-orange-500 text-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white py-2 px-4 rounded-md shadow-sm hover:shadow-md transition-all duration-300"
        >
          Login
        </Button> */}

        {/* Language Selector */}
        <div className="relative" ref={dropdownRef}>
          <button
            className="hover:cursor-pointer flex items-center justify-center gap-2 p-2 rounded-full border border-gray-200 hover:bg-orange-50 transition-all duration-300 w-28 z-50 relative"
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
