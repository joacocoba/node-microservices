const express = require("express");
const app = express();
require("./database/database");

app.use(express.json());

const numberRoutes = require("./routes/numbers.routes");

app.use("/", numberRoutes);

module.exports = app;
