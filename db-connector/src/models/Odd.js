const mongoose = require("mongoose");
const { Schema } = mongoose;

const OddSchema = new Schema(
  {
    batchOfNumbers: [Number],
  },
  { versionKey: false, timestamps: true }
);

const Odd = mongoose.model("odd_numbers", OddSchema);
module.exports = Odd;
