const router = require("express").Router();
const passport = require("passport");

router.route("/")
  .then((req, res) => {
    passport.authenticate("local", function(err, user) {
      if(err) {
        return res.status(400).json({ errors: err });
      }
      return res.status(200).json({ success: `Logged in ${user.id}` });
    })
  });

  module.exports = router;