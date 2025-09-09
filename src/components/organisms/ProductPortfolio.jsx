import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/atoms/Container';
import ApperIcon from '@/components/ApperIcon';
const products = [
  {
    id: 1,
    name: "Integrately",
    description: "A powerful integration platform that connects your favorite apps and automates workflows with 1-click integrations. Streamline your business processes effortlessly.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&auto=format",
    metrics: [
      { label: "Integrations", value: "1000+" },
      { label: "Active Users", value: "50K+" },
      { label: "Automations", value: "1M+" }
    ],
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    link: "#integrately"
  },
  {
    id: 2,
    name: "Apper.io",
    description: "No-code application builder that empowers businesses to create custom applications without writing a single line of code. Build, deploy, and scale with ease.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&auto=format",
    metrics: [
      { label: "Apps Built", value: "5000+" },
      { label: "Enterprise Clients", value: "200+" },
      { label: "Time Saved", value: "80%" }
    ],
    technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
    link: "#apper"
  },
  {
    id: 3,
    name: "AutoTester.ai",
    description: "AI-powered testing automation platform that intelligently tests your applications, identifies bugs, and ensures quality releases with minimal human intervention.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop&auto=format",
    metrics: [
      { label: "Test Cases", value: "100K+" },
      { label: "Bug Detection", value: "99.5%" },
      { label: "Test Speed", value: "10x Faster" }
    ],
    technologies: ["Python", "TensorFlow", "React", "Kubernetes"],
    link: "#autotester"
  }
];

function ProductPortfolio() {
  return (
<section id="portfolio" className="py-20 bg-white overflow-hidden">
      <Container>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Product Portfolio
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Innovative solutions we've built that are transforming businesses worldwide
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary-200"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {product.name}
                  </h3>
                  <motion.div
                    whileHover={{ rotate: 45, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ApperIcon 
                      name="ExternalLink" 
                      size={20} 
                      className="text-gray-400 group-hover:text-primary-500 transition-colors duration-300" 
                    />
                  </motion.div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Metrics */}
                <motion.div 
                  className="grid grid-cols-3 gap-4 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index * 0.15) + 0.3 }}
                >
                  {product.metrics.map((metric, metricIndex) => (
                    <motion.div 
                      key={metricIndex} 
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: (index * 0.15) + 0.5 + (metricIndex * 0.1)
                      }}
                    >
                      <motion.div 
                        className="text-2xl font-bold text-primary-500 mb-1"
                        whileHover={{ scale: 1.1 }}
                      >
                        {metric.value}
                      </motion.div>
                      <div className="text-xs text-gray-500 font-medium">
                        {metric.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-2 font-medium">Technologies:</div>
                  <div className="flex flex-wrap gap-2">
                    {product.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.3, 
                          delay: (index * 0.15) + 0.7 + (techIndex * 0.05)
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button 
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 px-4 rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 font-semibold group/btn relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  <span className="flex items-center justify-center relative z-10">
                    Learn More
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                    >
                      <ApperIcon 
                        name="ArrowRight" 
                        size={16} 
                        className="group-hover/btn:translate-x-1 transition-transform duration-300" 
                      />
                    </motion.div>
                  </span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p 
            className="text-lg text-gray-600 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ready to build your next innovative solution?
          </motion.p>
          <motion.button 
            className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-4 px-8 rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Start Your Project</span>
          </motion.button>
        </motion.div>
      </Container>
    </section>
  );
}

export default ProductPortfolio;