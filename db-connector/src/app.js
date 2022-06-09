const express = require("express");
const app = express();
require("./database/database");
const path = require("path");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerSpec = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "DB-Connector",
      description: "Un microservicio creado en Express.js",
      contact: {
        name: "Joaquin Caubarrere",
      },
    },
    servers: [
      {
        url: "http://localhost:3001",
      },
    ],
  },
  apis: [`${path.join(__dirname, "./routes/*.js")}`],
};

const swaggerDocs = swaggerJsDoc(swaggerSpec);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());

const numberRoutes = require("./routes/numbers.routes");

app.use("/", numberRoutes);

module.exports = app;
