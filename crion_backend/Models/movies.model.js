const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  poster: { type: String, required: true },
  title: { type: String, required: true },
  director: { type: String, required: true },
  cast: { type: [String], required: true },
  year: { type: String, required: true },
  genre: { type: String, required: true },
  info: { type: String, required: true },
  ratings: { type: Number, required: true },
});

const MoviesModel = mongoose.model("movie", movieSchema);

module.exports = { MoviesModel };
