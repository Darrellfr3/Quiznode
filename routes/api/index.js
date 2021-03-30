const router = require("express").Router();
const userRoutes = require("./users");
const quizRoutes = require("./quizs");
const questionRoutes = require("./questions");
const scoreRoutes = require("./scores");

// Book routes
router.use("/users", userRoutes);
router.use("/quizs", quizRoutes);
router.use("/questions", questionRoutes);
router.use("/scores", scoreRoutes);

module.exports = router;