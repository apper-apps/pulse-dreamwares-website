import React, { useState } from "react";
import Container from "@/components/atoms/Container";
import ApperIcon from "@/components/ApperIcon";
import { cn } from "@/utils/cn";

const FAQSection = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: "How long does a typical web development project take?",
      answer: "Project timelines vary based on complexity and scope. A simple business website typically takes 2-4 weeks, while a complex web application with custom features can take 8-16 weeks. Factors affecting timeline include: number of pages, custom functionality, integrations, content preparation, and revision rounds. We provide detailed timelines during our initial consultation and keep you updated throughout the process."
    },
    {
      question: "What are your pricing models and what's included?",
      answer: "We offer flexible pricing models to suit different needs: Fixed Project Price (ideal for well-defined projects with clear scope), Hourly Rate (perfect for ongoing work or projects with evolving requirements), and Monthly Retainers (great for continuous support and updates). All projects include: initial consultation, project planning, design mockups, development, testing, launch support, and 30 days of post-launch support."
    },
    {
      question: "Can you explain your development process in simple terms?",
      answer: "Our development process is designed to be transparent and collaborative: 1) Discovery - We understand your business goals and requirements, 2) Planning - We create a detailed project roadmap and timeline, 3) Design - We create visual mockups for your approval, 4) Development - We build your solution using modern, reliable technologies, 5) Testing - We thoroughly test across devices and browsers, 6) Launch - We deploy your project and ensure everything works perfectly, 7) Support - We provide ongoing support and maintenance."
    },
    {
      question: "What kind of support do you provide after launch?",
      answer: "Post-launch support is crucial for your project's success. We include 30 days of complimentary support covering bug fixes, minor adjustments, and basic questions. Beyond that, we offer: Monthly maintenance plans for regular updates and security patches, On-demand support for new features or changes, Performance monitoring and optimization, Content updates and modifications, and Technical consultation for growth planning."
    },
    {
      question: "How do you choose the right technology for my project?",
      answer: "Technology selection is based on your specific needs, not trends. We consider: Your business requirements and growth plans, Budget and timeline constraints, Maintenance and scalability needs, Integration requirements with existing systems, and Long-term support considerations. We always recommend proven, reliable technologies and explain our choices in non-technical terms so you can make informed decisions."
    },
    {
      question: "What happens if I need changes to the project scope?",
      answer: "Scope changes are normal and we handle them professionally. When you request changes, we: Assess the impact on timeline and budget, Provide a clear explanation of additional costs or time needed, Get your approval before proceeding, Update project documentation, and Maintain transparent communication throughout. Minor adjustments are often included, while significant changes are handled through a formal change request process."
    },
    {
      question: "How often will we communicate during the project?",
      answer: "Regular communication is key to project success. Our communication schedule includes: Weekly progress updates via email with screenshots and status reports, Scheduled check-in calls at major milestones, Immediate communication for any blockers or urgent questions, Access to a project management portal where you can track progress, and Quick response times (usually within 4-8 hours during business days). You'll never be left wondering about your project's status."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our development process, pricing, and what to expect when working with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </span>
                <ApperIcon
                  name="ChevronDown"
                  size={20}
                  className={cn(
                    "text-gray-500 transition-transform duration-200 flex-shrink-0",
                    openItems[index] ? "rotate-180" : ""
                  )}
                />
              </button>
              
              <div
                className={cn(
                  "transition-all duration-300 ease-in-out overflow-hidden",
                  openItems[index] ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="px-6 pb-5">
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? We'd love to help!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors duration-200"
          >
            Get in Touch
            <ApperIcon name="ArrowRight" size={16} className="ml-2" />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;