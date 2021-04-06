const router = require("express").Router();
const userRoutes = require("./users");
const quizRoutes = require("./quizs");
const questionRoutes = require("./questions");
const scoreRoutes = require("./scores");
const authRoute = require("./auth");
const logoutRoute = require("./logout");

// Book routes
router.use("/users", userRoutes);
router.use("/quizs", quizRoutes);
router.use("/questions", questionRoutes);
router.use("/scores", scoreRoutes);
router.use("/auth", authRoute);
router.use("/logout", logoutRoute);

module.exports = router;