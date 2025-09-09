import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";

const Logo = forwardRef(({ 
  size = "md",
  showText = true,
  className, 
  ...props 
}, ref) => {
  const sizes = {
    sm: {
      icon: 24,
      text: "text-lg"
    },
    md: {
      icon: 32,
      text: "text-xl"
    },
    lg: {
      icon: 40,
      text: "text-2xl"
    }
  };
  
  return (
    <div
      ref={ref}
      className={cn("flex items-center gap-3", className)}
      {...props}
    >
      <div className="bg-gradient-to-br from-primary-500 to-purple-500 p-2 rounded-xl shadow-lg">
        <ApperIcon 
          name="Zap" 
          size={sizes[size].icon} 
          className="text-white" 
        />
      </div>
      {showText && (
        <span className={cn(
          "font-bold text-gray-900 tracking-tight",
          sizes[size].text
        )}>
          Dreamwares AI
        </span>
      )}
    </div>
  );
});

Logo.displayName = "Logo";

export default Logo;