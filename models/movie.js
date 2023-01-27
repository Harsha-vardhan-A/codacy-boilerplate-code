var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const movieSchema = new Schema({
  movieName: { type: String, required: true },
  releaseDate: { type: String, required: true },
  director: { type: String },
  actor: { type: String },
  actress: { type: String },
});

module.exports = mongoose.model("Movie", movieSchema);
