import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/ui/SearchBar";
import { useLanguage } from "@/context/LanguageContext"; // use context

const Header = () => {
  const navItems = [
    { name: "PRODUCTS AND SERVICES", id: "productsandservice" },
    { name: "SOLUTIONS", id: "solutions" },
    { name: "WHY OMS", id: "why-oms" },
    { name: "HOW TO BUY", id: "how-to-buy" },
    { name: "LEARN", id: "learn" },
    { name: "SUPPORT", id: "support" },
    { name: "CLIENTS", id: "clients" },
  ];

  const languages = [
    { code: "EN-IN", label: "India English" },
    { code: "EN-AU", label: "Australia English" },
    { code: "EN-GB", label: "Global" },
  ];

  const [activeSection, setActiveSection] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, updateLanguage } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // const menuRef = useRef(null);
  // const dropdownRef = useRef(null);

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

    const section = document.getElementById(id);
    if (section) {
      // Section exists on current page: keep your original logic

      const navbar = document.querySelector("header"); // or your sticky header
      const navbarHeight = navbar ? navbar.offsetHeight : 0;

      // Scroll position minus navbar height

      if (window.innerWidth >= 768) {
        // Desktop / Tablet: scroll to top minus navbar
        const yOffset = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: yOffset, behavior: "smooth" });
      } else {
        // Mobile: scrollIntoView but leave some space for sticky header

        const yOffset =
          section.getBoundingClientRect().top +
          window.scrollY -
          navbarHeight +
          40;
        window.scrollTo({ top: yOffset, behavior: "smooth" });
      }

      setActiveSection(id);
      setMobileMenuOpen(false);

      // Reset URL
      setTimeout(() => {
        window.history.replaceState(null, "", "/");
      }, 800);
    } else {
      // window.location.href = `/#${id}`;
      window.location.href = `/#${id}`;
    }
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // updates context + localStorage automatically
  const selectLanguage = (lang) => {
    updateLanguage(lang);
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    // If landing on page with #hash (e.g. #solutions)
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      const section = document.getElementById(hash);

      // Wait a bit for React DOM to render
      setTimeout(() => {
        const target = document.getElementById(hash);
        if (target) {
          const navbar = document.querySelector("header");
          const navbarHeight = navbar ? navbar.offsetHeight : 0;
          const yOffset =
            target.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight +
            40;

          window.scrollTo({ top: yOffset, behavior: "smooth" });

          // Remove hash from URL after 1.5s
          setTimeout(() => {
            window.history.replaceState(null, "", "/");
          }, 1500);
        }
      }, 300); // small delay to ensure DOM is ready
    }
  }, []);

  return (
    <header className="sticky top-0 left-0 w-full bg-white backdrop-blur-md border-b border-orange-500 shadow-sm z-50">
      <div className="w-[90%] mx-auto py-4 flex items-center justify-between">
        {" "}
        {/* Logo */}
        <a
          href="/"
          className="flex items-center h-8 md:h-10 pl-3 md-pr-5 sm-pr-4"
        >
          <img
            src="/OMS Logo.jpg"
            alt="OMS logo"
            className="h-full w-auto transform scale-110 md:scale-125 transition-transform duration-300 hover:scale-125 md:hover:scale-135"
            loading="lazy"
          />
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-wrap pl-3 gap-x-6 md:gap-x-5 sm:gap-x-4 gap-x-3 text-base md:text-[16px] sm:text-[15px] text-sm transition-all duration-300">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`relative font-semibold sm:font-medium tracking-wide transition-all duration-300 cursor-pointer group ${
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
          <div className="relative flex items-center justify-center w-10" 
          aria-label="Search"
          >
            <SearchBar />
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-full border border-gray-200 hover:bg-orange-50 transition-all duration-300"
            aria-label="Open menu"
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
                className={`text-gray-700 font-semibold text-sm text-left transition-colors duration-300 px-3 py-2 rounded-lg ${
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
              <Button className=" text-sm bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 px-4 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                Try 14 days free
              </Button>

              <div className="relative">
                <button
                  className="flex items-center justify-center gap-2 p-2 rounded-full border border-gray-200 hover:bg-orange-50 transition-all duration-300 w-full"
                  onClick={toggleDropdown}
                >
                  <FaGlobe className="text-orange-500" size={18} />
                  <span className="truncate text-orange-500 text-sm">
                    {" "}
                    {language || "Detecting..."}
                  </span>
                </button>
                {dropdownOpen && (
                  <div className="absolute text-sm right-0 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        aria-label="Select language"
                        className="block w-full text-sm text-left px-4 py-2 hover:bg-orange-50 transition-all duration-200"
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
