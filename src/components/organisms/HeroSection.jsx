import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Container from "@/components/atoms/Container";
import Button from "@/components/atoms/Button";
import { toast } from "react-toastify";
import { ApperIcon } from "@/components/ApperIcon";
const HeroSection = () => {
  const handleCTAClick = () => {
    toast.success("Thank you for your interest! We'll be in touch soon.");
  };

  return (
<section id="home" className="pt-20 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center overflow-hidden">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
<TypewriterHeadline />

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
              className="relative group"
              whileHover={{ 
                scale: 1.08,
                rotateX: 5,
                rotateY: 5
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 25,
                duration: 0.3
              }}
              style={{ perspective: 1000 }}
            >
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-success-400 via-primary-400 to-purple-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                animate={{
                  background: [
                    "linear-gradient(45deg, #10B981, #2563EB, #8B5CF6)",
                    "linear-gradient(135deg, #8B5CF6, #10B981, #2563EB)",
                    "linear-gradient(225deg, #2563EB, #8B5CF6, #10B981)",
                    "linear-gradient(315deg, #10B981, #2563EB, #8B5CF6)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <Button 
                size="xl" 
                onClick={handleCTAClick}
                className="relative shadow-2xl hover:shadow-4xl group-hover:shadow-success-500/25 transition-all duration-500 transform-gpu hover:-translate-y-2 hover:rotate-1"
              >
                <motion.span
                  className="relative z-10 flex items-center"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  Let's Discuss Your Needs Now
                  <motion.div
                    className="ml-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ApperIcon name="ArrowRight" size={20} />
                  </motion.div>
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>

{/* Success Metrics Display */}
          <SuccessMetrics />

          {/* Development Process Diagram */}
          <ProcessDiagram />

          {/* Trust Indicators */}
          <motion.div 
            className="text-sm text-gray-500 space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
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
                  transition={{ duration: 0.4, delay: 1.6 + (index * 0.1) }}
                  whileHover={{ scale: 1.05 }}
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

  function TypewriterHeadline() {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);
    const fullText = "We build your tech, you build your business";

    useEffect(() => {
      if (currentIndex < fullText.length) {
        const timeout = setTimeout(() => {
          setCurrentText(prev => prev + fullText[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, 80 + Math.random() * 40); // Variable typing speed for realism

        return () => clearTimeout(timeout);
      }
    }, [currentIndex, fullText]);

    useEffect(() => {
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 530);

      return () => clearInterval(cursorInterval);
    }, []);

    return (
      <motion.h1 
        className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 leading-tight mb-8"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="inline-block">
          {currentText.split(" ").map((word, wordIndex) => {
            const isHighlighted = word === "tech" || word === "business";
            const gradientClass = word === "tech" 
              ? "from-primary-500 to-purple-500" 
              : "from-success-500 to-primary-500";

            return (
              <motion.span
                key={wordIndex}
                className={isHighlighted 
                  ? `bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent inline-block mr-2`
                  : "inline-block mr-2"
                }
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.3,
                  delay: wordIndex * 0.1 
                }}
              >
                {word}
                {wordIndex === 2 && <br />}
              </motion.span>
            );
          })}
          <motion.span 
            className="typewriter-cursor inline-block w-1 h-12 bg-primary-500 ml-1"
            animate={{ opacity: showCursor ? 1 : 0 }}
            transition={{ duration: 0.1 }}
          />
        </span>
      </motion.h1>
    );
  }

  function SuccessMetrics() {
    const [counters, setCounters] = useState({ projects: 0, satisfaction: 0, experience: 0 });

    useEffect(() => {
      const targets = { projects: 150, satisfaction: 98, experience: 5 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      Object.keys(targets).forEach(key => {
        const increment = targets[key] / steps;
        let current = 0;

        const interval = setInterval(() => {
          current += increment;
          if (current >= targets[key]) {
            current = targets[key];
            clearInterval(interval);
          }
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, stepDuration);
      });
    }, []);

    const metrics = [
      { 
        value: counters.projects, 
        suffix: "+", 
        label: "Projects Delivered", 
        icon: "Rocket",
        color: "text-success-600" 
      },
      { 
        value: counters.satisfaction, 
        suffix: "%", 
        label: "Client Satisfaction", 
        icon: "Heart",
        color: "text-primary-600" 
      },
      { 
        value: counters.experience, 
        suffix: "+", 
        label: "Years Experience", 
        icon: "Award",
        color: "text-purple-600" 
      }
    ];

    return (
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            whileHover={{ 
              scale: 1.05, 
              rotateY: 5,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 + (index * 0.1) }}
          >
            <motion.div 
              className={`inline-flex items-center justify-center w-12 h-12 ${metric.color.replace('text-', 'bg-')}/10 rounded-full mb-3`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <ApperIcon name={metric.icon} size={24} className={metric.color} />
            </motion.div>
            <motion.div 
              className={`text-3xl font-bold ${metric.color} mb-1`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 500, 
                delay: 1.2 + (index * 0.1) 
              }}
            >
              {metric.value}{metric.suffix}
            </motion.div>
            <div className="text-sm text-gray-600 font-medium">
              {metric.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    );
  }

  function ProcessDiagram() {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
      { 
        title: "Discovery", 
        description: "Understand your vision",
        icon: "Search",
        color: "success" 
      },
      { 
        title: "Design", 
        description: "Create user-focused solutions",
        icon: "Palette",
        color: "primary" 
      },
      { 
        title: "Develop", 
        description: "Build with cutting-edge tech",
        icon: "Code",
        color: "purple" 
      },
      { 
        title: "Deploy", 
        description: "Launch and scale",
        icon: "Rocket",
        color: "success" 
      }
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveStep(prev => (prev + 1) % steps.length);
      }, 2000);

      return () => clearInterval(interval);
    }, []);

    return (
      <motion.div
        className="max-w-4xl mx-auto mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <motion.h3
          className="text-xl font-semibold text-gray-800 text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Our Proven Development Process
        </motion.h3>
        
        <div className="flex items-center justify-between relative">
          {/* Progress Line */}
          <motion.div
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-success-200 via-primary-200 to-purple-200 rounded-full"
            style={{ width: '100%', transform: 'translateY(-50%)' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1.4 }}
          />
          
          <motion.div
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-success-500 via-primary-500 to-purple-500 rounded-full z-10"
            initial={{ width: '0%' }}
            animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.8 }}
            style={{ transform: 'translateY(-50%)' }}
          />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative z-20 flex flex-col items-center group cursor-pointer"
              whileHover={{ scale: 1.1 }}
              onHoverStart={() => setActiveStep(index)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.6 + (index * 0.1) }}
            >
              <motion.div
                className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                  index <= activeStep 
                    ? `bg-${step.color}-500 text-white shadow-${step.color}-200` 
                    : 'bg-white text-gray-400 border-2 border-gray-200'
                }`}
                animate={{
                  scale: index === activeStep ? 1.2 : 1,
                  boxShadow: index === activeStep 
                    ? '0 10px 30px rgba(0,0,0,0.2)' 
                    : '0 4px 15px rgba(0,0,0,0.1)'
                }}
                transition={{ duration: 0.3 }}
              >
                <ApperIcon name={step.icon} size={24} />
              </motion.div>
              
              <motion.div
                className="text-center mt-4 max-w-24"
                animate={{ opacity: index === activeStep ? 1 : 0.7 }}
              >
                <div className={`font-semibold text-sm ${
                  index <= activeStep ? `text-${step.color}-600` : 'text-gray-500'
                }`}>
                  {step.title}
                </div>
                <motion.div
                  className="text-xs text-gray-500 mt-1"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: index === activeStep ? 1 : 0,
                    height: index === activeStep ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {step.description}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
</div>
      </motion.div>
    );
  }

};

export default HeroSection;