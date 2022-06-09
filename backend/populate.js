const mongoose = require("mongoose");
const MovieModel = require("./models/movies");
const axios = require("axios").default;

async function fetchMoviesFromTheMovieDatabase() {
  // TODO: fetch movies from the The Movie Database API
  var movielist = [];
  for (var i = 1; i <= 50; i++) {
    movielist.push(
      await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=522d421671cf75c2cba341597d86403a&language=en-US&page=" +
          i
      )
    );
  }
  return movielist;
}

async function populateMovies(movies) {
  // TODO: populate movies into the database
  for (var i = 0; i < 50; i++) {
    for (var j = 0; j < 20; j++) {
      if (
        movies[i].data.results[j].backdrop_path != null &&
        movies[i].data.results[j].release_date != null &&
        movies[i].data.results[j].title != "Sonic the Hedgehog 3"
      ) {
        const newMovie = new MovieModel({
          title: movies[i].data.results[j].title,
          poster_path: movies[i].data.results[j].poster_path,
          backdrop_path: movies[i].data.results[j].backdrop_path,
          adult: movies[i].data.results[j].adult,
          genre_ids: movies[i].data.results[j].genre_ids,
          vote_average: movies[i].data.results[j].vote_average,
          date: movies[i].data.results[j].release_date,
          overview: movies[i].data.results[j].overview,
          popularity: movies[i].data.results[j].popularity,
          vote_count: movies[i].data.results[j].vote_count,
          viewers: [],
        });

        temp = await newMovie.save();
        console.log(movies[i].data.results[j].title);
      }
    }
  }
}

async function dropDataBase() {
  // TODO: Drop the collections
  await mongoose.connection.db.dropCollection(
    "movies",
    function (err, result) {}
  );
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
