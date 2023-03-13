import "./App.css";
import { MantineProvider, Text } from "@mantine/core";
import { HeaderMiddle } from "./components/Header";
import Jumbo from "./components/Jumbo";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <HeaderMiddle />
      <Jumbo />
    </MantineProvider>
  );
}

export default App;
