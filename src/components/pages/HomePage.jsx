import React from "react";
import Header from "@/components/organisms/Header";
import HeroSection from "@/components/organisms/HeroSection";
import ValuePropositions from "@/components/organisms/ValuePropositions";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ValuePropositions />
      </main>
    </div>
  );
};

export default HomePage;