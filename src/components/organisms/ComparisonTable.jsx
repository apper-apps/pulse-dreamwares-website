import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { comparisonService } from "@/services/api/comparisonService";
import ApperIcon from "@/components/ApperIcon";
import Container from "@/components/atoms/Container";

function ComparisonTable() {
  const [openAccordion, setOpenAccordion] = useState(null);
const [comparisonData, setComparisonData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load comparison data from database
  useEffect(() => {
    const loadComparisonData = async () => {
      setLoading(true);
      try {
        const items = await comparisonService.getAll();
        setComparisonData(items);
      } catch (error) {
        console.error("Error fetching comparison data:", error);
        // Fallback data
        setComparisonData([
          {
            Id: 1,
            category_c: "Speed",
            traditional_c: "6-12 months",
            freelancers_c: "3-8 months",
            dreamwares_c: "2-6 weeks",
            dreamwares_advantage_c: true
          },
          {
            Id: 2,
            category_c: "Cost",
            traditional_c: "$50K-200K+",
            freelancers_c: "$10K-50K",
            dreamwares_c: "$5K-25K",
            dreamwares_advantage_c: true
          },
          {
            Id: 3,
            category_c: "Ownership",
            traditional_c: "Partial/Licensed",
            freelancers_c: "Full ownership",
            dreamwares_c: "100% ownership",
            dreamwares_advantage_c: true
          },
          {
            Id: 4,
            category_c: "Communication",
            traditional_c: "Complex hierarchies",
            freelancers_c: "Direct but inconsistent",
            dreamwares_c: "Direct & AI-enhanced",
            dreamwares_advantage_c: true
          },
          {
            Id: 5,
            category_c: "Support",
            traditional_c: "Limited post-launch",
            freelancers_c: "Variable availability",
            dreamwares_c: "Ongoing AI support",
            dreamwares_advantage_c: true
          },
          {
            Id: 6,
            category_c: "Delivery",
            traditional_c: "Waterfall approach",
            freelancers_c: "Mixed methodologies",
            dreamwares_c: "Demo-first iterative",
            dreamwares_advantage_c: true
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadComparisonData();
  }, []);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
<section className="py-16 lg:py-24 bg-gray-50 overflow-hidden">
      <Container>
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-3xl lg:text-4xl font-black text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Why Choose{" "}
            <span className="bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent">
              Dreamwares AI?
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Compare our AI-powered approach with traditional development and freelancers
          </motion.p>
        </motion.div>

        {/* Desktop Table View */}
        <motion.div 
          className="hidden lg:block overflow-x-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <table className="w-full bg-white rounded-2xl shadow-xl overflow-hidden">
            <motion.thead 
              className="bg-gradient-to-r from-gray-50 to-gray-100"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <tr>
                <th className="px-8 py-6 text-left text-lg font-bold text-gray-900">Features</th>
                <th className="px-8 py-6 text-center text-lg font-bold text-gray-700">Traditional Development</th>
                <th className="px-8 py-6 text-center text-lg font-bold text-gray-700">Freelancers</th>
                <th className="px-8 py-6 text-center text-lg font-bold bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent">Dreamwares AI</th>
              </tr>
            </motion.thead>
            <tbody>
              {comparisonData.map((item, index) => (
<motion.tr 
                  key={item.Id} 
                  className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100 transition-colors duration-200`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                >
<td className="px-8 py-6 font-semibold text-gray-900">{item.category_c}</td>
                  <td className="px-8 py-6 text-center text-gray-600">{item.traditional_c}</td>
                  <td className="px-8 py-6 text-center text-gray-600">{item.freelancers_c}</td>
                  <td className="px-8 py-6 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      {item.dreamwares_advantage_c && (
                        <ApperIcon name="CheckCircle" size={20} className="text-success-500" />
                      )}
                      <span className="font-semibold text-success-600">{item.dreamwares_c}</span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile Accordion View */}
        <div className="lg:hidden space-y-4">
          {comparisonData.map((item, index) => (
<motion.div 
              key={item.Id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
<motion.button
                onClick={() => toggleAccordion(item.Id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-semibold text-gray-900">{item.category_c}</span>
                <motion.div
                  animate={{ rotate: openAccordion === item.Id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ApperIcon name="ChevronDown" size={20} className="text-gray-500" />
                </motion.div>
              </motion.button>
              
              <motion.div
                className="overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: openAccordion === item.Id ? "auto" : 0,
                  opacity: openAccordion === item.Id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-6 space-y-3 bg-gray-50">
                  <motion.div
                    className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: openAccordion === item.Id ? 1 : 0,
                      x: openAccordion === item.Id ? 0 : -20
                    }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500 font-medium">Traditional</span>
                      <span className="text-sm text-gray-700">{item.traditional_c}</span>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: openAccordion === item.Id ? 1 : 0,
                      x: openAccordion === item.Id ? 0 : -20
                    }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500 font-medium">Freelancers</span>
                      <span className="text-sm text-gray-700">{item.freelancers_c}</span>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="flex justify-between items-center p-3 bg-success-50 rounded-lg border border-success-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: openAccordion === item.Id ? 1 : 0,
                      x: openAccordion === item.Id ? 0 : -20
                    }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex flex-col">
                      <span className="text-sm text-success-600 font-medium">DreamWares AI</span>
                      <div className="flex items-center space-x-2">
                        {item.dreamwares_advantage_c && (
                          <ApperIcon name="CheckCircle" size={16} className="text-success-500" />
                        )}
                        <span className="text-sm font-semibold text-success-600">{item.dreamwares_c}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ComparisonTable;