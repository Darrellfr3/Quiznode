const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  name: { type: String, required: true },
  subject: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  scores: [{ type: Schema.Types.ObjectId, ref: "Score" }]
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
