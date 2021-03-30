const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  name: { type: String, required: true },
  subject: { type: String, required: true },
  userID: { type: Schema.Types.ObjectId, ref: "User" },
  questionID: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  scoreID: [{ type: Schema.Types.ObjectId, ref: "Score" }]
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
