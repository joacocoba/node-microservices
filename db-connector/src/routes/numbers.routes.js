const { Router } = require("express");
const router = Router();
const lastNumbersController = require("../controllers/lastNumbers.controller");

// When user wants to get last 10 numbers
router.get("/lastNumbers", lastNumbersController);

module.exports = router;
