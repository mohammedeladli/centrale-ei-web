const express = require("express");
const router = express.Router();
const MovieModel = require("../models/movies");
module.exports = router;
var ed = require("edit-distance");

router.get("/", async function (req, res) {
  const movies = await MovieModel.find({}).populate("viewers");
  res.send(movies);
});

function lev_dis(a, b) {
  var insert, remove, update;
  insert = remove = function (node) {
    return 1;
  };
  update = function (stringA, stringB) {
    return stringA !== stringB ? 1 : 0;
  };

  var l = Math.max(a.length, b.length);
  return (l - ed.levenshtein(a, b, insert, remove, update).distance) / l;
}

function sim(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (b.length > a.length) return lev_dis(a, b);
  [a, b] = [b, a];
  var mx = 0;
  for (var i = 0; i + a.length <= b.length; i++)
    mx = Math.max(mx, lev_dis(a, b.substr(i, a.length)));
  return mx;
}

router.get("/search/:s", async function (req, res) {
  const s = req.params.s;
  const movies = await MovieModel.find({});
  var ret = [];
  for (var i = 0; i < movies.length; i++)
    if (sim(movies[i].title, s) >= 0.8) ret.push(movies[i]);
  ret.sort(function (a, b) {
    if (sim(a.title, s) > sim(b.title, s)) return -1;
    else if (sim(a.title, s) < sim(b.title, s)) return 1;
    else if (a.popularity >= b.popularity) return -1;
    else return 1;
  });
  res.json(ret);
});

router.post("/new", function (req, res) {
  const newMovie = new MovieModel({
    title: req.body.title,
    poster_path: req.body.poster_path,
    backdrop_path: req.body.backdrop_path,
    adult: req.body.adult,
    genre_ids: req.body.genre_ids,
    vote_average: req.body.vote_average,
    date: req.body.release_date,
    overview: req.body.overview,
    popularity: req.body.popularity,
    viewers: [],
  });

  newMovie
    .save()
    .then(function (createdMovie) {
      res.status(201).json(createdMovie);
    })
    .catch(function (error) {
      res.status(500).json({ message: "Error while creating the movie" });
    });
});

router.put("/:id", async function (req, res) {
  console.log(req.params["id"]);

  const filter = { _id: req.params.id };

  const update = {
    title: req.body.title,
    date: req.body.date,
    genre_ids: req.body.genre_ids,
    adult: req.body.adult,
    viewers: [],
  };

  try {
    const newDoc = await MovieModel.findOneAndUpdate(filter, update, {
      new: true,
    });
    res.json(newDoc);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occured while updating the movie" });
  }
});
