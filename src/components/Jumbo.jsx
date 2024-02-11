import {
  Button,
  Container,
  Divider,
  Text,
  useMantineTheme,
} from "@mantine/core";

import Coffee from "../assets/coffee.svg";
import { BsLinkedin, BsCloudDownload } from "react-icons/bs";
import { useLayoutEffect, useRef, useState } from "react";
import TypingText from "./TypingText";
import { useDisclosure } from "@mantine/hooks";
import HireMe from "./HireModal";
import BuyMeCoffee from "./BuymeCoffee";
import CV from "../assets/Dennis_Agbokpe_CV.pdf";
import About from "./About";

const Jumbo = () => {
  ///Texts
  const texts = ["Software Engineer.", "Full-Stack Developer.", "Freelancer."];

  ///Profile LInks
  const linkedIn = "https://www.linkedin.com/in/dennis-agbokpe-b1b4241aa/";

  ///Theme
  const theme = useMantineTheme();

  ///Refs
  const whoamiRef = useRef(null);

  ///Effects & Hooks
  const [opened, { open, close }] = useDisclosure(false);
  const [coffeeModalOpened, setCoffeeModalOpened] = useState(false);

  return (
    <section>
      <Container
        size="lg"
        className="bg-gradient-to-r from-white to-gray-50  flex flex-col justify-between"
        style={{
          minHeight: "60vh",
        }}
      >
        <div className="grid grid-cols-2">
          <div className="text-center col-span-2 justify-center items-center">
            <Text
              className="md:text-xl font-light pt-3"
              color={theme.primaryColor}
            >
              Hello there👋🏽, I'm Dennis K.
            </Text>
            <div>
              <Text
                className=" text-5xl font-extrabold text-center"
                ref={whoamiRef}
              >
                <Text
                  color={theme.primaryColor}
                  className=" text-center flex justify-center"
                >
                  <TypingText staticText="I'm a" texts={texts} />
                </Text>
              </Text>
            </div>
          </div>
          {/* Something here */}
        </div>
        <div className=" flex items-center justify-center">
          <About />
        </div>
        <div className="flex justify-end items-center mt-4">
          <img
            src={Coffee}
            alt="By me a coffee"
            onClick={() => setCoffeeModalOpened(true)}
            className="h-8 md:h-10 hover:scale-105 duration-150 ease-in-out transform shadow-sm  cursor-pointer"
          />
        </div>
        <div className="py-3 whitespace-nowrap px-12 md:space-x-10 flex items-center justify-center ">
          <a href={linkedIn} target="_blank" rel="noopener noreferrer">
            <Button
              variant="default"
              leftIcon={<BsLinkedin className="text-xl rounded-sm " />}
              className="rounded-3xl text-sm "
            >
              Let's Connect!
            </Button>
          </a>
          <Button
            className="rounded-3xl hover:shadow-sm text-sm "
            onClick={open}
          >
            Hire me
          </Button>
          <a href={CV}>
            <Button
              rightIcon={<BsCloudDownload className="text-xl " />}
              color="gray"
              variant="light"
              className="rounded-3xl shadow-md text-sm "
            >
              Download Resume
            </Button>
          </a>
        </div>
      </Container>
      {/* <Divider label="About Me" /> */}
      <HireMe opened={opened} close={close} open={open} />
      <BuyMeCoffee
        opened={coffeeModalOpened}
        close={() => setCoffeeModalOpened(false)} //close
      />
    </section>
  );
};

export default Jumbo;
