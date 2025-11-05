import { useState, useEffect } from "react";
import searchData from "@/data/searchData.json";
import { FaSearch, FaTimes } from "react-icons/fa";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // Close search on scroll (when on home page)
  useEffect(() => {
    const handleScroll = () => {
      if (window.location.pathname === "/" && isOpen) {
        setIsOpen(false);
        setResults([]);
        setQuery("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
    setQuery("");
    setResults([]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") performSearch();
  };

  // ✅ Updated global search logic
  const performSearch = () => {
    const value = query.toLowerCase().trim();
    if (value === "") return setResults([]);

    // Match query anywhere in title, description, or any JSON field
    const filtered = searchData.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(value)
      )
    );

    setResults(filtered);
  };

  // const handleNavigation = (url) => {
  //   console.log("handleNavigation");
  //   setIsOpen(false);
  //   setResults([]);

  //   // Check for "Products & Services" links
  //   if (url.includes("#productsandservice/")) {
  //     const [base, hashPath] = url.split("#");
  //     const [, subSection] = hashPath.split("/"); // e.g. "business-performance"
  //     window.history.pushState(null, "", `/#${hashPath}`);
  //     // Convert to readable label (Business Performance)
  //     const subLabel = subSection
  //       ? decodeURIComponent(subSection)
  //           .replace(/-/g, " ")
  //           .replace(/\b\w/g, (c) => c.toUpperCase())
  //       : null;

  //     // Case 1: Already on same page
  //     if (window.location.pathname === "/" || base === "") {
  //       const mainSection = document.getElementById("productsandservice");
  //       if (mainSection) {
  //         mainSection.scrollIntoView({ behavior: "smooth", block: "start" });
  //       }

  //       // Wait for smooth scroll, then trigger subsection activation
  //       if (subLabel) {
  //         setTimeout(() => {
  //           const event = new CustomEvent("activateProductSubSection", {
  //             detail: { label: subLabel },
  //           });
  //           window.dispatchEvent(event);
  //         }, 600);
  //       }
  //     } else {
  //       // Case 2: Navigate to home first, then event runs on load
  //       sessionStorage.setItem("pendingSubSection", subLabel);
  //       window.location.href = "/";
  //     }
  //     return;
  //   }

  //   // ✅ Handle regular sections like #about, #contact
  //   if (url.includes("#")) {
  //     console.log("reached in loop");
  //     const [base, hash] = url.split("#");
  //     if (window.location.pathname === base || base === "") {
  //       console.log("reached");
  //       window.history.pushState(null, "", `/#${hash}`);
  //       const section = document.getElementById(hash);
  //       if (section) {
  //         section.scrollIntoView({ behavior: "smooth", block: "start" });
  //       } else {
  //         window.location.href = url;
  //       }
  //     } else {
  //       window.location.href = url;
  //     }
  //     return;
  //   }
  //   console.log("loop outside");
  //   // Default navigation
  //   window.location.href = url;
  // };

  const handleNavigation = (url) => {
    setIsOpen(false);
    setResults([]);

    // 🧭 Handle "Products & Services" subsections
    if (url.includes("#productsandservice/")) {
      const [base, hashPath] = url.split("#");
      const [, subSection] = hashPath.split("/"); // e.g. "business-performance"
      const subLabel = subSection
        ? decodeURIComponent(subSection)
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase())
        : null;

      // If already on home page
      if (window.location.pathname === "/" || base === "") {
        const mainSection = document.getElementById("productsandservice");
        if (mainSection) {
          mainSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        if (subLabel) {
          setTimeout(() => {
            const event = new CustomEvent("activateProductSubSection", {
              detail: { label: subLabel },
            });
            window.dispatchEvent(event);
          }, 600);
        }

        // ✅ Add hash temporarily for SEO/UX
        setTimeout(() => {
          window.history.replaceState(null, "", `/#${hashPath}`);
        }, 700);

        // ✅ Then restore URL back to normal
        setTimeout(() => {
          window.history.replaceState(null, "", `/`);
        }, 2500);
      } else {
        sessionStorage.setItem("pendingSubSection", subLabel);
        window.location.href = "/";
      }
      return;
    }

    // 🧭 Handle regular internal sections (like #about, #contact)
    if (url.includes("#")) {
      const [base, hash] = url.split("#");

      if (window.location.pathname === base || base === "") {
        const section = document.getElementById(hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });

          // ✅ Add hash temporarily
          setTimeout(() => {
            window.history.replaceState(null, "", `/#${hash}`);
          }, 500);

          // ✅ Then restore URL back to normal after scroll
          setTimeout(() => {
            window.history.replaceState(null, "", `/`);
          }, 2000);
        } else {
          window.location.href = url;
        }
      } else {
        window.location.href = url;
      }
      return;
    }

    // 🌍 Default external navigation
    window.location.href = url;
  };

  return (
    <div className="relative flex items-center justify-center">
      {/* Toggle Icon */}
      <button
        onClick={toggleSearch}
        className="flex items-center justify-center p-2 rounded-full border border-gray-200 hover:bg-orange-50 transition-all duration-300"
      >
        {isOpen ? (
          <FaTimes className="text-orange-500" size={18} />
        ) : (
          <FaSearch className="text-orange-500" size={18} />
        )}
      </button>

      {/* Search Input */}
      {isOpen && (
        <div
          className="
            absolute md:top-full md:right-0 md:mt-8
            top-[100%] right-0
            w-screen md:w-96
            bg-white border border-gray-200 rounded-none md:rounded-full
            shadow-md flex items-center
            p-2 
          "
          style={{
            position: window.innerWidth < 768 ? "fixed" : "absolute",
            top: window.innerWidth < 768 ? "60px" : undefined,
            left: window.innerWidth < 768 ? "0" : undefined,
            right: window.innerWidth < 768 ? "0" : undefined,
            zIndex: 9999,
          }}
        >
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              const val = e.target.value.toLowerCase().trim();
              if (val === "") return setResults([]);

              // ✅ Live search (instant filtering)
              const liveFiltered = searchData.filter((item) =>
                Object.values(item).some((v) =>
                  String(v).toLowerCase().includes(val)
                )
              );
              setResults(liveFiltered);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search..."
            className="flex-grow px-3 py-2 outline-none text-sm"
            autoFocus
          />
          <button
            onClick={performSearch}
            className="p-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition"
          >
            <FaSearch />
          </button>
        </div>
      )}

      {/* ✅ Results Dropdown */}
      {results.length > 0 && (
        <div
          className="
            absolute md:mt-12 mt-0 md:top-[calc(100%+2.5rem)] md:right-0
            w-screen md:w-96
            bg-white border border-gray-200 rounded-none md:rounded-xl shadow-lg z-50
            max-h-80 overflow-y-auto
            scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-gray-100
          "
          style={{
            position: window.innerWidth < 768 ? "fixed" : "absolute",
            top: window.innerWidth < 768 ? "110px" : undefined,
            left: window.innerWidth < 768 ? "0" : undefined,
            right: window.innerWidth < 768 ? "0" : undefined,
          }}
        >
          {results.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(item.url)}
              className="block w-full text-left p-3 hover:bg-orange-50 border-b last:border-none"
            >
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600">
                {" "}
                {item.description.length > 120
                  ? item.description.slice(0, 120) + "..."
                  : item.description}{" "}
                Read More
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
