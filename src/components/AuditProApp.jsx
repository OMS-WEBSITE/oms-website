import { useState } from "react"; // ✅ make sure to import useState
import { LanguageProvider } from "@/context/LanguageContext";
// import QuickConnect from "../components/ui/QuickConnect.jsx";

import Utility from "./layout/Utility";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

import VideoSection from "./sections/Video";

import ProductsAndService from "./sections/ProductsAndServices";
import Solutions from "./sections/Solutions";
import WhyOMS from "./sections/WhyOMS";
import HowToBuy from "./sections/HowToBuy";
import Learn from "./sections/Learn";
import Support from "./sections/Support";
import Partners from "./sections/Clients";

const AuditProApp = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        {/* Pass language state to Utility */}
        <main>
          <VideoSection />
          <ProductsAndService />
          <Solutions />
          <WhyOMS />
          <HowToBuy />
          <Learn />
          <Support />
          <Partners />
        </main>
      </div>
    </LanguageProvider>
  );
};

export default AuditProApp;
