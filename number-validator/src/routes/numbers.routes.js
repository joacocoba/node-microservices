const { Router } = require("express");
const router = Router();
const sendNumberController = require("../controllers/sendNumber.controller");

/**
 * @swagger
 * /sendNumber:
 *  post:
 *      tags:
 *          - "number"
 *      summary: "Send a number to be validated"
 *      consumes:
 *          - "application/json"
 *      produces:
 *          - "application/json"
 *      requestBody:
 *         required: true
 *         content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      number:
 *                          type: number
 *      description: "Endpoint used to send numbers, which will be validated and if they pass the validations they will be incorporated into the database."
 *      responses:
 *          "200":
 *              description: "OK"
 *          "400":
 *              description: "Bad Request. It has to be a number."
 */
router.post("/", sendNumberController);

module.exports = router;
