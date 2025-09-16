import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import HeroSection from './sections/HeroSection';
import ScrollingLogos from './sections/ScrollingLogos';
import FeatureSection from './sections/FeatureSection';
import MatchFinder from './sections/MatchFinder';
import ManagementSection from './sections/ManagementSection';
import ProposalSection from './sections/ProposalSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FundersSection from './sections/FundersSection';
import CTASection from './sections/CTASection';
import PricingCallout from './sections/PricingCallout';
import VideoSection from './sections/Video';

const AuditProApp = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <VideoSection />
        <HeroSection />
        <ScrollingLogos />
        <FeatureSection />
        <MatchFinder />
        <ManagementSection />
        <ProposalSection />
        <TestimonialsSection />
        <FundersSection />
        <PricingCallout />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default AuditProApp;
