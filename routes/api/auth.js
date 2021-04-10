const router = require("express").Router();
const passport = require("passport");


router.route("/")
  .post(passport.authenticate("local"), function (req, res) {
    console.log("this hit");
  });
  module.exports = router;