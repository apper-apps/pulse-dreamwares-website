import React from 'react';
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
    <section id="portfolio" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Product Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative solutions we've built that are transforming businesses worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {product.name}
                  </h3>
                  <ApperIcon 
                    name="ExternalLink" 
                    size={20} 
                    className="text-gray-400 group-hover:text-primary-500 transition-colors duration-300" 
                  />
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {product.metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-primary-500 mb-1">
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-500 font-medium">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-2 font-medium">Technologies:</div>
                  <div className="flex flex-wrap gap-2">
                    {product.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 px-4 rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 font-semibold group/btn">
                  <span className="flex items-center justify-center">
                    Learn More
                    <ApperIcon 
                      name="ArrowRight" 
                      size={16} 
                      className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" 
                    />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to build your next innovative solution?
          </p>
          <button className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-4 px-8 rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl">
            Start Your Project
          </button>
        </div>
      </Container>
    </section>
  );
}

export default ProductPortfolio;