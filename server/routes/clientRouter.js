const express = require("express");
const router = express.Router();

const clientController = require("../controllers/clientController");

// POST create new client
router.post("/add", clientController.create_client);

// GET all clients
router.get("/", clientController.get_all_clients);

// GET client by id
router.get("/:id", clientController.get_client);

// PATCH client info by id
router.patch("/:id/edit", clientController.edit_client);

module.exports = router;
