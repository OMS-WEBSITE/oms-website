// import React from "react";
// import { LanguageProvider } from "@/context/LanguageContext";
// import QuickConnect from "@/components/ui/QuickConnect.jsx";

// const LanguageWrapper = () => {
//   return (
//     <LanguageProvider>
//       <QuickConnect />
//     </LanguageProvider>
//   );
// };

// export default LanguageWrapper;

import React from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import QuickConnect from "@/components/ui/QuickConnect.jsx";

const LanguageWrapper = ({ children }) => {
  return (
    <LanguageProvider>
      {children} {/* <-- This will render Astro page content */}
      <QuickConnect />  {/* QuickConnect stays on all pages */}
    </LanguageProvider>
  );
};

export default LanguageWrapper;
