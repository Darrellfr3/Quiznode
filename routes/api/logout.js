const router = require("express").Router();
const passport = require("passport");

router.route("/")
  .then(function (req) {
    req.logOut();
  });

  module.exports = router;