const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  quizID: [{ type: Schema.Types.ObjectId, ref: "Quiz" }],
  scoreID: [{ type: Schema.Types.ObjectId, ref: "Score" }]
});

userSchema.pre("save", function (next) {
  const user = this;

  //Only hash modified or new passwords
  if (!user.isModified("password")) return next();

  user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  next();
})

userSchema.method.comparePassword = function(password, cb) {
  return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model("User", userSchema);

module.exports = User;