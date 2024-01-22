import { Modal, Group, Button, Textarea, Text } from "@mantine/core";
import { useMantineTheme, TextInput, MultiSelect } from "@mantine/core";

const HireMe = ({ opened, open, close }) => {
  const theme = useMantineTheme();

  //Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  //Select Data
  const data = [
    { value: "web-application", label: "Web Application 🌎" },
    { value: "mobile-app", label: "Mobile Application (IOS & Android)📱" },
    { value: "Desktop-app", label: "Desktop App 🖥️" },
    { value: "ui/ux-design", label: "UI/UX Design 🎨" },
    { value: "branding", label: "Branding" },
  ];

  return (
    <Modal
      opened={opened}
      size="md"
      withCloseButton={false}
      classNames={{
        header: "shadow-lg bg-gray-100 flex justify-center items-center ",
        title: "text-center text-xl font-bold",
        body: " pt-3",
      }}
      onClose={close}
      title={<Text color={theme.primaryColor}>Talk to me🗣️ ...🧑🏽‍💻</Text>}
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
      <form onSubmit={handleSubmit}>
        <Group className="py-3 ">
          <TextInput
            placeholder="your name 🧑"
            label="Name"
            required
            className="w-full "
            radius="md"
            size="md"
          />
          <TextInput
            label="Email"
            placeholder="Your email 📧"
            type="email"
            required
            className="w-full"
            radius="md"
            size="md"
          />
        </Group>
        <Group className="py-3">
          <MultiSelect
            data={data}
            label="What project would you prefer i work on ?"
            description="Feel free to select multiple options if it applies😊"
            searchable
            placeholder="Select your option"
            required
            className="w-full "
            radius="md"
          />
        </Group>
        <Group className="py-3">
          <Textarea
            placeholder="Gist me about your project 🖆"
            label="Describe your project"
            required
            className="w-full "
            radius="md"
            size="md"
          />
        </Group>
        <Group className="py-3" position="apart">
          <Button variant="light" type="submit" radius="md">
            Engage!
          </Button>
          <Button onClick={close} variant="subtle" color="red" radius="md">
            Cancel
          </Button>
        </Group>
      </form>
    </Modal>
  );
};

export default HireMe;
