const express = require("express");

const cors = require("cors");
require("dotenv").config();
const { connection } = require("./Configs/db");
const { MovieRouter } = require("./Routes/movie.route");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);
app.get("/", (req, res) => {
  res.status(200).send({ msg: "Api is working fine" });
});

app.use("/movies", MovieRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (error) {
    console.log("Not Connected to DB");
  }
  console.log(`Server is running on port ${process.env.port}`);
});
