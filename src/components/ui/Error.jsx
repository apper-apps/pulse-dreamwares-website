import React from "react";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const Error = ({ 
  title = "Something went wrong", 
  message = "We encountered an error while loading the content. Please try again.", 
  onRetry,
  className 
}) => {
  return (
    <div className={cn(
      "flex flex-col items-center justify-center min-h-[400px] p-8 text-center",
      className
    )}>
      <div className="bg-gradient-to-br from-red-500 to-red-600 p-4 rounded-2xl mb-6 shadow-lg">
        <ApperIcon name="AlertTriangle" size={48} className="text-white" />
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
        {message}
      </p>
      
      {onRetry && (
        <Button 
          variant="primary" 
          size="lg"
          onClick={onRetry}
          className="shadow-lg hover:shadow-xl"
        >
          <ApperIcon name="RefreshCw" size={20} className="mr-2" />
          Try Again
        </Button>
      )}
    </div>
  );
};

export default Error;