import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Container = forwardRef(({ 
  children, 
  size = "default",
  className, 
  ...props 
}, ref) => {
  const baseStyles = "mx-auto px-4 sm:px-6 lg:px-8";
  
  const sizes = {
    sm: "max-w-4xl",
    default: "max-w-7xl",
    lg: "max-w-8xl",
    full: "max-w-full"
  };
  
  return (
    <div
      ref={ref}
      className={cn(
        baseStyles,
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Container.displayName = "Container";

export default Container;