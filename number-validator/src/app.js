const express = require("express");
const path = require("path");
const app = express();
const numberRoutes = require("./routes/numbers.routes");

const publicDirectory = path.join(__dirname, "../public");
app.use(express.json());

app.use(express.static(publicDirectory));

require("./sockets/socket");

app.use("/sendNumber", numberRoutes);

module.exports = app;
