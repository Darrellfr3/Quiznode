const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  question: { type: String, required: true },
  choiceA: { type: String, required: false },
  choiceB: { type: String, required: false },
  choiceC: { type: String, required: false },
  choiceD: { type: String, required: false },
  answer: { type: String, required: true },
  quizID: { type: Schema.Types.ObjectId, ref: "Quiz" }
});

const Question = mongoose.model("Book", questionSchema);

module.exports = Question;