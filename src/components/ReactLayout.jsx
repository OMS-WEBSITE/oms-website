// src/components/ReactLayout.jsx
import React from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import QuickConnect from "@/components/ui/QuickConnect.jsx";
import Header from "@/components/layout/Header.jsx";
import Footer from "@/components/layout/Footer.jsx";
import Utility from "./layout/Utility";

const ReactLayout = ({ children }) => {
  return (
    <LanguageProvider>
      <Utility />
      <Header />
      {children} {/* This will render the Astro page content */}
      <Footer />
      <QuickConnect /> {/* Floating QuickConnect stays on all pages */}
    </LanguageProvider>
  );
};

export default ReactLayout;
