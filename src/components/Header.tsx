import React from "react";
import { Flex, Group, Text, Image } from "@mantine/core";
import logo from "../assets/images/logo.jpg";
import styles from "../assets/css/Header.module.css";
function Header() {
  return (
    <>
      <Flex
        mih={60}
        w="100%"
        bg="black"
        gap="sm"
        justify="flex-start"
        align="center"
        direction="row"
        wrap="wrap"
        className={styles.header}
      >
        <Group className={styles.group}>
          <Flex w={60} pl={10}>
            <Image src={logo}  alt="Logo" radius="lg" />
          </Flex>

          <Text size="xl" color="white">
            AUBG FOOTBALL
          </Text>
        </Group>
      </Flex>
    </>
  );
}

export default Header;