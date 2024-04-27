const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

// POST registration
router.post("/register", userController.register);

// POST login
router.post("/login", userController.login);

// GET users
router.get("/users", userController.get_users);

module.exports = router;
