import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button } from "@mantine/core";
import { useMantineTheme } from "@mantine/core";

const HireMe = ({ opened, open, close }) => {
  const theme = useMantineTheme();
  //
  return (
    <Modal
      opened={opened}
      onClose={close}
      title="Talk to me ...🧑🏽‍💻"
      radius="md"
      overlayProps={{
        color:
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[4],
        opacity: 0.55,
        blur: 3,
      }}
    >
      <h3>Form Goes here</h3>
    </Modal>
  );
};

export default HireMe;
