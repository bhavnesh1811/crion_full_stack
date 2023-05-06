import React from "react";
import {
  Box,
  Flex,
  InputLeftElement,
  Button,
  InputGroup,
  useColorModeValue,
  useColorMode,
  Image,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import { MoonIcon, SearchIcon, SunIcon, CloseIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getMovies, getMoviesBySearch } from "../Redux/movies/movies.action";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const handleSearch = () => {
    dispatch(getMoviesBySearch(search));
  };
  const handleClear = () => {
    setSearch("");
    dispatch(getMovies());
  };

  return (
    <Box bg={useColorModeValue("lightblue", "darkslategrey")} px={6}>
      <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Image
            w={"80%"}
            src={
              colorMode === "light"
                ? "https://www.criontech.com/wp/wp-content/uploads/2019/07/CrionLogo2.png"
                : "https://www.criontech.com/wp/wp-content/uploads/2019/07/logoWhite.png"
            }
            style={{ height: "80px" }}
            onClick={() => navigate("/")}
          />
        </Box>
        <Flex justifyContent={"space-between"} gap={"30px"}>
          <Box>
            <InputGroup>
              <InputLeftElement
                color="gray.500"
                fontSize="1.2em"
                children={
                  <SearchIcon onClick={() => handleSearch()} color="gray.500" />
                }
              />
              <Input
                placeholder="Search Movies"
                name="query"
                value={search}
                onChange={(e) => {
                  navigate("/");
                  setSearch(e.target.value);
                }}
                // onKeyDown={() => handleSearch()}
              />
              <InputRightElement
                color="gray.500"
                children={<CloseIcon />}
                onClick={(e) => handleClear(e)}
              />
            </InputGroup>
          </Box>

          <Box>
            <Button color="gray.500" onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
