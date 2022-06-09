const { Router } = require("express");
const router = Router();
const lastNumbersController = require("../controllers/lastNumbers.controller");

/**
 * @swagger
 * paths:
 *  /lastNumbers/{type}:
 *      get:
 *          tags:
 *              - "lastNumbers"
 *          summary: Get last numbers by type
 *          parameters:
 *            - in: path
 *              name: type
 *              required: true
 *          responses:
 *              '200':
 *                  description: OK
 *              '204':
 *                  description: No content
 *              '400':
 *                  description: Bad request. Type must be a string and has to be "even" or "odd"
 *
 *
 */
router.get("/lastNumbers/:type", lastNumbersController);

module.exports = router;
