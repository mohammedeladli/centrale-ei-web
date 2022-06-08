const express = require("express");
const router = express.Router();
const MovieModel = require("../models/movies");
module.exports = router;
router.get("/", async function (req, res) {
  const movies = await MovieModel.find({}).populate("viewers");
  res.send(movies);
});

router.post("/new", function (req, res) {
  const newMovie = new MovieModel({
    title: req.body.title,
    description: req.body.description,
    url: req.body.url,
    date: req.body.date,
    viewers: req.body.viewers,
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
    description: req.body.description,
    url: req.body.url,
    date: req.body.date,
    viewers: req.body.viewers,
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
