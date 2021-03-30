const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findScore: function(req, res) {
    db.Score
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findScores: function(req, res) {
    db.Quiz
      .findOne(req.params.name)
      .populate("scoreID")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Question
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};