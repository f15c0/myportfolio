export const particleBgColors = () => {
  // for dark use atom one dark, for light use CLRS
  const background = (darkMode = false) => (darkMode ? "#0d2538" : "#f4fff8");
  const particle = (darkMode = false) => (darkMode ? "#c678dd" : "#38761d");
  const links = (darkMode = false) => (darkMode ? "#98c379" : "#8fce00");

  return {
    background,
    particle,
    links,
  };
};
