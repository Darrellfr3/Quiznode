const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Quiz
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findSubject: function(req, res) {
    db.Quiz
      .find({subject: req.params.subject})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: async function(req, res) {
    let {quizName, quizSubject, questions} = req.body;
    console.log(quizName);
    console.log(quizSubject);
    console.log(questions);

    try {
      // Insert array of questions that user created from browser. Also, get all of their IDs. We will need when creating quiz.
      const dbQuestions = await db.Question.insertMany(questions);
      const dbQuestionIds = dbQuestions.map(question=>question._id);

      // Create Quiz and insert the question Ids along with it.
      const dbQuiz = await db.Quiz.create({
        name: quizName,
        subject: quizSubject,
        questions: dbQuestionIds
      });

      // Instead of just sending quiz and its question IDs. After creating quiz, populate the question info with quiz and send to browser.
      // How to create and then populate data? https://github.com/Automattic/mongoose/issues/1928
      const populateQuizWithQuestions = await dbQuiz.populate("questions").execPopulate();
      res.json(populateQuizWithQuestions);

    } catch(error) {
      console.log(error);
      res.status(422).json(error);
    }
  }
};