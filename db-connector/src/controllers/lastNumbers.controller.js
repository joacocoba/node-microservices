const Even = require("../models/Even");
const Odd = require("../models/Odd");

const lastNumbersController = async (req, res) => {
  const { type } = req.params;
  const sort = {
    createdAt: -1,
  };

  if (type !== "even" && type !== "odd") {
    return res.status(400).send({
      message: "Please send a correct type.",
    });
  }

  if (type === "even") {
    const lastBatch = await Even.find().sort(sort).limit(1);
    if (lastBatch.length === 0) {
      return res.status(204).send("There are no records :(");
    }

    return res.status(200).send(lastBatch);
  }

  if (type === "odd") {
    const lastBatch = await Odd.find().sort(sort).limit(1);
    if (lastBatch.length === 0) {
      return res.status(204).send("There are no records :(");
    }

    res.status(200).send(lastBatch);
  }
};

module.exports = lastNumbersController;
