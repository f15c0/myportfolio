import { Modal, Group, Button, Textarea, Text } from "@mantine/core";
import { useMantineTheme, TextInput, MultiSelect } from "@mantine/core";

const HireMe = ({ opened, open, close }) => {
  const theme = useMantineTheme();

  //
  //Select Data
  const data = [
    { value: "web-application", label: "Web Application" },
    { value: "mobile-app", label: "Mobile Application (IOS & Android)" },
    { value: "Desktop-app", label: "Desktop App" },
    { value: "ui/ux-design", label: "UI/UX Design" },
    { value: "branding", label: "Branding" },
  ];

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
      <form>
        <Group className="py-3 ">
          <TextInput
            placeholder="your name"
            label="Name"
            required
            className="w-full "
            radius="md"
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            type="email"
            required
            className="w-full"
            radius="md"
          />
        </Group>
        <Group className="py-3">
          <MultiSelect
            data={data}
            label="What project would you prefer i work on ?"
            searchable
            placeholder="Select your option"
            required
            className="w-full "
            radius="md"
          />
        </Group>
        <Group className="py-3">
          <Textarea
            placeholder="Gist me about your project"
            label="Describe your project"
            required
            className="w-full "
            radius="md"
          />
        </Group>
        <Group className="py-3" position="apart">
          <Button type="submit" radius="md">
            Engage!
          </Button>
          <Button variant="light" color="red">
            Cancel
          </Button>
        </Group>
      </form>
    </Modal>
  );
};

export default HireMe;
