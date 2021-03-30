const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  quizID: [{ type: Schema.Types.ObjectId, ref: "Quiz" }],
  scoreID: [{ type: Schema.Types.ObjectId, ref: "Score" }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;