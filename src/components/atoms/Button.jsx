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
primary: "bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 shadow-lg hover:shadow-4xl hover:shadow-red-500/30 hover:scale-110 focus:ring-red-500 hover:-translate-y-3 transition-all duration-500 transform-gpu",
    secondary: "bg-gray-800 text-red-400 border-2 border-red-500 hover:bg-gray-700 hover:border-red-400 shadow-md hover:shadow-2xl hover:shadow-red-500/20 hover:scale-110 focus:ring-red-500 hover:-translate-y-2 transition-all duration-300",
    outline: "border-2 border-gray-600 text-gray-300 hover:border-red-500 hover:text-red-400 hover:bg-gray-800 hover:scale-108 focus:ring-red-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/20 transition-all duration-300"
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