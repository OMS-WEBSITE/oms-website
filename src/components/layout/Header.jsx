import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/ui/SearchBar";

const Header = () => {
  const navItems = [
    { name: "WHY OMS", id: "why-oms" },
    { name: "PRODUCTS AND SERVICES", id: "productsandservice" },
    { name: "SOLUTIONS", id: "solutions" },
    { name: "HOW TO BUY", id: "how-to-buy" },
    { name: "LEARN", id: "learn" },
    { name: "SUPPORT", id: "support" },
    { name: "CLIENTS", id: "clients" },
  ];

  const languages = [
    { code: "EN-IN", label: "India English" },
    { code: "EN-AU", label: "Australia English" },
  ];

  const [activeSection, setActiveSection] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Scroll spy effect
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScrollEvent = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      if (window.scrollY < 100) {
        setActiveSection(null);
        return;
      }

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  const handleScroll = (id) => {
    if (typeof window === "undefined") return;

    if (window.location.pathname === "/") {
      // Already on landing page
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setActiveSection(id);
        setMobileMenuOpen(false);

        // After scroll, reset URL to `/`
        setTimeout(() => {
          window.history.replaceState(null, "", "/");
        }, 800); // delay slightly to allow smooth scroll to finish
      }
    } else {
      // Navigate to landing page and scroll
      window.location.href = `/#${id}`;

      // After navigation completes, reset URL to `/`
      setTimeout(() => {
        window.history.replaceState(null, "", "/");
      }, 1200);
    }
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const selectLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("preferredLanguage", lang);
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  // Detect language dynamically
  useEffect(() => {
    const detectLanguage = async () => {
      // 1️⃣ Check localStorage first
      const savedLang = localStorage.getItem("preferredLanguage");
      if (savedLang) {
        setLanguage(savedLang);
        return;
      }

      try {
        // 2️⃣ GeoIP API
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        let lang = "EN-IN";
        if (data.country_code === "AU") lang = "EN-AU";
        else if (data.country_code === "IN") lang = "EN-IN";
        setLanguage(lang);
      } catch (error) {
        // 3️⃣ Fallback to browser language
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.includes("en-AU")) setLanguage("EN-AU");
        else setLanguage("EN-IN");
      }
    };

    detectLanguage();
  }, []);

  return (
    <header className="sticky top-0 left-0 w-full bg-white backdrop-blur-md border-b border-orange-500 shadow-sm z-50">
      <div className="w-[90%] mx-auto py-4 flex items-center justify-between">
        {" "}
        {/* Logo */}
        <a href="/" className="flex items-center h-8 md:h-10 pl-3">
          <img
            src="/OMS Logo.jpg"
            alt="OMS logo"
            className="h-full w-auto transform scale-110 md:scale-125 transition-transform duration-300 hover:scale-125 md:hover:scale-135"
          />
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-wrap gap-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`relative font-semibold tracking-wide transition-all duration-300 cursor-pointer group ${
                activeSection === item.id
                  ? "text-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              {item.name}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-orange-500 w-full origin-left scale-x-0 transform transition-transform duration-300 group-hover:scale-x-100 ${
                  activeSection === item.id ? "scale-x-100" : ""
                }`}
              />
            </button>
          ))}
        </nav>
        {/* Right side: Search + Mobile Hamburger */}
        <div className="flex items-center space-x-4">
          <div className="relative flex items-center justify-center w-10">
            <SearchBar />
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-full border border-gray-200 hover:bg-orange-50 transition-all duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <FaTimes className="text-orange-500" size={18} />
            ) : (
              <FaBars className="text-orange-500" size={18} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg w-full">
          <nav className="flex flex-col space-y-2 px-4 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`text-gray-700 font-semibold text-left transition-colors duration-300 px-3 py-2 rounded-lg ${
                  activeSection === item.id
                    ? "text-orange-500 bg-orange-50"
                    : "hover:text-orange-500 hover:bg-orange-50"
                }`}
              >
                {item.name}
              </button>
            ))}

            {/* Mobile Try Free / Login / Language */}
            <div className="flex flex-col space-y-2 mt-4">
              <Button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 px-4 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                Try 14 days free
              </Button>
              <Button
                variant="outline"
                className="border border-orange-500 text-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:text-white py-2 px-4 rounded-md shadow-sm hover:shadow-md transition-all duration-300"
              >
                Login
              </Button>
              <div className="relative">
                <button
                  className="flex items-center justify-center gap-2 p-2 rounded-full border border-gray-200 hover:bg-orange-50 transition-all duration-300 w-full"
                  onClick={toggleDropdown}
                >
                  <FaGlobe className="text-orange-500" size={18} />
                  <span className="truncate text-orange-500">{language}</span>
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50">
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
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
