const mongoose = require("mongoose");
const { Schema } = mongoose;

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  url: { type: String },
  date: { type: Date },
  viewers: [{ type: Schema.Types.ObjectId, ref: "UserModel" }],
});

const MovieModel = mongoose.model("MovieModel", MovieSchema, "movies");

module.exports = MovieModel;
