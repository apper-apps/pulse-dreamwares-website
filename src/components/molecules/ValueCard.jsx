import React from "react";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";

const ValueCard = ({ icon, title, description, className }) => {
  return (
    <div className={cn(
      "bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-gray-100",
      className
    )}>
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="bg-gradient-to-br from-primary-500 to-purple-500 p-4 rounded-2xl shadow-lg">
          <ApperIcon name={icon} size={32} className="text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ValueCard;