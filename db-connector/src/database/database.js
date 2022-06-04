const mongoose = require("mongoose");
const Even = require("../models/Even");

const dbURL =
  process.env.DATABASE_URL || "mongodb://localhost:27017/number-validator";

mongoose
  .connect(dbURL)
  .then((client) => {
    console.log("Mongo DB connected");
  })
  .catch((err) => console.log(err));
