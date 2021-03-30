const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Quiz
      .find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Quiz
      .create({ name: req.body.name, subject: req.body.subject })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};