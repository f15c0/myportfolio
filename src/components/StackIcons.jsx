import React from "react";

const StackIcon = ({ icon, label, style }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center bg-white hover:scale-110 transition-transform duration-300 overflow-hidden">
        <img
          src={icon}
          alt={label}
          className="md:w-10 md:h-10 w-6 h-6 rotating"
        />
      </div>
      <p className="mt-2 text-sm hidden md:block">{label}</p>
    </div>
  );
};

export default StackIcon;
