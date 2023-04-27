import {
  Button,
  Container,
  Divider,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { gsap } from "gsap";
import Linkedin from "../assets/linkedin.svg";
import { BsLinkedin, BsCloudDownload } from "react-icons/bs";
import { useLayoutEffect, useRef } from "react";
import TypingText from "./TypingText";
import { useDisclosure } from "@mantine/hooks";
import HireMe from "./HireModal";

const Jumbo = () => {
  const staticText = "Hello there, I'm  ";
  const texts = [
    "a Software Engineer.",
    "a Full-Stack Developer.",
    "a Freelancer.",
  ];

  const theme = useMantineTheme();
  const whoamiRef = useRef(null);

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <section>
      <Container
        size="lg"
        className="bg-gray-100 flex flex-col justify-between"
        style={{ minHeight: "60vh" }}
      >
        <div className="grid grid-cols-2">
          <div className="text-center col-span-2 justify-center items-center">
            <Text
              className="text-xl font-light pt-3"
              color={theme.primaryColor}
            >
              Hello there, I'm Dennis K.
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
                  <TypingText staticText="I'm" texts={texts} />
                </Text>
              </Text>
            </div>
          </div>

          {/* <div className="text-center py-3 col-span-2">
            <div>
              <Text
                className=" text-5xl font-extrabold text-center"
                ref={whoamiRef}
              >
                <Text
                  color={theme.primaryColor}
                  className=" text-center flex justify-center"
                >
                  <TypingText staticText="I'm" texts={texts} />
                </Text>
              </Text>
            </div>
          </div> */}
        </div>
        <div className="py-3  space-x-10 flex items-center justify-center">
          <Button
            leftIcon={<BsLinkedin className="text-xl rounded-sm " />}
            className="rounded-3xl text-sm "
          >
            Let's Connect!
          </Button>
          <Button
            variant="outline"
            className="rounded-3xl hover:shadow-sm text-sm "
            onClick={open}
          >
            Hire me
          </Button>
          <Button
            rightIcon={<BsCloudDownload className="text-xl " />}
            color="gray"
            variant="light"
            className="rounded-3xl shadow-md text-sm "
          >
            Download Resume
          </Button>
        </div>
      </Container>
      {/* <Divider label="About Me" /> */}
      <HireMe opened={opened} close={close} open={open} />
    </section>
  );
};

export default Jumbo;
