const router = require("express").Router();
const quizController = require("../../controllers/quizController");

// Matches with "/api/quizs"
router.route("/")
  .get(quizController.findAll)
  .post(quizController.create);

// Matches with "/api/quizs/:id"
// router
//   .route("/:id")
//   .get(quizController.findById)
//   .put(quizController.update)
//   .delete(quizController.remove);

module.exports = router;
