const router = require("express").Router();
const quizController = require("../../controllers/quizController");

// Matches with "/api/quizs"
router.route("/")
  // .get(quizController.findAll)
  .post(quizController.create);

// added to get quiz by id
router.route("/:id")
  .get(quizController.findId);

router.route("/:subject")
  .get(quizController.findSubject);

// Matches with "/api/quizs/:id"
// router
//   .route("/:id")
//   .get(quizController.findById)
//   .put(quizController.update)
//   .delete(quizController.remove);

module.exports = router;
