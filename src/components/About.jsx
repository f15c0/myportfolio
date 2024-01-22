import { Avatar } from "@mantine/core";
import Pic from "../assets/me/p5.jpg";

const About = () => {
  return (
    <div className="flex justify-center">
      {/* <h3 className="title text-emerald-800">About Me</h3> */}
      <div className="flex justify-center items-center space-x-10">
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

        <p className="ml-10 w-1/2 text-justify">
          I am an adaptable Software Engineer / Blockchain Developer with over
          five (5) years of experience, skilled in delivering high-quality
          software solutions while navigating complex technical challenges. With
          a strong proficiency in multiple programming languages and frameworks,
          database management, hardware maintenance, networking configuration,
          and security management, with strong problem-solving and communication
          skills, I collaborate effectively with stakeholders to deliver
          innovative and efficient solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
