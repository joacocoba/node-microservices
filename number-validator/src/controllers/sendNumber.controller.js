const sendNumberToServer = require("../sockets/socket");
const classifyNumber = require("../utils/classifyNumber");

const sendNumberController = (req, res) => {
  const { number } = req.body;

  if (typeof number !== "number") {
    return res.status(400).send({
      message: "Please send a number",
    });
  }

  const numberInfo = classifyNumber(number);
  if (numberInfo.type === "even") {
    sendNumberToServer(numberInfo);
  } else {
    console.log(number);
    sendNumberToServer(numberInfo);
  }

  res.status(200).send({ number });
};

module.exports = sendNumberController;
