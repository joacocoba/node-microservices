const mongoose = require("mongoose");
const { Schema } = mongoose;

const EvenSchema = new Schema(
  {
    batchOfNumbers: [Number],
  },
  { versionKey: false, timestamps: true }
);

const Even = mongoose.model("even_numbers", EvenSchema);
module.exports = Even;
