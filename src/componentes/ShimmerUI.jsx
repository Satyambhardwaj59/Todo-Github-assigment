import React from "react";

const ShimmerUI = () => {
  return (
    <div className="w-[300px] h-[280px] bg-white rounded shadow-md animate-pulse">
      <div className="w-full h-[170px] bg-gray-300 rounded-t"></div>
      <div className="p-4 space-y-3">
        <div className="w-4/5 h-4 bg-gray-300 rounded"></div>
        <div className="w-3/5 h-4 bg-gray-300 rounded"></div>
        <div className="flex items-center gap-3 mt-3">
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
          <div className="w-1/2 h-3 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerUI;

