import React from "react";

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Input,
  IconButton,
  useColorModeValue,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
// import { ReactNode } from "react";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  const { colorMode } = useColorMode();

  return (
    <Box
      bg={useColorModeValue("lightblue", "darkslategray")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Text fontSize={"sm"}>© 2023 Crion Technologies. All rights reserved</Text>
            <Box>
              <Image
                w={"90%"}
                src={
                  colorMode === "light"
                    ? "https://www.criontech.com/wp/wp-content/uploads/2019/07/CrionLogo2.png"
                    : "https://www.criontech.com/wp/wp-content/uploads/2019/07/logoWhite.png"
                }
                style={{ height: "80px" }}
              />
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>About us</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Contact us</Link>
            <Link href={"#"}>Pricing</Link>
            <Link href={"#"}>Testimonials</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link to="/about">Help Center</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Legal</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Status</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                bg={useColorModeValue("darkslategray")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.200",
                }}
              />
              <IconButton
                bg={useColorModeValue("lightblue", "darkslategray")}
                color={useColorModeValue("white", "gray.800")}
                _hover={{
                  bg: "green.600",
                }}
                aria-label="Subscribe"
                icon={<EmailIcon />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
