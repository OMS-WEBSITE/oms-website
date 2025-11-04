import { useState, useEffect } from "react";
import { contentMap } from "../../data/ContentData";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

const ProductsAndService = () => {
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

  const [activeItem, setActiveItem] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);

  const sectionList = activeItem ? contentMap[activeItem]?.sections || [] : [];

  // for search function
  useEffect(() => {
    const handleProductSubSection = (e) => {
      const { label, parent } = e.detail; // include parent (main category)
      if (!label) return;

      // Set active tab dynamically instead of hardcoding "Business Performance"
      if (parent) {
        setActiveItem(parent);
      } else {
        setActiveItem(label);
      }

      // Wait for expand animation, then scroll to subsection
      setTimeout(() => {
        const sectionId = label.toLowerCase().replace(/\s+/g, "");
        const target = document.getElementById(sectionId);
        console.log(target);
        if (target) {
          const yOffset = -80; // Adjust for navbar height
          const y =
            target.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 500);
    };

    window.addEventListener(
      "activateProductSubSection",
      handleProductSubSection
    );
    return () =>
      window.removeEventListener(
        "activateProductSubSection",
        handleProductSubSection
      );
  }, []);

  useEffect(() => {
    const handleActivateTab = (event) => {
      const { id } = event.detail;
      console.log("Activated from video:", id);

      // Step 1: Try matching top-level category
      let matchedLabel = Object.keys(contentMap).find(
        (key) => key.toLowerCase().replace(/\s+/g, "") === id
      );

      console.log(" matched ", matchedLabel);

      // Step 2: If not found, search inside sub-sections
      if (!matchedLabel) {
        matchedLabel = Object.keys(contentMap).find((key) =>
          contentMap[key].sections.some(
            (section) =>
              section.heading.toLowerCase().replace(/\s+/g, "") === id
          )
        );
      }

      if (matchedLabel) {
        setActiveItem(matchedLabel);
        console.log("matcheddddddddddddddddddddddddddddddddddddddddd");
        // Step 3: Wait for section to expand, then scroll
        setTimeout(() => {
          const sectionEl = document.getElementById(id);
          console.log("this is imp", sectionEl);
          if (sectionEl) {
            const navbar = document.querySelector("nav");
            const navbarHeight = navbar ? navbar.offsetHeight : 0;

            const yOffset =
              sectionEl.getBoundingClientRect().top +
              window.scrollY -
              navbarHeight -
              60;

            window.scrollTo({ top: yOffset, behavior: "smooth" });
          } else {
            console.warn(`⚠️ No element found with id="${id}"`);
          }
        }, 500);
      } else {
        console.warn(`⚠️ No heading found for label="${id}"`);
      }
    };

    window.addEventListener("activateTab", handleActivateTab);
    return () => window.removeEventListener("activateTab", handleActivateTab);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      const parts = hash.split("/");
      const sectionId = parts[1];

      if (sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });

          // Optionally expand the correct section
          console.log(section)
          setActiveItem("Business Performance");
          setExpandedSection("0-0"); // optional: based on your map index
        }
      }
    };

    handleHashChange(); // run once on page load
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // 🧭 Handle navigation from other pages
  useEffect(() => {
    const pendingSubSection = sessionStorage.getItem("pendingSubSection");
    if (pendingSubSection) {
      sessionStorage.removeItem("pendingSubSection");

      // Scroll to the main section first
      const mainSection = document.getElementById("productsandservice");
      if (mainSection) {
        const yOffset = 80; // Adjust for navbar height
        const y =
          mainSection.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        console.log("PAS");
      }

      // Trigger after short delay so React content is ready
      setTimeout(() => {
        const event = new CustomEvent("activateProductSubSection", {
          detail: { label: pendingSubSection },
        });
        window.dispatchEvent(event);
      }, 700);
    }
  }, []);

  // useEffect(() => {
  //   const pendingSubSection = sessionStorage.getItem("pendingSubSection");
  //   if (!pendingSubSection) return;

  //   sessionStorage.removeItem("pendingSubSection");

  //   const scrollToMain = () => {
  //     const mainSection = document.getElementById("productsandservice");
  //     if (mainSection) {
  //       const yOffset = -80;
  //       const y =
  //         mainSection.getBoundingClientRect().top +
  //         window.pageYOffset +
  //         yOffset;
  //       window.scrollTo({ top: y, behavior: "smooth" });
  //       console.log("🟢 Products & Services section found, scrolling...");
  //       return true;
  //     }
  //     return false;
  //   };

  //   // Wait for the section to appear
  //   if (!scrollToMain()) {
  //     const observer = new MutationObserver(() => {
  //       if (scrollToMain()) observer.disconnect();
  //     });
  //     observer.observe(document.body, { childList: true, subtree: true });
  //   }

  //   // Fire the custom event slightly after scroll
  //   setTimeout(() => {
  //     const event = new CustomEvent("activateProductSubSection", {
  //       detail: { label: pendingSubSection },
  //     });
  //     window.dispatchEvent(event);
  //     console.log("🟢 Fired activateProductSubSection for:", pendingSubSection);
  //   }, 1000);
  // }, []);

  return (
    <section id="productsandservice" className="min-h-screen bg-gray-50 pt-5">
      {/* Header */}
      <div className="pt-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4 sm:mb-6">
          <span className="border-b-4 border-orange-500 pb-1">
            Products & Services
          </span>
        </h2>
        <p className="text-center max-w-2xl mx-auto text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base px-2">
          Explore our Products & Services built to streamline laboratory
          operations and maintain compliance with ISO/IEC standards.
        </p>
      </div>
      {/* mobile view */}
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
                return <p key={idx}>{block.text} className</p>;
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

      {/* Desktop view */}
      <main className="w-[90%] mx-auto py-4 px-2">
        <div className="hidden md:block">
          {navItems.map((mainLabel, mainIdx) => {
            const mainContent = contentMap[mainLabel];
            if (!mainContent) return null;

            return (
              <div
                key={mainIdx}
                id={mainLabel.toLowerCase().replace(/\s+/g, "")}
                className="mb-6 border border-gray-200 bg-white rounded-lg shadow-md overflow-hidden"
              >
                {/* === Main Tab === */}
                <button
                  onClick={() =>
                    setActiveItem((prev) =>
                      prev === mainLabel ? null : mainLabel
                    )
                  }
                  className="w-full text-left text-xl font-semibold text-orange-500 px-5 py-4 flex justify-between items-center hover:bg-orange-50 transition"
                >
                  <span>
                    {mainLabel} - {mainContent.title}
                  </span>

                  <FiChevronDown
                    className={`text-orange-500 text-2xl transition-transform duration-300 ${
                      activeItem === mainLabel ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* === Submini Dropdown === */}
                {activeItem === mainLabel && (
                  <div className="bg-orange-50 border-t border-orange-200">
                    {mainContent.sections.map((section, secIdx) => (
                      <div
                        key={secIdx}
                        id={section.heading.toLowerCase().replace(/\s+/g, "")}
                        className="border-b border-gray-200"
                      >
                        {/* Submini Tab */}

                        <button
                          onClick={() => {
                            const isExpanded =
                              expandedSection === `${mainIdx}-${secIdx}`;
                            const newSection = isExpanded
                              ? null
                              : `${mainIdx}-${secIdx}`;
                            setExpandedSection(newSection);

                            // Only scroll if expanding (not collapsing)
                            if (!isExpanded) {
                              setTimeout(() => {
                                // Match the same id format as in your div below
                                const id = section.heading
                                  .toLowerCase()
                                  .replace(/\s+/g, "");
                                const sectionEl = document.getElementById(id);

                                if (sectionEl) {
                                  const navbar = document.querySelector("nav");
                                  const navbarHeight = navbar
                                    ? navbar.offsetHeight
                                    : 0;

                                  const yOffset =
                                    sectionEl.getBoundingClientRect().top +
                                    window.scrollY -
                                    navbarHeight -
                                    60; // fine-tune this if needed

                                  window.scrollTo({
                                    top: yOffset,
                                    behavior: "smooth",
                                  });
                                } else {
                                  console.warn(
                                    `⚠️ No element found with id="${id}"`
                                  );
                                }
                              }, 200); // small delay for smooth expansion animation
                            }
                          }}
                          className="w-full text-left text-lg font-medium text-gray-700 px-6 py-3 flex justify-between items-center hover:bg-orange-100 transition"
                        >
                          <div className="flex items-center space-x-3">
                            <FiChevronRight
                              className={`text-orange-400 text-xl transition-transform duration-300 ${
                                expandedSection === `${mainIdx}-${secIdx}`
                                  ? "rotate-90"
                                  : ""
                              }`}
                            />
                            <span className="animate-slideFadeIn">
                              {section.heading}
                            </span>
                          </div>
                        </button>

                        {/* Submini Content */}
                        {expandedSection === `${mainIdx}-${secIdx}` && (
                          <div className="bg-white px-8 py-4 text-gray-700 space-y-3 leading-relaxed">
                            {section.content.map((block, i) => {
                              if (block.type === "subheading") {
                                return (
                                  <h4
                                    key={i}
                                    className="text-lg font-semibold mt-6 mb-2 text-white"
                                  >
                                    {block.text}
                                  </h4>
                                );
                              }

                              if (block.type === "paragraph")
                                return (
                                  <p key={i} className="text-justify ml-6">
                                    {block.text}
                                  </p>
                                );

                              // if (item.type === "heading") {
                              //   return (
                              //     <h4
                              //       key={idx}
                              //       className="text-lg font-semibold mt-4 text-white"
                              //     >
                              //       {item.text}
                              //     </h4>
                              //   );
                              // }

                              if (block.type === "list")
                                return (
                                  <ul key={i} className="list-disc list-inside">
                                    {block.items.map((li, j) => (
                                      <li key={j}>{li}</li>
                                    ))}
                                  </ul>
                                );

                              if (block.type === "images")
                                return (
                                  <div
                                    key={i}
                                    className="my-4 flex flex-col items-center gap-4"
                                  >
                                    {block.items.map((img, j) => (
                                      <img
                                        key={j}
                                        src={img}
                                        alt={`Image ${j + 1}`}
                                        className="w-full max-w-3xl rounded-md shadow-md border border-gray-200"
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
                )}
              </div>
            );
          })}
        </div>
      </main>
    </section>
  );
};

export default ProductsAndService;
