import { Avatar } from "@mantine/core";
import Pic from "../assets/me/p5.jpg";
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
      icon: "https://img.icons8.com/fluency/96/mysql-logo.png",
      label: "MySQL",
    },
    {
      icon: "https://img.icons8.com/fluency/96/mysql-logo.png",
      label: "MySQL",
    },
    {
      icon: "https://img.icons8.com/fluency/96/mysql-logo.png",
      label: "MySQL",
    },
    {
      icon: "https://img.icons8.com/fluency/96/mysql-logo.png",
      label: "MySQL",
    },
    // Add more tech stack items here20C997
  ];

  const orbitSizeLg = 130; // Orbit size around the avatar
  const orbitSizeSm = 103;

  const offsetX = 150; // Horizontal offset from the center
  const offsetY = 150; // Vertical offset from the center

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
      <div>
        <Avatar
          src={Pic}
          alt="no image here"
          color="indigo"
          size={148}
          radius={148}
          className="shadow-gray-500 shadow-md transition duration-300 ease-in-out hover:scale-105 hover:grayscale"
          imageProps={{
            style: {
              objectFit: "cover",
              objectPosition: "top",
            },
          }}
        />
      </div>
      <div className="md:hidden absolute md:relative inset-0 justify-center items-center  w-[300px] h-[300px]">
        {/* Adjust the size as needed */}
        {techStack.map((tech, index, array) => {
          const angle = (index / array.length) * 2 * Math.PI;
          const x = orbitSizeSm * Math.cos(angle) + 206; // X position for orbit
          const y = orbitSizeSm * Math.sin(angle) + 315; // Y position for orbit

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
      <div className="hidden absolute md:relative inset-0 md:flex justify-center items-center  w-[300px] h-[300px]">
        {techStack.map((tech, index, array) => {
          const angle = (index / array.length) * 2 * Math.PI;
          const x = orbitSizeLg * Math.cos(angle) + offsetX; // X position for orbit
          const y = orbitSizeLg * Math.sin(angle) + offsetY; // Y position for orbit
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
        <div className="flex justify-center items-center pl-10 font-bold overline text-emerald-800">
          My Tech Stacks
        </div>
      </div>
    </div>
  );
};

export default About;
