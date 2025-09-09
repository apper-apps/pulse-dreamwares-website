import React from "react";
import { motion } from "framer-motion";
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
      <main className="overflow-hidden">
        <HeroSection />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TargetIndustries />
        </motion.div>
        <ProcessTimeline />
        <ProductPortfolio />
        <ComparisonTable />
        <ValuePropositions />
        <TestimonialsSection />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FAQSection />
        </motion.div>
        <ContactSection />
      </main>
    </div>
  );
};

export default HomePage;