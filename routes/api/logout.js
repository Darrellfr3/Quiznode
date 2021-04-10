const router = require("express").Router();
const passport = require("passport");

router.route("/")
  .get(function (req, res) {
    passport.logOut(req);
  });

  module.exports = router;