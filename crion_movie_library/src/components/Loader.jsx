import { Flex, Image } from "@chakra-ui/react";
import React from "react";

const Loader = ({ src }) => {
  return (
    <Flex
      top={"120px"}
      bg={"white"}
      justify={"center"}
      alignItems={"center"}
      w={"100%"}
      position={"fixed"}
      h={"100%"}
      zIndex={10}
    >
      <Image w={"100px"} src={src}></Image>
    </Flex>
  );
};

export default Loader;
