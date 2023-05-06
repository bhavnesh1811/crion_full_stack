import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovies, getMovies } from "../Redux/movies/movies.action";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  Select,
  Stack,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import Loader from "../components/Loader";
import { LOADER_URL } from "../constants/constants";
import { useState } from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const dispatch = useDispatch();
  const { colorMode } = useColorMode();
  const [buttonLoading, setButtonLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [director, setDirector] = useState("");
  const [cast, setCast] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [ratings, setRatings] = useState(1);
  const [synopsis, setSynopsis] = useState("");
  const toast = useToast();
  let { loading, movies } = useSelector((store) => store.moviesManager);
  // console.log(movies);
  let [filter, setFilter] = useState(movies);
  // console.log(filter);
  useEffect(() => {
    dispatch(getMovies());
  }, []);

  useEffect(() => {
    setFilter(movies);
  }, [movies]);

  const resetStates = () => {
    setTitle("");
    setGenre("");
    setRatings("");
    setDirector("");
    setSynopsis("");
    setCast("");
    setUrl("");
    setYear("");
  };

  const handleSubmit = () => {
    if (
      title === "" ||
      url === "" ||
      director === "" ||
      cast === "" ||
      year === "" ||
      genre === "" ||
      ratings === "" ||
      synopsis === ""
    ) {
      return toast({
        title: "Please fill all the details",
        position: "top",
        description: "",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    }

    setButtonLoading(true);
    let obj = {
      poster: url,
      title,
      director,
      cast,
      year,
      genre,
      info: synopsis,
      ratings: +ratings,
    };

    // console.log(obj);
    dispatch(addMovies(obj));
    setButtonLoading(false);
    resetStates();
    return toast({
      title: "Movie Added",
      position: "top",
      description: "",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleFilters = () => {
    let filter_title = document.getElementById("Title");
    let filter_director = document.getElementById("Director");
    let filter_year = document.getElementById("Year");
    let filter_genre = document.getElementById("Genre");

    let temp;
    if (filter_title.value !== "") {
      if (filter_title.value == "A-Z") {
        temp = filter?.sort((a, b) => {
          return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
        });
      } else {
        temp = filter?.sort((a, b) => {
          return a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1;
        });
      }
      setFilter([...temp]);
    }
    if (filter_director.value !== "") {
      if (filter_director.value === "A-Z") {
        temp = filter?.sort((a, b) => {
          return a.director.toLowerCase() > b.director.toLowerCase() ? 1 : -1;
        });
      } else {
        temp = filter?.sort((a, b) => {
          return a.director.toLowerCase() > b.director.toLowerCase() ? -1 : 1;
        });
      }
      setFilter([...temp]);
    }
    if (filter_year.value !== "") {
      if (filter_year.value === "Low to High") {
        temp = filter?.sort((a, b) => {
          return a.year > b.year ? 1 : -1;
        });
      } else {
        temp = filter?.sort((a, b) => {
          return a.year > b.year ? -1 : 1;
        });
      }
      setFilter([...temp]);
    }
    if (filter_genre.value !== "") {
      temp = movies?.filter((el) => {
        return el.genre === filter_genre.value;
      });
      setFilter([...temp]);
    }
    if (
      filter_title.value === "" &&
      filter_director.value === "" &&
      filter_year.value === "" &&
      filter_genre.value === ""
    ) {
      setFilter(movies);
    }
  };

  // console.log(filter);

  if (loading) {
    return <Loader src={LOADER_URL} />;
  }
  return (
    <Box>
      <Flex gap={"20px"} direction={{ base: "column", md: "row" }} m={"20px 20px 60px 20px"}>
        <div className="filter">
          <Select id="Title" onChange={() => handleFilters()}>
            <option value="">Sort By Title</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </Select>
        </div>
        <div className="filter">
          <Select id="Director" onChange={() => handleFilters()}>
            <option value="">Sort By Director</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </Select>
        </div>
        <div className="filter">
          <Select onChange={handleFilters} id="Year">
            <option value="">Sort By Year</option>
            <option value="Low to High">Low to High</option>
            <option value="High to Low">High to Low</option>
          </Select>
        </div>
        <div className="filter">
          <Select onChange={handleFilters} id="Genre">
            <option value="">Sort By Genre</option>
            <option value="Comedy">Comedy</option>
            <option value="Horror">Horror</option>
            <option value="Drama">Drama</option>
            <option value="Action">Action</option>
          </Select>
        </div>
      </Flex>
      <Flex m={"40px 0px"} direction={{ base: "column", md: "row" }}>
        <Box w={{ base: "90%", md: "25%" }} m={"20px 20px"}>
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
            <Heading as={"h2"} size={"md"}>
              Add Movies
            </Heading>
            <Input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              variant="outline"
              type={"url"}
              placeholder="Add poster url"
            />
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              variant="outline"
              type={"text"}
              placeholder="Add Movie Title"
            />
            <Input
              value={director}
              onChange={(e) => setDirector(e.target.value)}
              variant="outline"
              type={"text"}
              placeholder="Add Movie Director"
            />
            <Input
              value={year}
              onChange={(e) => setYear(e.target.value)}
              variant="outline"
              type={"number"}
              placeholder="Add Movie Released Year"
            />
            <Input
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              variant="outline"
              type={"text"}
              placeholder="Add Movie Genre"
            />
            <Input
              value={cast}
              onChange={(e) => setCast(e.target.value)}
              variant="outline"
              type={"text"}
              placeholder="Add Movie Cast"
            />
            <Input
              value={synopsis}
              onChange={(e) => setSynopsis(e.target.value)}
              variant="outline"
              type={"text"}
              placeholder="Add Movie Synopsis"
            />

            <Input
              value={ratings}
              onChange={(e) => setRatings(e.target.value)}
              variant="outline"
              type={"range"}
              step={0.1}
              min={1}
              max={5}
              placeholder="Add Movie Ratings"
              _before={{ content: `"Ratings:"` }}
              _after={
                ratings > 2.5
                  ? { content: `"🙂${ratings}"` }
                  : { content: `"😞${ratings}"` }
              }
            />

            <Button
              isLoading={buttonLoading}
              loadingText="Adding"
              colorScheme="teal"
              variant="outline"
              onClick={handleSubmit}
            >
              Add Movie
            </Button>
          </Stack>
        </Box>
        <Box w={{base:"90%",md:"65%"}} m={"20px 20px"}>
          <Grid
            gridTemplateColumns={{
              sm: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(3,1fr)",
            }}
            gap={"15px"}
          >
            {filter?.map((el) => (
              <MovieCard key={el._id} {...el} />
            ))}
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;

// data={
//   poster:"https://is5-ssl.mzstatic.com/image/thumb/xq9mcYu6NXUtGcDJMMfc5w/738x416.webp",
//  title:"Acapulca",
//  director:"John",
//  year:1993,
// genre:"comedy",
//  cast:"Johny Depp,Amber Heard",
// info :"The stakes get higher for Jackson Lamb and his team in the sly second season.",
//  ratings:4.2
//  }
