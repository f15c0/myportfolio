import "./App.css";
import { MantineProvider, Text } from "@mantine/core";
import { HeaderMiddle } from "./components/Header";
import Jumbo from "./components/Jumbo";
import ParticlesBg from "./components/ParticlesBg";
import Experience from "./Experience";

function App() {
  return (
    <MantineProvider
      theme={{
        colors: {
          primary: [
            "#e0fbf4",
            "#c2ebe1",
            "#a0dccf",
            "#7dcebf",
            "#5bc0b0",
            "#42a79a",
            "#31827a",
            "#205d53",
            "#0d392e",
            "#00150d",
          ],
        },
        primaryColor: "primary",
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <ParticlesBg />
      <HeaderMiddle />
      <Jumbo />
      <Experience />
    </MantineProvider>
  );
}

export default App;
