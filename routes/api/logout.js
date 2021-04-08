const router = require("express").Router();
const passport = require("passport");

router.route("/")
  .get(function (req) {
    req.logOut();
  });

  module.exports = router;