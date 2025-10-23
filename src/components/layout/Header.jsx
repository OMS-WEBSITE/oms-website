import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const navItems = [
    { name: "Products and Services", id: "productsandservice" },
    { name: "Solutions", id: "solutions" },
    { name: "Why OMS", id: "why-oms" },
    { name: "How to buy", id: "how-to-buy" },
    { name: "Learn", id: "learn" },
    { name: "Support", id: "support" },
    { name: "Partners", id: "partners" },
  ];

  const [activeSection, setActiveSection] = useState(null);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  // Scroll spy effect
  useEffect(() => {
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

  return (
    <header className="sticky top-0 left-0 w-full bg-white backdrop-blur-md border-b border-gray-100 shadow-sm z-40">
      <div className="container mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left side: Logo + Navigation */}
          <div className="flex items-center">
            <a href="/" className="flex items-center h-10 mr-24">
              <img
                src="/OMS Logo.jpg"
                alt="OMS logo"
                className="h-full w-auto transform scale-125 transition-transform duration-300 hover:scale-135"
              />
            </a>

            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className={`relative text-gray-700 tracking-wide font-semibold transition-colors duration-300 group ${
                    activeSection === item.id
                      ? "text-orange-500"
                      : "hover:text-orange-500"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-orange-500 w-full origin-left transform transition-transform duration-300 ${
                      activeSection === item.id
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </button>
              ))}
            </nav>
          </div>

          {/* Right side: Search */}
          <div className="flex items-center space-x-4">
            <button
              className="flex items-center gap-2 p-2 rounded-full border border-gray-200 hover:bg-orange-50 transition-all duration-300"
              style={{
                height: "36px",
                minHeight: "36px",
                width: "86px",
                justifyContent: "center",
              }}
            >
              <FaSearch className="text-orange-500" size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
