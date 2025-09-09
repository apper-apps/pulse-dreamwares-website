import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import Button from "@/components/atoms/Button";
import { toast } from "react-toastify";
const HeroSection = () => {
  const handleCTAClick = () => {
    toast.success("Thank you for your interest! We'll be in touch soon.");
  };

  return (
<section id="home" className="pt-20 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center overflow-hidden">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 leading-tight mb-8"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            We build your{" "}
            <motion.span 
              className="bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              tech
            </motion.span>
            ,<br />
            you build your{" "}
            <motion.span 
              className="bg-gradient-to-r from-success-500 to-primary-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              business
            </motion.span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p 
            className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Focus on growing your business while we handle the technical complexity. 
            Our AI-assisted development approach delivers faster results with complete ownership transfer.
          </motion.p>

          {/* CTA Button */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button 
                size="xl" 
                onClick={handleCTAClick}
                className="shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden"
              >
                <motion.span
                  className="relative z-10"
                  whileHover={{ x: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  Let's Discuss Your Needs Now
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="text-sm text-gray-500 space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="font-medium">Trusted by ambitious founders worldwide</p>
            <div className="flex items-center justify-center space-x-8 text-xs">
              {[
                { color: "bg-success-500", text: "100% Code Ownership" },
                { color: "bg-primary-500", text: "AI-Powered Development" },
                { color: "bg-purple-500", text: "Demo-First Approach" }
              ].map((item, index) => (
                <motion.span 
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.0 + (index * 0.1) }}
                >
                  <motion.span 
                    className={`w-2 h-2 ${item.color} rounded-full mr-2`}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  />
                  {item.text}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;