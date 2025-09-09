import React from "react";
import Container from "@/components/atoms/Container";
import ValueCard from "@/components/molecules/ValueCard";

const TargetIndustries = () => {
  const industries = [
    {
      id: "1",
      icon: "ShoppingCart",
      title: "E-commerce",
      description: "Custom online stores, inventory management systems, payment gateways, and mobile shopping apps that drive sales and enhance customer experience."
    },
    {
      id: "2", 
      icon: "Cloud",
      title: "SaaS Platforms",
      description: "Scalable software solutions, user dashboards, subscription management, API integrations, and multi-tenant architectures for growing businesses."
    },
    {
      id: "3",
      icon: "Heart",
      title: "Healthcare",
      description: "HIPAA-compliant patient portals, telemedicine platforms, appointment systems, and health data management solutions for modern healthcare providers."
    },
    {
      id: "4",
      icon: "CreditCard",
      title: "FinTech",
      description: "Secure payment processing, digital wallets, lending platforms, trading interfaces, and compliance-ready financial management systems."
    },
    {
      id: "5",
      icon: "GraduationCap",
      title: "EdTech",
      description: "Learning management systems, online course platforms, student progress tracking, and interactive educational tools for institutions and educators."
    },
    {
      id: "6",
      icon: "Home",
      title: "Real Estate",
      description: "Property management systems, virtual tour platforms, CRM solutions, and marketplace applications for agents, brokers, and property managers."
    },
    {
      id: "7",
      icon: "Truck",
      title: "Logistics",
      description: "Supply chain management, fleet tracking, inventory optimization, and delivery management systems for efficient operations and transparency."
    },
    {
      id: "8",
      icon: "Users",
      title: "Professional Services",
      description: "Client management platforms, project tracking tools, billing systems, and workflow automation for consultancies, agencies, and service providers."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6">
            Industries We{" "}
            <span className="bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent">
              Transform
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From startups to enterprise, we deliver tailored solutions across diverse industries, 
            understanding unique challenges and regulatory requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {industries.map((industry) => (
            <ValueCard
              key={industry.id}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TargetIndustries;