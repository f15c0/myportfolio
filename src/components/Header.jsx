import { useState } from "react";
import {
  createStyles,
  Header,
  Group,
  ActionIcon,
  Container,
  Burger,
  rem,
  Avatar,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import Pic from "../assets/me/p5.jpg";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: rem(56),

    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start",
    },
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  social: {
    width: rem(260),

    [theme.fn.smallerThan("sm")]: {
      width: "auto",
      marginLeft: "auto",
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

const links = [
  {
    link: "/about",
    label: "About",
  },
  {
    link: "/works",
    label: "Experience",
  },
  {
    link: "/projects",
    label: "Projects",
  },
  {
    link: "/contact",
    label: "Contact",
  },
];

export function HeaderMiddle() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(null);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={56} mb={0}>
      <Container className={classes.inner}>
        <Burger
          opened={opened}
          onClick={toggle}
          size="sm"
          className={classes.burger}
        />

        <Group className={classes.links} spacing={10}>
          {items}
        </Group>
        <div className="flex justify-center items-center md:gap-3 gap-2">
          <Avatar
            src={Pic}
            alt="no image here"
            color="indigo"
            size={24}
            radius={32}
            className="transition duration-300 ease-in-out hover:scale-105 hover:grayscale"
            imageProps={{
              style: {
                objectFit: "cover",
                objectPosition: "top",
              },
            }}
          />
          <p className="cursor-pointer hover:text-gray-400">
            <span className="font-bold">Fisco</span>
          </p>
        </div>
        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size="1.1rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size="1.1rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size="1.1rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  );
}
