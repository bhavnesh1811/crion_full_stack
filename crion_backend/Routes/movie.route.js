const express = require("express");
const { MoviesModel } = require("../Models/movies.model");

const MovieRouter = express.Router();

//Create a new movie
MovieRouter.post("/add", async (req, res) => {
  try {
    const movie = new MoviesModel(req.body);
    await movie.save();
    res.status(200).send({ message: "Movie Added Successfully" });
  } catch (error) {
    res.status(401).send({ message: "Error in Adding Movie" });
  }
});

//Get all the movies
MovieRouter.get("/", async (req, res) => {
  let { search } = req.query;
  // console.log(search);
  let movies;
  try {
    if (search) {
      movies = await MoviesModel.find({
        $or: [
          { title: { $regex: `${search}`, $options: "i" } },
          { director: { $regex: `${search}`, $options: "i" } },
          { year: { $regex: `${search}`, $options: "i" } },
          { genre: { $regex: `${search}`, $options: "i" } },
        ],
      });
      res.status(200).send({ message: "All movies data", movies: movies });
    }  else {
      movies = await MoviesModel.find();
      res.status(200).send({ message: "All movies data", movies: movies });
    }
  } catch (error) {
    res.status(401).send({ message: "Error in Getting Movies Data" });
  }
});

//Update a movie
MovieRouter.patch("/update/:id", async (req, res) => {
  const ID = req.params.id;
  const payload = req.body;
  try {
    await MoviesModel.findByIdAndUpdate(ID, payload);
    res.status(200).send({ message: "Movie Updated Successfully" });
  } catch (error) {
    res.status(401).send({ message: "Error in Updating Movie" });
  }
});

//Delete a particular movie
MovieRouter.delete("/delete/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    await MoviesModel.findByIdAndDelete(ID);
    res.status(200).send({ message: "Movie Deleted Successfully" });
  } catch (error) {
    res.status(401).send({ message: "Error in Deleting Movie" });
  }
});

module.exports = { MovieRouter };
