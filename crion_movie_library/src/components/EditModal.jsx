import React, { useState } from "react";
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
  Input,
  Stack,
  Heading,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { editMovies } from "../Redux/movies/movies.action";

const EditModal = ({
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
  const dispatch = useDispatch();
  const { colorMode } = useColorMode();
  const [buttonLoading, setButtonLoading] = useState(false);
  const [new_title, setNewTitle] = useState(title);
  const [new_url, setNewUrl] = useState(poster);
  const [new_director, setNewDirector] = useState(director);
  const [new_cast, setNewCast] = useState(cast);
  const [new_year, setNewYear] = useState(year);
  const [new_genre, setNewGenre] = useState(genre);
  const [new_ratings, setNewRatings] = useState(ratings);
  const [new_synopsis, setNewSynopsis] = useState(info);
  const toast = useToast();

  const handleEdit = (id) => {
    if (
      new_title === "" ||
      new_url === "" ||
      new_director === "" ||
      new_cast === "" ||
      new_year === "" ||
      new_genre === "" ||
      new_ratings === "" ||
      new_synopsis === ""
    ) {
      return toast({
        title: "Please fill all the details.",
        position: "top",
        description: "",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    }

    setButtonLoading(true);

    let obj = {
      poster: new_url,
      title: new_title,
      director: new_director,
      cast: new_cast,
      year: new_year,
      genre: new_genre,
      info: new_synopsis,
      ratings: +new_ratings,
    };

    // console.log(obj);
    dispatch(editMovies(obj, id));
    setButtonLoading(false);
    return toast({
      title: "Movie Details Updated",
      position: "top",
      description: "",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <EditIcon
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
          <ModalHeader textAlign={"center"}>Edit Movie</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box w={"90%"} m={"20px 20px"}>
              <Stack
                spacing={3}
                boxShadow={"rgba(0,0,0,0.35)0px 5px 15px"}
                p={"20px"}
                backgroundColor={
                  colorMode === "light" ? "lightblue" : "darkslategrey"
                }
                color={colorMode === "light" ? "blue" : "white"}
                borderRadius={"10px"}
              >
                <Heading as={"h2"} size={"md"} textAlign={"center"}>
                  Edit Movies
                </Heading>
                <Input
                  value={new_url}
                  onChange={(e) => setNewUrl(e.target.value)}
                  variant="outline"
                  type={"url"}
                  placeholder="Add poster url"
                />
                <Input
                  value={new_title}
                  onChange={(e) => setNewTitle(e.target.value)}
                  variant="outline"
                  type={"text"}
                  placeholder="Add Movie Title"
                />
                <Input
                  value={new_director}
                  onChange={(e) => setNewDirector(e.target.value)}
                  variant="outline"
                  type={"text"}
                  placeholder="Add Movie Director"
                />
                <Input
                  value={new_year}
                  onChange={(e) => setNewYear(e.target.value)}
                  variant="outline"
                  type={"number"}
                  placeholder="Add Movie Released Year"
                />
                <Input
                  value={new_genre}
                  onChange={(e) => setNewGenre(e.target.value)}
                  variant="outline"
                  type={"text"}
                  placeholder="Add Movie Genre"
                />
                <Input
                  value={new_cast}
                  onChange={(e) => setNewCast(e.target.value)}
                  variant="outline"
                  type={"text"}
                  placeholder="Add Movie Cast"
                />
                <Input
                  value={new_synopsis}
                  onChange={(e) => setNewSynopsis(e.target.value)}
                  variant="outline"
                  type={"text"}
                  placeholder="Add Movie Synopsis"
                />
                <Input
                  value={new_ratings}
                  onChange={(e) => setNewRatings(e.target.value)}
                  variant="outline"
                  type={"range"}
                  step={0.1}
                  min={1}
                  max={5}
                  placeholder="Add Movie Ratings"
                  _before={{ content: `"Ratings"` }}
                  _after={
                    new_ratings > 2.5
                      ? { content: `"🙂${new_ratings}"` }
                      : { content: `"😞${new_ratings}"` }
                  }
                />
              </Stack>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              isLoading={buttonLoading}
              loadingText="Editing"
              colorScheme="teal"
              variant="outline"
              onClick={() => handleEdit(_id)}
            >
              Edit Movie
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditModal;
