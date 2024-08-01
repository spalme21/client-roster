const express = require("express");
const router = express.Router();

const trainerController = require("../controllers/trainerController");

// POST registration
router.post("/register", trainerController.register);

// POST login
router.post("/login", trainerController.login);

// GET trainers
router.get("/", trainerController.get_trainers);

module.exports = router;
