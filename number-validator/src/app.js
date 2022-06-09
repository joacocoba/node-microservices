const express = require("express");
const path = require("path");
const app = express();
const numberRoutes = require("./routes/numbers.routes");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Number-Validator",
      description: "Un microservicio creado en Express.js",
      contact: {
        name: "Joaquin Caubarrere",
      },
      servers: [
        {
          url: "http:localhost:3000",
        },
      ],
    },
  },
  apis: [`${path.join(__dirname, "./routes/*.js ")}`],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const publicDirectory = path.join(__dirname, "../public");
app.use(express.json());

app.use(express.static(publicDirectory));

require("./sockets/socket");

app.use("/sendNumber", numberRoutes);

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
