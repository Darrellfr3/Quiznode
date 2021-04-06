const router = require("express").Router();
const passport = require("passport");

router.route("/")
  .then(() => {
    passport.authenticate("local", function(err, user, info) {
      if(err) {
        return res.status(400).json({ errors: err });
      }
      return res.status(200).json({ success: `Logged in ${user.id}` });
    })
  });

  module.exports = router;