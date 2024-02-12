import { Modal, Group, Button, Textarea, Text } from "@mantine/core";
import { useMantineTheme, TextInput, Loader } from "@mantine/core";
import axios from "axios";
import { useState } from "react";
import { SiBuymeacoffee } from "react-icons/si";

const BuyMeCoffee = ({ opened, open, close }) => {
  const theme = useMantineTheme();
  const [loading, setLoading] = useState(false); //Loading state

  //Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const paymentDetails = {
      name: formData.get("name"),
      email: formData.get("email"),
      amount: formData.get("amount"),
      message: formData.get("message"),

      // Hardcoded values
      state: "starter",
      accountnumber: "341220512110",
      currency: "GHS",
      reference: "",
      callback: "/callback",
      reusable: "true",
    };

    console.log(paymentDetails);
    try {
      const response = await axios.post(
        "http://localhost/pokemon/processPayment.php",
        paymentDetails
      );
      const { data } = response;

      if (data.status == true) {
        // Redirect user to authorization URL
        window.location.href = data.data.authorization_url;
        console.log(data);
        form.reset();
        close();
      } else {
        // Handle error
        console.error("Payment initiation Failed:", data.message);
      }
    } catch (error) {
      console.error("Failed:", error);
    }
    setLoading(false);
  };

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
      title={
        <Text color={theme.primaryColor}>
          <SiBuymeacoffee size={16} /> Buy me a Coffee{" "}
        </Text>
      }
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
            name="name"
            required
            className="w-full "
            radius="md"
            size="md"
          />
          <TextInput
            label="Email"
            placeholder="Your email 📧"
            type="email"
            name="email"
            required
            className="w-full"
            radius="md"
            size="md"
          />
        </Group>
        <TextInput
          label="Amount (GHS)"
          placeholder="¢5"
          name="amount"
          type="number"
          required
        />
        <Group className="py-3">
          <Textarea
            placeholder="Leave a message 📝"
            name="message"
            label="Leave a message"
            className="w-full "
            radius="md"
            size="md"
          />
        </Group>
        <Group className="py-3" position="center">
          <Button
            leftIcon={<SiBuymeacoffee size={16} />}
            // variant="outline"
            type="submit"
            radius="lg"
            loading={loading}
            loaderProps={{ type: "Dots" }}
          >
            Buy!
          </Button>
        </Group>
        <Group className="" position="right">
          <Button onClick={close} variant="subtle" color="red" radius="md">
            Cancel
          </Button>
        </Group>
      </form>
    </Modal>
  );
};

export default BuyMeCoffee;
