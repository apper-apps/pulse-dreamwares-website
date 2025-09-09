import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/atoms/Container';
import ApperIcon from '@/components/ApperIcon';
const processSteps = [
  {
    number: 1,
    title: "Initial Call",
    description: "We start with a comprehensive discovery call to understand your business needs and objectives.",
    icon: "Phone"
  },
  {
    number: 2,
    title: "Strategy Session",
    description: "Deep dive into your requirements to create a tailored development strategy and roadmap.",
    icon: "Target"
  },
  {
    number: 3,
    title: "Demo Creation",
    description: "We build a working prototype to validate the concept and gather your feedback early.",
    icon: "Presentation"
  },
  {
    number: 4,
    title: "Development Sprint",
    description: "Our expert team develops your application using agile methodologies and best practices.",
    icon: "Code"
  },
  {
    number: 5,
    title: "Testing & Refinement",
    description: "Comprehensive testing and quality assurance to ensure your app meets all requirements.",
    icon: "TestTube"
  },
  {
    number: 6,
    title: "Launch",
    description: "Smooth deployment to production with full support during the go-live process.",
    icon: "Rocket"
  },
  {
    number: 7,
    title: "Ongoing Support",
    description: "Continuous maintenance, updates, and support to keep your application running optimally.",
    icon: "HeadphonesIcon"
  }
];

function ProcessTimeline() {
  return (
<section id="process" className="py-20 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
      <Container>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Development Process
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A proven seven-step process that ensures your project's success from concept to launch
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-7 gap-8">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={step.number} 
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    ease: "easeOut"
                  }}
                >
                  {/* Connecting Line */}
                  {index < processSteps.length - 1 && (
                    <motion.div 
                      className="absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 z-0"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: (index * 0.15) + 0.3 }}
                      style={{ transformOrigin: "left" }}
                    />
                  )}
                  
                  {/* Step Content */}
                  <div className="relative z-10 text-center">
                    {/* Icon Circle */}
                    <motion.div 
                      className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ApperIcon name={step.icon} size={32} className="text-white" />
                    </motion.div>
                    
                    {/* Step Number */}
                    <motion.div 
                      className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3 hover:bg-primary-600 transition-colors duration-200"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (index * 0.15) + 0.6 }}
                    >
                      {step.number}
                    </motion.div>
                    
                    {/* Title */}
                    <motion.h3 
                      className="text-lg font-semibold text-gray-900 mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (index * 0.15) + 0.8 }}
                    >
                      {step.title}
                    </motion.h3>
                    
                    {/* Description */}
                    <motion.p 
                      className="text-sm text-gray-600 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (index * 0.15) + 1.0 }}
                    >
                      {step.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Timeline */}
          <div className="lg:hidden">
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={step.number} 
                  className="relative flex items-start"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    ease: "easeOut"
                  }}
                >
                  {/* Vertical Line */}
                  {index < processSteps.length - 1 && (
                    <motion.div 
                      className="absolute left-12 top-24 w-0.5 h-16 bg-gradient-to-b from-primary-500 to-primary-600"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: (index * 0.15) + 0.3 }}
                      style={{ transformOrigin: "top" }}
                    />
                  )}
                  
                  {/* Icon Circle */}
                  <motion.div 
                    className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0 hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ApperIcon name={step.icon} size={28} className="text-white" />
                  </motion.div>
                  
                  {/* Content */}
                  <motion.div 
                    className="ml-6 flex-1"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index * 0.15) + 0.3 }}
                  >
                    <div className="flex items-center mb-2">
                      <motion.div 
                        className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 hover:bg-primary-600 transition-colors duration-200"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: (index * 0.15) + 0.5 }}
                      >
                        {step.number}
                      </motion.div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProcessTimeline;