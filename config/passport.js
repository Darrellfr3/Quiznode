const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/user");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  // Our user will sign in using a username
  function(username, password, done) {
    // When a user tries to sign in this code runs
    User.findOne({username: username}).then(function(user) {
      // If there's no user with the given username
      if (!user) {
        return done(null, false, {
          message: "Incorrect username."
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (!user.comparePassword(password)) {
        return done(null, err, { message: "Incorrect password."});
      };
      // If none of the above, return the user
      return done(null, user);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Serialize and deserialize the user
passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  User.findOne({_id: id}, (err, user) => {
    cb(err, user);
  });
});

// Exporting our configured passport
module.exports = passport;