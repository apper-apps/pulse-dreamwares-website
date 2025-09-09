import React from "react";
import { cn } from "@/utils/cn";

const Loading = ({ className }) => {
  return (
    <div className={cn("animate-pulse space-y-8", className)}>
      {/* Header Skeleton */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-300 rounded-xl"></div>
          <div className="w-32 h-6 bg-gray-300 rounded"></div>
        </div>
        <div className="hidden md:flex space-x-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-16 h-6 bg-gray-300 rounded"></div>
          ))}
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <div className="text-center space-y-6 py-20">
        <div className="space-y-4">
          <div className="w-3/4 h-12 bg-gradient-to-r from-gray-300 to-gray-200 rounded mx-auto"></div>
          <div className="w-2/3 h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded mx-auto"></div>
        </div>
        <div className="w-1/2 h-6 bg-gray-200 rounded mx-auto"></div>
        <div className="w-48 h-14 bg-gradient-to-r from-gray-300 to-gray-200 rounded-lg mx-auto"></div>
      </div>

      {/* Value Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-lg space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-200 rounded-2xl mx-auto"></div>
            <div className="w-3/4 h-6 bg-gray-300 rounded mx-auto"></div>
            <div className="space-y-2">
              <div className="w-full h-4 bg-gray-200 rounded"></div>
              <div className="w-5/6 h-4 bg-gray-200 rounded"></div>
              <div className="w-4/6 h-4 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;