import React from "react";

export const Loading = () => {
  let circleCommonClasses = "h-2.5 w-2.5 rounded-full bg-cyan-500";
  return (
    <div className="flex justify-center mt-10">
      <div className={`${circleCommonClasses} mr-1`}></div>
      <div className={`${circleCommonClasses} mr-1`}></div>
      <div className={`${circleCommonClasses}`}></div>
    </div>
  );
};
