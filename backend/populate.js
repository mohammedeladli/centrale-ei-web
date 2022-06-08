const mongoose = require("mongoose");
const MovieModel = require("./models/movie");
import axios from "axios"

async function fetchMoviesFromTheMovieDatabase() {
  // TODO: fetch movies from the The Movie Database API
  const movielist =axios.get("https://api.themoviedb.org/3/movie/popular?api_key=522d421671cf75c2cba341597d86403a&language=en-US&page=1");
}

async function populateMovies() {
  // TODO: populate movies into the database
}

async function dropDataBase() {
  // TODO: Drop the collections
}

async function populate() {
  // Connect mongoose client
  const client = await mongoose.connect(process.env.MONGO_DB_URL);

  const movies = await fetchMoviesFromTheMovieDatabase();

  await dropDataBase();

  await populateMovies(movies);

  // disconnect mongoose client
  await client.disconnect();
}

populate()
  .then(() => {
    console.log("All done !");
  })
  .catch((error) => {
    console.error(error);
  });
