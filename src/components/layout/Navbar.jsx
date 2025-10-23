// import React, { useState } from "react";
// import { contentMap } from "./ContentData";

// const HeaderWithContent = () => {
//   const navItems = [
//     "Business Performance",
//     "Accounting",
//     "Personnel",
//     "Supplier Management",
//     "CRM",
//     "System Configuration",
//     "QMS",
//     "Assets",
//     "Specification",
//     "Test Data Management",
//   ];

//   const [activeItem, setActiveItem] = useState(navItems[0]);
//   const [expandedSections, setExpandedSections] = useState([]); // Track expanded sections

//   const toggleSection = (index) => {
//     setExpandedSections(
//       (prev) =>
//         prev.includes(index)
//           ? prev.filter((i) => i !== index) // Collapse
//           : [...prev, index] // Expand
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navbar */}
//       <header className="sticky top-0 left-0 w-full bg-white border-b border-gray-200 shadow z-50">
//         <div className="container mx-auto max-w-7xl px-4 py-4 flex flex-wrap items-center">
//           <nav className="flex flex-wrap space-x-4">
//             {navItems.map((label) => (
//               <button
//                 key={label}
//                 onClick={() => {
//                   setActiveItem(label);
//                   setExpandedSections([]); // Reset expanded sections when changing tab
//                 }}
//                 className={`px-4 py-2 font-semibold rounded-md transition-all duration-300 ${
//                   activeItem === label
//                     ? "bg-orange-100 text-orange-600 border-b-2 border-orange-500"
//                     : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
//                 }`}
//               >
//                 {label}
//               </button>
//             ))}
//           </nav>
//         </div>
//       </header>

//       {/* Content Section */}
//       <main className="container mx-auto max-w-7xl px-4 py-8">
//         {activeItem && contentMap[activeItem] ? (
//           <div className="p-6 bg-white rounded-md shadow-md border border-gray-200">
//             <h1 className="text-3xl font-bold text-orange-600 mb-8">
//               {contentMap[activeItem].title}
//             </h1>

//             {contentMap[activeItem].sections.map((section, index) => (
//               <div key={index} className="mb-6 border-b border-gray-200 pb-4">
//                 {/* Section Heading */}
//                 <button
//                   onClick={() => toggleSection(index)}
//                   className="w-full text-left py-3 font-semibold text-gray-800 hover:text-orange-500 flex justify-between items-center"
//                 >
//                   {section.heading}
//                   <span className="ml-2">
//                     {expandedSections.includes(index) ? "▲" : "▼"}
//                   </span>
//                 </button>

//                 {/* Collapsible Section Content */}
//                 {expandedSections.includes(index) && (
//                   <div className="mt-3 text-gray-700 pl-4 space-y-3 leading-relaxed">
//                     {section.content.map((block, idx) => {
//                       // Render by type
//                       if (block.type === "paragraph") {
//                         return (
//                           <p key={idx} className="text-justify">
//                             {block.text}
//                           </p>
//                         );
//                       }

//                       if (block.type === "list") {
//                         return (
//                           <ul
//                             key={idx}
//                             className="list-disc list-inside space-y-1 ml-4"
//                           >
//                             {block.items.map((li, i) => (
//                               <li key={i}>{li}</li>
//                             ))}
//                           </ul>
//                         );
//                       }

//                       if (block.type === "images") {
//                         return (
//                           <div
//                             key={idx}
//                             className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4"
//                           >
//                             {block.items.map((img, i) => (
//                               <img
//                                 key={i}
//                                 src={img}
//                                 alt={`Image ${i + 1}`}
//                                 className="rounded-md shadow-md border border-gray-200"
//                               />
//                             ))}
//                           </div>
//                         );
//                       }

//                       return null;
//                     })}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-gray-500">Select a section to see content.</p>
//         )}
//       </main>
//     </div>
//   );
// };

// export default HeaderWithContent;

import React, { useState } from "react";
import { contentMap } from "./ContentData";

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

  const [activeItem, setActiveItem] = useState(navItems[0]);
  const [expandedSection, setExpandedSection] = useState(null); // single open section

  const toggleSection = (index) => {
    setExpandedSection((prev) => (prev === index ? null : index)); // toggle one at a time
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <header className="sticky top-0 left-0 w-full bg-white border-b border-gray-200 shadow z-50">
        <div className="container mx-auto max-w-7xl px-4 py-4 flex flex-wrap items-center">
          <nav className="flex flex-wrap space-x-1">
            {navItems.map((label) => (
              <button
                key={label}
                onClick={() => {
                  setActiveItem(label);
                  setExpandedSection(null); // close all sections when changing tab
                }}
                className={`px-2 py-2 font-semibold rounded-md transition-all duration-300 ${
                  activeItem === label
                    ? "bg-orange-100 text-orange-600 border-b-2 border-orange-500"
                    : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Content Section */}
      <main className="container mx-auto max-w-7xl px-4 py-8">
        {activeItem && contentMap[activeItem] ? (
          <div className="p-6 bg-white rounded-md shadow-md border border-gray-200">
            <h1 className="text-3xl font-bold text-orange-600 mb-8">
              {contentMap[activeItem].title}
            </h1>

            {contentMap[activeItem].sections.map((section, index) => (
              <div key={index} className="mb-6 border-b border-gray-200 pb-4">
                {/* Section Heading */}
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full text-left py-3 font-semibold text-gray-800 hover:text-orange-500 flex justify-between items-center"
                >
                  {section.heading}
                  <span className="ml-2">
                    {expandedSection === index ? "▲" : "▼"}
                  </span>
                </button>

                {/* Collapsible Section Content */}
                {expandedSection === index && (
                  <div className="mt-3 text-gray-700 pl-4 space-y-3 leading-relaxed">
                    {section.content.map((block, idx) => {
                      if (block.type === "paragraph") {
                        return (
                          <p key={idx} className="text-justify">
                            {block.text}
                          </p>
                        );
                      }
                      if (block.type === "list") {
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
                      }
                      if (block.type === "images") {
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
                      }
                      return null;
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Select a section to see content.</p>
        )}
      </main>
    </div>
  );
};

export default HeaderWithContent;
