import {
  Box,
  Flex,
  Heading,
  Image,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteMovies } from "../Redux/movies/movies.action";
import { DeleteIcon } from "@chakra-ui/icons";
import EditModal from "./EditModal";
import ViewMovieDetails from "./ViewMovieDetails";

const MovieCard = ({
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
  const dispatch = useDispatch();
  const { colorMode } = useColorMode();

  const toast = useToast();

  const handleDelete = (id) => {
    // console.log(id);
    dispatch(deleteMovies(id));
    return toast({
      title: "Movie Deleted",
      position: "top",
      description: "",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };
  return (
    <Flex
      direction={"column"}
      boxShadow={"rgba(0,0,0,0.35)0px 5px 15px"}
      p={"20px"}
      borderRadius={"8px"}
      backgroundColor={colorMode === "light" ? "lightblue" : "darkslategrey"}
      color={colorMode === "light" ? "blue" : "white"}
    >
      <Box>
        <Image borderRadius={"8px"} py={"8px"} src={poster} alt={_id} />
      </Box>
      <Box h={{md:"200px",lg:"225px"}}>
        <Heading as={"h4"} size={"md"} py={"8px"} fontSize={{base:"16px",lg:"18px"}}>
          Title :- {title}
        </Heading>
        <Heading as={"h4"} size={"md"} py={"8px"} fontSize={{base:"16px",lg:"18px"}}>
          Director :- {director}
        </Heading>
        <Heading as={"h4"} size={"md"} py={"8px"} fontSize={{base:"16px",lg:"18px"}}>
          Released Year :- {year}
        </Heading>
        <Heading as={"h4"} size={"md"} py={"8px"} fontSize={{base:"16px",lg:"18px"}}>
          Genre :- {genre}
        </Heading>
        <Heading as={"h4"} size={"md"} py={"8px"} fontSize={{base:"16px",lg:"18px"}}>
          Ratings :- {ratings}
        </Heading>
      </Box>
      <Flex
        justifyContent={"space-around"}
        fontSize={{base:"24px",md:"28px",lg:"32px"}}
        my={"20px"}
        alignItems={"center"}
      >
        <ViewMovieDetails
          poster={poster}
          title={title}
          director={director}
          year={year}
          genre={genre}
          cast={cast}
          info={info}
          _id={_id}
          ratings={ratings}
        />

        <EditModal
          poster={poster}
          title={title}
          director={director}
          year={year}
          genre={genre}
          cast={cast}
          info={info}
          _id={_id}
          ratings={ratings}
        />
        <DeleteIcon
          border={"1px solid teal"}
          p={"5px"}
          borderRadius={"8px"}
          onClick={() => handleDelete(_id)}
        />
      </Flex>
    </Flex>
  );
};

export default MovieCard;
