const { Router } = require("express");
const router = Router();
const sendNumberController = require("../controllers/sendNumber.controller");

router.post("/", sendNumberController);

module.exports = router;
