import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen w-full">
        <div className="w-16 h-16 border-4 border-amber-700 border-dashed rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;
