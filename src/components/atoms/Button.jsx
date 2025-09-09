import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Button = forwardRef(({ 
  children, 
  variant = "primary", 
  size = "md", 
  className, 
  ...props 
}, ref) => {
const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-r from-success-500 to-success-600 text-white hover:from-success-600 hover:to-success-700 shadow-lg hover:shadow-2xl hover:scale-105 focus:ring-success-500 hover:-translate-y-1",
    secondary: "bg-white text-primary-600 border-2 border-primary-500 hover:bg-primary-50 hover:border-primary-600 shadow-md hover:shadow-xl hover:scale-105 focus:ring-primary-500 hover:-translate-y-1",
secondary: "bg-white text-primary-600 border-2 border-primary-500 hover:bg-primary-50 hover:border-primary-600 shadow-md hover:shadow-xl hover:scale-105 focus:ring-primary-500 hover:-translate-y-1",
    outline: "border-2 border-gray-300 text-gray-700 hover:border-primary-500 hover:text-primary-600 hover:bg-primary-50 hover:scale-105 focus:ring-primary-500 hover:-translate-y-1 hover:shadow-lg"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl"
  };
  
  return (
    <button
      ref={ref}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;