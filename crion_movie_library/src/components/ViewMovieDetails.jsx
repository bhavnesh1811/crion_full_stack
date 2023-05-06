import React from "react";
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Heading,
  useColorMode,
  Flex,
  Image,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

const ViewMovieDetails = ({
  poster,
  title,
  director,
  year,
  genre,
  cast,
  info,
  _id,
  ratings,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <ViewIcon
        border={"1px solid teal"}
        borderRadius={"8px"}
        p={"5px"}
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          backgroundColor={
            colorMode === "light" ? "lightblue" : "darkslategrey"
          }
          color={colorMode === "light" ? "blue" : "white"}
        >
          <ModalHeader textAlign={"center"}>View Movie Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              direction={"column"}
              boxShadow={"rgba(0,0,0,0.35)0px 5px 15px"}
              p={"20px"}
              borderRadius={"8px"}
              backgroundColor={
                colorMode === "light" ? "lightblue" : "darkslategrey"
              }
              color={colorMode === "light" ? "blue" : "white"}
            >
              <Box>
                <Image borderRadius={"8px"} py={"8px"} src={poster} alt={_id} />
              </Box>
              <Box>
                <Heading as={"h4"} size={"md"} py={"8px"} fontSize={"18px"}>
                  Title :- {title}
                </Heading>
                <Heading as={"h4"} size={"md"} py={"8px"} fontSize={"18px"}>
                  Director :- {director}
                </Heading>
                <Heading as={"h4"} size={"md"} py={"8px"} fontSize={"18px"}>
                  Released Year :- {year}
                </Heading>
                <Heading as={"h4"} size={"md"} py={"8px"} fontSize={"18px"}>
                  Genre :- {genre}
                </Heading>
                <Heading as={"h4"} size={"md"}>
                  Ratings :- {ratings}
                </Heading>
                <Heading as={"h4"} size={"md"} py={"8px"} fontSize={"18px"}>
                  Cast :- {cast}
                </Heading>
                <Heading as={"h4"} size={"md"} py={"8px"} fontSize={"18px"}>
                  Synopsis :- {info}
                </Heading>
              </Box>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ViewMovieDetails;
