import { useState } from "react";
import { Group, Avatar } from "@mantine/core";
import Lottie from "react-lottie-player";
import animationData from "./assets/code.json";
import Volunteer from "./assets/volunteer.png";

const Experience = () => {
  const [openCard, setOpenCard] = useState(null);

  const getCardClasses = (card) => {
    const baseClasses =
      "w-72 md:w-96 bg-white p-4 md:p-6 shadow-lg transition duration-300 cursor-pointer";
    const tiltClasses =
      card === "work"
        ? "transform -rotate-6 hover:rotate-0"
        : "transform rotate-12 hover:rotate-0";
    const activeClasses =
      " ring-offset-2 scale-105 shadow-md shadow-emerald-200";
    return `${baseClasses} ${tiltClasses} ${
      openCard === card ? activeClasses : ""
    }`;
  };

  const content = {
    work: (
      <div>
        <h2 className="text-xl font-bold">Work Experience</h2>
        <p>Details of my work experiences...</p>
        {/* Include more detailed content here */}
      </div>
    ),
    volunteer: (
      <div>
        <h2 className="text-xl font-bold">Volunteership Experience</h2>
        <p>Details of my volunteer experiences...</p>
        {/* Include more detailed content here */}
      </div>
    ),
  };

  return (
    <div className="text-center pt-8">
      <h3 className="text-emerald-800 text-lg md:text-xl">Experiences</h3>
      <p className="text-gray-500 text-md md:text-lg">
        Work, Internship & Volunteership
      </p>

      <div className="flex flex-wrap justify-center gap-10 py-10 mt-10 space-x-28">
        <div
          className={getCardClasses("work")}
          onClick={() => setOpenCard("work")}
        >
          <h1 className="text-md md:text-lg font-bold">Work</h1>
          <Group wrap="nowrap" position="center">
            <Lottie
              loop
              animationData={animationData}
              play
              style={{ width: 128, height: 128 }}
            />
          </Group>
          <p className="text-sm md:text-base">View my work experiences...</p>
        </div>
        <div
          className={getCardClasses("volunteer")}
          onClick={() => setOpenCard("volunteer")}
        >
          <h1 className="text-md md:text-lg font-bold">VolunteerShip</h1>
          <Group wrap="nowrap" position="center">
            <img src={Volunteer} alt="Volunteer" className="h-32 py-4" />
          </Group>
          <p className="text-sm md:text-base">Yep, I volunteered here...</p>
        </div>
      </div>

      <section className="mt-10">
        {openCard === "work" && content.work}
        {openCard === "volunteer" && content.volunteer}
      </section>
    </div>
  );
};

export default Experience;
