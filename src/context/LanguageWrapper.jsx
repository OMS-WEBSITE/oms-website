import React from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import QuickConnect from "@/components/ui/QuickConnect.jsx";

const LanguageWrapper = () => {
  return (
    <LanguageProvider>
      <QuickConnect />
    </LanguageProvider>
  );
};

export default LanguageWrapper;
