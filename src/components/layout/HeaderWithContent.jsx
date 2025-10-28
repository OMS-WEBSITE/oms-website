import React, { useState, useEffect } from "react";
import { contentMap } from "./ContentData";
import { FiChevronDown } from "react-icons/fi";

const HeaderWithContent = () => {
  const navItems = [
    "Business Performance",
    "Accounting",
    "Personnel",
    "Supplier Management",
    "CRM",
    "System Configuration",
    "QMS",
    "Assets",
    "Specification",
    "Test Data Management",
  ];

  const [activeItem, setActiveItem] = useState("Business Performance");
  const [expandedSection, setExpandedSection] = useState(null);
  const [highlightAllSections, setHighlightAllSections] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [shouldScrollToSection, setShouldScrollToSection] = useState(null);

  const sectionList = activeItem ? contentMap[activeItem]?.sections || [] : [];

  useEffect(() => {
    setIsClient(true);
  }, []);

  // ✅ Handle tab activation safely (runs only on client)
  useEffect(() => {
    if (!isClient) return;

    const handleActivateTab = (e) => {
      setActiveItem(e.detail);
      setExpandedSection(null);
      setHighlightAllSections(true);
      scrollToTop();
    };

    window.addEventListener("activateTab", handleActivateTab);
    return () => window.removeEventListener("activateTab", handleActivateTab);
  }, [isClient]);

  useEffect(() => {
    if (shouldScrollToSection !== null && isClient) {
      const sectionEl = document.getElementById(
        `section-${shouldScrollToSection}`
      );
      if (sectionEl) {
        // Dynamically calculate total header height (sticky header)
        const totalHeaderHeight =
          document.querySelector("#header-content-section > header")
            ?.offsetHeight || 0;

        const rect = sectionEl.getBoundingClientRect();
        const scrollTo = rect.top + window.pageYOffset - totalHeaderHeight; // Small buffer for padding

        window.scrollTo({
          top: scrollTo,
          behavior: "smooth",
        });
      }
      setShouldScrollToSection(null); // Reset after scrolling
    }
  }, [shouldScrollToSection, isClient]);

  const scrollToTop = () => {
    if (!isClient) return;

    const sectionEl = document.getElementById("header-content-section");
    if (!sectionEl) return;

    const topPosition = sectionEl.offsetTop;

    window.scrollTo({
      top: topPosition,
      behavior: "smooth",
    });
  };

  const handleMainTabClick = (label) => {
    setActiveItem(label);
    setExpandedSection(null);
    setHighlightAllSections(true);
    setShouldScrollToTop(true); // Trigger deferred scroll
  };

  const handleMiniTabClick = (index) => {
    setExpandedSection(index);
    setHighlightAllSections(true);
    setShouldScrollToSection(index); // Trigger scroll after state update
  };

  return (
    <div id="header-content-section" className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="sticky top-0 left-0 w-full bg-white border-t-2 border-b border-orange-500 shadow z-50">
        <div className="w-[90%] mx-auto py-4 px-2">
          {" "}
          {/* Desktop View */}
          <div className="hidden md:flex flex-col">
            <nav className="flex flex-wrap gap-x-2 gap-y-2">
              {navItems.map((label) => (
                <button
                  key={label}
                  onClick={() => handleMainTabClick(label)}
                  className={`px-1.5 py-2 text-center font-semibold rounded-lg transition-all duration-300 ease-in-out border-l-4 cursor-pointer ${
                    activeItem === label
                      ? "bg-orange-100 text-orange-600 border-orange-500 shadow-sm"
                      : "border-transparent text-gray-700 hover:text-orange-500 hover:bg-orange-50 hover:shadow-md"
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>

            {sectionList.length > 0 && (
              <div className="relative mt-2 z-20">
                <div className="absolute left-0 w-full h-[2px] bg-orange-400 rounded-full top-[-4px]" />
                <nav className="flex flex-wrap gap-x-3 gap-y-2 bg-orange-50 p-2 rounded-lg shadow-sm">
                  <p className="text-sm text-orange-600 font-semibold w-full mb-1">
                    <span className="text-orange-600 text-lg font-semibold">
                      {activeItem}
                    </span>
                  </p>
                  {sectionList.map((section, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleMiniTabClick(idx)}
                      className={`px-2 py-1 text-base font-medium rounded-lg transition-colors duration-200 ease-in-out border-l-4 cursor-pointer
            ${
              expandedSection === idx
                ? "bg-orange-200 text-orange-800 border-orange-500 font-semibold"
                : "bg-transparent text-gray-700 hover:text-orange-600 hover:bg-orange-100 border-transparent"
            }`}
                      style={{
                        minWidth: "fit-content",
                        boxSizing: "border-box",
                      }}
                    >
                      {section.heading}
                    </button>
                  ))}
                </nav>
              </div>
            )}
          </div>
          {/* Mobile View */}
          <div className="md:hidden relative overflow-hidden mt-2 h-[calc(100vh-10px)]">
            {/* Step 1: Main Items */}
            <div
              className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                activeItem ? "-translate-x-full" : "translate-x-0"
              }`}
            >
              {navItems.map((main, i) => (
                <button
                  key={i}
                  onClick={() => setActiveItem(main)}
                  className="w-full text-left px-4 py-3 mb-2 text-base rounded-lg bg-orange-50 hover:bg-orange-100 text-orange-700 font-medium"
                >
                  {main}
                </button>
              ))}
            </div>

            {/* Step 2: Mini Items */}
            <div
              className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                activeItem
                  ? expandedSection === null
                    ? "translate-x-0"
                    : "-translate-x-full"
                  : "translate-x-full"
              } bg-white p-2 rounded-md shadow-lg`}
            >
              <button
                onClick={() => setActiveItem(null)}
                className="mb-4 text-orange-600 font-medium"
              >
                ← Back
              </button>
              {sectionList.map((mini, idx) => (
                <button
                  key={idx}
                  onClick={() => setExpandedSection(idx)}
                  className="w-full text-left px-2 py-3 mb-3 text-base rounded-lg bg-orange-50 hover:bg-orange-100 text-orange-700 font-medium"
                >
                  {mini.heading}
                </button>
              ))}
            </div>

            {/* Step 3: Mini Item Content */}
            <div
              className={`absolute inset-0 transition-transform duration-500 ease-in-out overflow-auto bg-white p-4 rounded-md shadow-lg ${
                expandedSection !== null ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <button
                onClick={() => setExpandedSection(null)}
                className="mb-4 text-orange-600 font-medium"
              >
                ← Back
              </button>

              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                {sectionList[expandedSection]?.heading}
              </h2>

              <div className="text-gray-700 space-y-3 leading-relaxed">
                {sectionList[expandedSection]?.content.map((block, idx) => {
                  if (block.type === "paragraph")
                    return <p key={idx}>{block.text}</p>;
                  if (block.type === "list")
                    return (
                      <ul key={idx} className="list-disc list-inside ml-4">
                        {block.items.map((li, i) => (
                          <li key={i}>{li}</li>
                        ))}
                      </ul>
                    );
                  if (block.type === "images")
                    return (
                      <div
                        key={idx}
                        className="my-4 flex flex-col items-center gap-4"
                      >
                        {block.items.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt={`Image ${i + 1}`}
                            className="w-full rounded-md shadow-md border border-gray-200"
                          />
                        ))}
                      </div>
                    );
                  return null;
                })}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content (Desktop) */}
      {/* <main className="container mx-auto max-w-7xl px-4 py-8"> */}
      <main className="w-[90%] mx-auto py-4 px-2">
        <div className="hidden md:block">
          {activeItem && sectionList.length > 0 ? (
            <div className="p-6 bg-white rounded-md shadow-md border border-gray-200">
              <h1 className="text-3xl font-bold text-orange-600 mb-8">
                {contentMap[activeItem].title}
              </h1>

              {sectionList.map((section, index) => (
                <div
                  key={index}
                  id={`section-${index}`}
                  className="mb-6 border-b border-gray-200 pb-4"
                >
                  <button
                    onClick={() =>
                      setExpandedSection((prev) =>
                        prev === index ? null : index
                      )
                    }
                    className="w-full text-left text-lg font-semibold text-gray-800 mb-2 flex justify-between items-center focus:outline-none cursor-pointer"
                  >
                    {section.heading}
                    <span
                      className={`text-orange-500 text-xl transition-transform duration-300 ${
                        expandedSection === index ? "rotate-180" : ""
                      }`}
                    >
                      <FiChevronDown />
                    </span>
                  </button>

                  {expandedSection === index && (
                    <div className="mt-3 text-gray-700 pl-4 space-y-3 leading-relaxed">
                      {section.content.map((block, idx) => {
                        if (block.type === "paragraph")
                          return (
                            <p key={idx} className="text-justify">
                              {block.text}
                            </p>
                          );
                        if (block.type === "list")
                          return (
                            <ul
                              key={idx}
                              className="list-disc list-inside space-y-1 ml-4"
                            >
                              {block.items.map((li, i) => (
                                <li key={i}>{li}</li>
                              ))}
                            </ul>
                          );
                        if (block.type === "images")
                          return (
                            <div
                              key={idx}
                              className="my-4 flex flex-col items-center gap-4"
                            >
                              {block.items.map((img, i) => (
                                <img
                                  key={i}
                                  src={img}
                                  alt={`Image ${i + 1}`}
                                  className="w-full max-w-4xl rounded-md shadow-md border border-gray-200"
                                />
                              ))}
                            </div>
                          );
                        return null;
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center">
              Select a section to see content.
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default HeaderWithContent;
