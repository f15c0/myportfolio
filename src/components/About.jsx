import { Avatar } from "@mantine/core";
import Pic from "../assets/me/p5.jpg";

const About = () => {
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

      <p className="text-center md:text-left">
        I am an adaptable Software Engineer / Blockchain Developer with over
        {/* ... */}
      </p>
    </div>
  );
};

export default About;
