import React, { useState } from "react";
import Container from "@/components/atoms/Container";
import ApperIcon from "@/components/ApperIcon";

const ComparisonTable = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const comparisonData = [
    {
      id: 1,
      category: "Speed",
      traditional: "6-12 months",
      freelancers: "3-8 months",
      dreamwares: "2-6 weeks",
      dreamwaresAdvantage: true
    },
    {
      id: 2,
      category: "Cost",
      traditional: "$50K-200K+",
      freelancers: "$10K-50K",
      dreamwares: "$5K-25K",
      dreamwaresAdvantage: true
    },
    {
      id: 3,
      category: "Ownership",
      traditional: "Partial/Licensed",
      freelancers: "Full ownership",
      dreamwares: "100% ownership",
      dreamwaresAdvantage: true
    },
    {
      id: 4,
      category: "Communication",
      traditional: "Complex hierarchies",
      freelancers: "Direct but inconsistent",
      dreamwares: "Direct & AI-enhanced",
      dreamwaresAdvantage: true
    },
    {
      id: 5,
      category: "Support",
      traditional: "Limited post-launch",
      freelancers: "Variable availability",
      dreamwares: "Ongoing AI support",
      dreamwaresAdvantage: true
    },
    {
      id: 6,
      category: "Delivery",
      traditional: "Waterfall approach",
      freelancers: "Mixed methodologies",
      dreamwares: "Demo-first iterative",
      dreamwaresAdvantage: true
    }
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent">
              Dreamwares AI?
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compare our AI-powered approach with traditional development and freelancers
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full bg-white rounded-2xl shadow-xl overflow-hidden">
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
              <tr>
                <th className="px-8 py-6 text-left text-lg font-bold text-gray-900">Features</th>
                <th className="px-8 py-6 text-center text-lg font-bold text-gray-700">Traditional Development</th>
                <th className="px-8 py-6 text-center text-lg font-bold text-gray-700">Freelancers</th>
                <th className="px-8 py-6 text-center text-lg font-bold bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent">Dreamwares AI</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr key={item.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-8 py-6 font-semibold text-gray-900">{item.category}</td>
                  <td className="px-8 py-6 text-center text-gray-600">{item.traditional}</td>
                  <td className="px-8 py-6 text-center text-gray-600">{item.freelancers}</td>
                  <td className="px-8 py-6 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      {item.dreamwaresAdvantage && (
                        <ApperIcon name="CheckCircle" size={20} className="text-success-500" />
                      )}
                      <span className="font-semibold text-success-600">{item.dreamwares}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Accordion View */}
        <div className="lg:hidden space-y-4">
          {comparisonData.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{item.category}</span>
                <ApperIcon 
                  name={openAccordion === item.id ? "ChevronUp" : "ChevronDown"} 
                  size={20} 
                  className="text-gray-400"
                />
              </button>
              
              {openAccordion === item.id && (
                <div className="px-6 pb-6 space-y-4 border-t border-gray-100">
                  <div className="grid grid-cols-1 gap-3 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Traditional</span>
                      <span className="text-sm text-gray-700">{item.traditional}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Freelancers</span>
                      <span className="text-sm text-gray-700">{item.freelancers}</span>
                    </div>
                    <div className="flex justify-between items-center bg-success-50 rounded-lg p-3">
                      <span className="text-sm font-medium text-success-700">Dreamwares AI</span>
                      <div className="flex items-center space-x-2">
                        {item.dreamwaresAdvantage && (
                          <ApperIcon name="CheckCircle" size={16} className="text-success-500" />
                        )}
                        <span className="text-sm font-semibold text-success-600">{item.dreamwares}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ComparisonTable;