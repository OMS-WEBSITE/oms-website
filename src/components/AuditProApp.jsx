import React from "react";
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

import ProductsandService from "./sections/ProductsandService";
import Solutions from "./sections/Solutions";
import WhyOMSfrom from "./sections/WhyOMS";
import HowToBuy from "./sections/HowToBuy";
import Learn from "./sections/Learn";
import Support from "./sections/Support";
import Partners from "./sections/Partners";

const AuditProApp = () => {
  return (
    <div className="min-h-screen bg-white">
      <Utility />
      <Header />

      <main>
        <VideoSection />
        <ProductsandService />
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

      <Footer />
    </div>
  );
};

export default AuditProApp;
