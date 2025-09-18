import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/atoms/Container';
import ValueCard from '@/components/molecules/ValueCard';
import { valuePropositionService } from '@/services/api/valuePropositionService';

function ValuePropositions() {
const [valueProps, setValueProps] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load value propositions from database
  useEffect(() => {
    const loadValueProps = async () => {
      setLoading(true);
      try {
        const items = await valuePropositionService.getAll();
        setValueProps(items);
      } catch (error) {
        console.error("Error fetching value propositions:", error);
        // Fallback data
        setValueProps([
          {
            Id: 1,
            icon_c: "Zap",
            title_c: "AI-Assisted Development",
            description_c: "Leverage cutting-edge AI tools to accelerate development timelines by 3x while maintaining enterprise-grade code quality and best practices."
          },
          {
            Id: 2,
            icon_c: "Eye",
            title_c: "Demo-First Approach", 
            description_c: "See your vision come to life with working prototypes before full development. Make informed decisions with tangible demonstrations."
          },
          {
            Id: 3,
            icon_c: "Shield",
            title_c: "Complete Ownership",
            description_c: "Own 100% of your code, infrastructure, and intellectual property. No vendor lock-in, no licensing fees, no hidden dependencies."
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadValueProps();
  }, []);

  return (
<section id="services" className="py-20 lg:py-32 bg-gray-900 overflow-hidden">
      <Container>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
className="text-3xl lg:text-5xl font-black text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Why Choose{" "}
<span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Dreamwares AI
            </span>
          </motion.h2>
<motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We combine advanced AI capabilities with proven development practices to deliver 
            exceptional results for non-technical founders.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {valueProps.map((prop, index) => (
            <motion.div
key={prop.Id}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut"
              }}
            >
              <ValueCard
                icon={prop.icon_c}
                title={prop.title_c}
                description={prop.description_c}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ValuePropositions;