import React, { useState, useEffect } from "react";

const ResponsiveTabs = ({ navItems, contentMap }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMainTabClick = (label) => {
    if (isMobile) {
      setActiveItem((prev) => (prev === label ? null : label));
      setExpandedSection(null);
    } else {
      setActiveItem(label);
      setExpandedSection(null);
    }
  };

  const handleMiniTabClick = (idx) => {
    setExpandedSection((prev) => (prev === idx ? null : idx));
  };

  const sectionList = activeItem ? contentMap[activeItem].sections : [];

  return (
    <div className="container mx-auto max-w-7xl px-4 py-4">
      {/* Main Tabs */}
      <nav className="flex flex-wrap space-x-2 mb-2">
        {navItems.map((label) => (
          <div key={label} className="w-full sm:w-auto">
            <button
              onClick={() => handleMainTabClick(label)}
              className={`w-full px-3 py-2 font-semibold rounded-lg transition-all duration-300 ease-in-out text-left ${
                activeItem === label
                  ? "bg-orange-100 text-orange-600 border-b-2 border-orange-500 shadow-sm"
                  : "text-gray-700 hover:text-orange-500 hover:bg-orange-50 hover:shadow-md"
              }`}
            >
              {label}
            </button>

            {/* Mobile mini tabs */}
            {isMobile && activeItem === label && (
              <div className="pl-4 mt-2 space-y-2">
                {contentMap[label].sections.map((section, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleMiniTabClick(idx)}
                    className={`block w-full text-sm px-3 py-2 rounded-lg transition-all duration-300 ease-in-out ${
                      expandedSection === idx
                        ? "bg-orange-200 text-orange-800 border-b-2 border-orange-500"
                        : "text-gray-600 hover:text-orange-500 hover:bg-orange-50"
                    }`}
                  >
                    {section.heading}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Desktop mini tabs */}
      {!isMobile && sectionList.length > 0 && (
        <nav className="flex flex-wrap mt-2 space-x-2 z-20 relative">
          {sectionList.map((section, idx) => (
            <button
              key={idx}
              onClick={() => handleMiniTabClick(idx)}
              className={`px-3 py-1.5 m-1 text-sm font-medium rounded-lg transition-all duration-300 ease-in-out ${
                expandedSection === idx
                  ? "bg-orange-200 text-orange-800 shadow-md border-b-2 border-orange-500 font-semibold"
                  : "bg-transparent text-gray-600 hover:text-orange-500 hover:bg-orange-50 hover:shadow-md font-normal"
              }`}
              style={{ marginLeft: "20px", zIndex: 999 }}
            >
              {section.heading}
            </button>
          ))}
        </nav>
      )}
    </div>
  );
};

export default ResponsiveTabs;
