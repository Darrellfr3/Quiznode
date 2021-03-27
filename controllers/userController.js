const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findOne: function(req, res) {
    db.User
      .findOne({ username: req.params.username })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User
      .create({username: req.body.username, password: req.body.password})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};