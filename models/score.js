const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
  score: { type: Number, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  quiz: { type: Schema.Types.ObjectId, ref: "Quiz" }
});

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;
