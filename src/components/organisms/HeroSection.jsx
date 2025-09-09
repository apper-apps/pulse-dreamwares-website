import React from "react";
import Container from "@/components/atoms/Container";
import Button from "@/components/atoms/Button";
import { toast } from "react-toastify";

const HeroSection = () => {
  const handleCTAClick = () => {
    toast.success("Thank you for your interest! We'll be in touch soon.");
  };

  return (
    <section id="home" className="pt-20 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 leading-tight mb-8">
            We build your{" "}
            <span className="bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent">
              tech
            </span>
            ,<br />
            you build your{" "}
            <span className="bg-gradient-to-r from-success-500 to-primary-500 bg-clip-text text-transparent">
              business
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
            Focus on growing your business while we handle the technical complexity. 
            Our AI-assisted development approach delivers faster results with complete ownership transfer.
          </p>

          {/* CTA Button */}
          <div className="mb-16">
            <Button 
              size="xl" 
              onClick={handleCTAClick}
              className="shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300"
            >
              Let's Discuss Your Needs Now
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="text-sm text-gray-500 space-y-2">
            <p className="font-medium">Trusted by ambitious founders worldwide</p>
            <div className="flex items-center justify-center space-x-8 text-xs">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-success-500 rounded-full mr-2"></span>
                100% Code Ownership
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                AI-Powered Development
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Demo-First Approach
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;