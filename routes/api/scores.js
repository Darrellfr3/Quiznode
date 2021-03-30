const router = require("express").Router();
const scoresController = require("../../controllers/scoresController");

// Matches with "/api/books"
router.route("/")
  // .get(scoresController.findAll)
  .post(scoresController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(scoresController.findScore)
  .get(scoresController.findScores);
  // .put(booksController.update)
  // .delete(booksController.remove);

module.exports = router;
