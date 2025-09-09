import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";

const ValueCard = ({ icon, title, description, className }) => {
  return (
    <motion.div 
      className={cn(
        "bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary-200 group cursor-pointer relative overflow-hidden",
        className
      )}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Background gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />
      
      <div className="flex flex-col items-center text-center space-y-4 relative z-10">
        <motion.div 
          className="bg-gradient-to-br from-primary-500 to-purple-500 p-4 rounded-2xl shadow-lg group-hover:shadow-xl"
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -10, 10, -10, 0],
            transition: { 
              scale: { duration: 0.2 },
              rotate: { duration: 0.5, ease: "easeInOut" }
            }
          }}
        >
          <ApperIcon name={icon} size={32} className="text-white" />
        </motion.div>
        
        <motion.h3 
          className="text-xl font-bold text-gray-900 leading-tight group-hover:text-primary-600 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {description}
        </motion.p>
      </div>
      
      {/* Subtle shine effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
        initial={false}
        whileHover={{
          background: [
            "linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)",
            "linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)"
          ],
          transition: { duration: 0.6, ease: "easeInOut" }
        }}
      />
    </motion.div>
  );
};
export default ValueCard;