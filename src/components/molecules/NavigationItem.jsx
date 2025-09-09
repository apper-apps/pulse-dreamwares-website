import React from "react";
import { cn } from "@/utils/cn";

const NavigationItem = ({ label, href, active = false, onClick, className }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
    if (href && href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-primary-50 hover:text-primary-600 hover:scale-105",
        active ? "text-primary-600 bg-primary-50" : "text-gray-700",
        className
      )}
    >
      {label}
    </a>
  );
};

export default NavigationItem;