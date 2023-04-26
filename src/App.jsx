import "./App.css";
import { MantineProvider, Text } from "@mantine/core";
import { HeaderMiddle } from "./components/Header";
import Jumbo from "./components/Jumbo";
import ParticlesBg from "./components/ParticlesBg";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {/* <ParticlesBg /> */}
      <HeaderMiddle />
      <Jumbo />
    </MantineProvider>
  );
}

export default App;
