const express = require("express");
const UserModel = require("../models/user");
const router = express.Router();

router.get("/", async function (req, res) {
  const users = await UserModel.find({});
  res.send(users);
});

router.get("/:id/movies", async function (req, res) {
  const user = await UserModel.findOne({
    _id: req.params.id,
  }).populate("watchedMovies");
  res.send(user);
});

router.post("/new", function (req, res) {
  const newUser = new UserModel({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });

  newUser
    .save()
    .then(function (newDocument) {
      res.status(201).json(newDocument);
    })
    .catch(function (error) {
      console.error(error);
      if (error.code === 11000) {
        res.status(400).json({
          message: `User with email "${newUser.email}" already exists`,
        });
      } else {
        res.status(500).json({ message: "Error while creating the user" });
      }
    });
});

router.delete("/:userId", function (req, res) {
  UserModel.deleteOne({ _id: req.params.userId })
    .then(function () {
      res.status(204).json({ message: "User successfully deleted" });
    })
    .catch(function () {
      res.status(500).json({ message: "Error while deleting the user" });
    });
});

module.exports = router;
