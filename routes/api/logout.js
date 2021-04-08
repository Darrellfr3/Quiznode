const router = require("express").Router();
const passport = require("passport");

router.route("/")
  .get(function (req) {
    passport.logOut(req);
  });

  module.exports = router;