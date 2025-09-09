import React from "react";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const Empty = ({ 
  title = "Nothing to see here", 
  message = "Get started by adding some content or exploring our features.", 
  actionLabel = "Get Started",
  onAction,
  icon = "Package",
  className 
}) => {
  return (
    <div className={cn(
      "flex flex-col items-center justify-center min-h-[400px] p-8 text-center",
      className
    )}>
      <div className="bg-gradient-to-br from-gray-400 to-gray-500 p-4 rounded-2xl mb-6 shadow-lg opacity-80">
        <ApperIcon name={icon} size={48} className="text-white" />
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
        {message}
      </p>
      
      {onAction && actionLabel && (
        <Button 
          variant="primary" 
          size="lg"
          onClick={onAction}
          className="shadow-lg hover:shadow-xl"
        >
          <ApperIcon name="Plus" size={20} className="mr-2" />
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default Empty;