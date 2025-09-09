import React from "react";
import Container from "@/components/atoms/Container";
import ValueCard from "@/components/molecules/ValueCard";

const ValuePropositions = () => {
  const valueProps = [
    {
      id: "1",
      icon: "Zap",
      title: "AI-Assisted Development",
      description: "Leverage cutting-edge AI tools to accelerate development timelines by 3x while maintaining enterprise-grade code quality and best practices."
    },
    {
      id: "2", 
      icon: "Eye",
      title: "Demo-First Approach",
      description: "See your vision come to life with working prototypes before full development. Make informed decisions with tangible demonstrations."
    },
    {
      id: "3",
      icon: "Shield",
      title: "Complete Ownership",
      description: "Own 100% of your code, infrastructure, and intellectual property. No vendor lock-in, no licensing fees, no hidden dependencies."
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent">
              Dreamwares AI
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We combine advanced AI capabilities with proven development practices to deliver 
            exceptional results for non-technical founders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {valueProps.map((prop) => (
            <ValueCard
              key={prop.id}
              icon={prop.icon}
              title={prop.title}
              description={prop.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ValuePropositions;