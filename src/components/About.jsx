import { Tooltip } from "@mantine/core";
import Pic from "../assets/coder.png";
import StackIcon from "./StackIcons";
import React from "../assets/icons/react.svg";
import { motion } from "framer-motion";

const About = () => {
  const techStack = [
    {
      icon: "https://img.icons8.com/color/48/javascript--v1.png",
      label: "JavaScript",
    },
    { icon: React, label: "React JS" },
    { icon: "https://img.icons8.com/fluency/48/node-js.png", label: "Node.js" },
    { icon: "https://img.icons8.com/color/48/nextjs.png", label: "Next JS" },
    {
      icon: "https://img.icons8.com/ios/50/20C997/php-logo.png",
      label: "PHP",
    },
    {
      icon: "https://img.icons8.com/color/48/python--v1.png",
      label: "Python",
    },
    { icon: "https://img.icons8.com/color/48/html-5--v1.png", label: "HTML" },
    { icon: "https://img.icons8.com/fluency/96/css3.png", label: "CSS" },
    {
      icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png",
      label: "MongoDB",
    },
    {
      icon: "https://img.icons8.com/fluency/96/mysql-logo.png",
      label: "MySQL",
    },
    {
      icon: "https://img.icons8.com/color/48/git.png",
      label: "Git",
    },
    {
      icon: "https://img.icons8.com/color/48/react-native.png",
      label: "React Native",
    },
    {
      icon: "https://img.icons8.com/color-glass/48/bootstrap.png",
      label: "Bootstrap",
    },
    {
      icon: "https://img.icons8.com/color/48/tailwindcss.png",
      label: "TailwindCSS",
    },
    // {
    //   icon: "https://img.icons8.com/color/48/tailwindcss.png",
    //   label: "TailwindCSS",
    // },
    // {
    //   icon: "https://img.icons8.com/color/48/tailwindcss.png",
    //   label: "TailwindCSS",
    // },
    // {
    //   icon: "https://img.icons8.com/color/48/tailwindcss.png",
    //   label: "TailwindCSS",
    // },
    // Add more tech stack items here20C997
  ];

  const orbitSizeLg = 130; // Orbit size around the avatar
  const orbitSizeSm = 103;

  const offsetX = 130; // Horizontal offset from the center
  const offsetY = 60; // Vertical offset from the center

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:space-x-10">
      <div>
        <Tooltip
          label="hey, there!"
          color="teal"
          position="top-end"
          offset={{ mainAxis: -10, crossAxis: 0 }}
          transitionProps={{ transition: "pop-top-left", duration: 300 }}
          openDelay={200}
        >
          <img
            src={Pic}
            alt="Coder"
            className="h-36 md:h-72 transition duration-300 ease-in-out hover:scale-105 hover:grayscale"
          />
        </Tooltip>
      </div>
      <div className="md:hidden absolute   justify-center items-center  w-[300px] h-[300px]">
        {techStack.map((tech, index, array) => {
          const angle = (index / array.length) * 2 * Math.PI;
          const x = orbitSizeSm * Math.cos(angle) + offsetX; // X position for orbit
          const y = orbitSizeSm * Math.sin(angle) + offsetY; // Y position for orbit

          return (
            <motion.div
              key={tech.label}
              className="absolute"
              style={{ left: `${x}px`, top: `${y}px` }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            >
              <StackIcon icon={tech.icon} label={tech.label} />
            </motion.div>
          );
        })}
      </div>

      {/* Regular layout for medium and larger screens */}

      <div className="hidden md:flex flex-wrap justify-evenly items-center gap-4 w-96">
        {techStack.map((tech) => (
          <StackIcon key={tech.label} icon={tech.icon} label={tech.label} />
        ))}
        <p className="font-normal text-gray-600  overline pt-2 ">
          My Tech Stacks
        </p>
      </div>
    </div>
  );
};

export default About;
