const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Quiz
      .findById(id)
      .populate("questionID")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Question
      .create({
        question: req.body.question,
        choiceA: req.body.choiceA,
        choiceB: req.body.choiceB,
        choiceC: req.body.choiceC,
        choiceD: req.body.choiceD,
        answer: req.body.answer, 
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};