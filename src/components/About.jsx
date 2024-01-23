import { Avatar } from "@mantine/core";
import Pic from "../assets/me/p5.jpg";
import StackIcon from "./StackIcons";
import React from "../assets/icons/react.svg";

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
    // Add more tech stack items here20C997
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6 md:gap-0">
      <div className="flex justify-center">
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

      <div className="flex flex-wrap justify-center gap-4">
        {techStack.map((tech) => (
          <StackIcon key={tech.label} icon={tech.icon} label={tech.label} />
        ))}
      </div>
    </div>
  );
};

export default About;
