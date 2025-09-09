import React from "react";
import Header from "@/components/organisms/Header";
import HeroSection from "@/components/organisms/HeroSection";
import ComparisonTable from "@/components/organisms/ComparisonTable";
import ValuePropositions from "@/components/organisms/ValuePropositions";
import FAQSection from "@/components/organisms/FAQSection";
const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
<HeroSection />
        <ComparisonTable />
        <ValuePropositions />
        <FAQSection />
      </main>
    </div>
  );
};

export default HomePage;