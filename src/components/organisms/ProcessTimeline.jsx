import React from 'react';
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
    <section id="process" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Development Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A proven seven-step process that ensures your project's success from concept to launch
          </p>
        </div>

        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-7 gap-8">
              {processSteps.map((step, index) => (
                <div key={step.number} className="relative">
                  {/* Connecting Line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 z-0"></div>
                  )}
                  
                  {/* Step Content */}
                  <div className="relative z-10 text-center">
                    {/* Icon Circle */}
                    <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <ApperIcon name={step.icon} size={32} className="text-white" />
                    </div>
                    
                    {/* Step Number */}
                    <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
                      {step.number}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Timeline */}
          <div className="lg:hidden">
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={step.number} className="relative flex items-start">
                  {/* Vertical Line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-12 top-24 w-0.5 h-16 bg-gradient-to-b from-primary-500 to-primary-600"></div>
                  )}
                  
                  {/* Icon Circle */}
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                    <ApperIcon name={step.icon} size={28} className="text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="ml-6 flex-1">
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">
                        {step.number}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProcessTimeline;