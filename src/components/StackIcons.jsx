import React from "react";
import { motion } from "framer-motion";

const StackIcon = ({ icon, label }) => {
  // Framer Motion animation properties
  const animationProps = {
    whileHover: { scale: 1.1 }, // Scales up the icon slightly on hover
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.div className="flex flex-col items-center" {...animationProps}>
      <div className="md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center bg-white overflow-hidden">
        <img
          src={icon}
          alt={label}
          className="md:w-8 md:h-8 w-6 h-6 rotating"
        />
      </div>
      {/* <p className="mt-2 text-sm hidden md:block">{label}</p> */}
    </motion.div>
  );
};

export default StackIcon;
