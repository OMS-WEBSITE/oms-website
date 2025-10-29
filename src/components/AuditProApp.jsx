import React, { useState } from "react"; // ✅ make sure to import useState
import Utility from "./layout/Utility";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HeroSection from "./sections/HeroSection";
import ScrollingLogos from "./sections/ScrollingLogos";
import FeatureSection from "./sections/FeatureSection";
import MatchFinder from "./sections/MatchFinder";
import ManagementSection from "./sections/ManagementSection";
import ProposalSection from "./sections/ProposalSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import FundersSection from "./sections/FundersSection";
import CTASection from "./sections/CTASection";
import PricingCallout from "./sections/PricingCallout";
import VideoSection from "./sections/Video";

import ProductsAndService from "./sections/ProductsandService"
import Solutions from "./sections/Solutions";
import WhyOMSfrom from "./sections/WhyOMS";
import HowToBuy from "./sections/HowToBuy";
import Learn from "./sections/Learn";
import Support from "./sections/Support";
import Partners from "./sections/Partners";

const AuditProApp = () => {
  const [language, setLanguage] = useState("EN-IN"); // <--- added state

  return (
    <div className="min-h-screen bg-white">
      {/* Pass language state to Utility */}
      <Utility language={language} setLanguage={setLanguage} />
      <Header />
      <main>
        <VideoSection />
        <ProductsAndService />
        <Solutions />
        <WhyOMSfrom />
        <HowToBuy />
        <Learn />
        <Support />
        <Partners />

        {/* <HeroSection />
        <ScrollingLogos />
        <FeatureSection />
        <MatchFinder />
        <ManagementSection />
        <ProposalSection />
        <TestimonialsSection />
        <FundersSection />
        <PricingCallout />
        <CTASection /> */}
      </main>
      <Footer language={language} />{" "}
    </div>
  );
};

export default AuditProApp;
