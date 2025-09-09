import React from "react";
import Header from "@/components/organisms/Header";
import HeroSection from "@/components/organisms/HeroSection";
import TargetIndustries from "@/components/organisms/TargetIndustries";
import ProcessTimeline from "@/components/organisms/ProcessTimeline";
import ProductPortfolio from "@/components/organisms/ProductPortfolio";
import ComparisonTable from "@/components/organisms/ComparisonTable";
import ValuePropositions from "@/components/organisms/ValuePropositions";
import TestimonialsSection from "@/components/organisms/TestimonialsSection";
import FAQSection from "@/components/organisms/FAQSection";
import ContactSection from "@/components/organisms/ContactSection";
const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
<HeroSection />
<TargetIndustries />
        <ProcessTimeline />
        <ProductPortfolio />
        <ComparisonTable />
        <ValuePropositions />
        <TestimonialsSection />
<FAQSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default HomePage;