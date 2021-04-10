const router = require("express").Router();
const passport = require("passport");


router.route("/")
  .post(passport.authenticate("local"), function (req, res) {
    return res;
  });
  module.exports = router;