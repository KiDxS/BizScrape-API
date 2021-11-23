const express = require("express");
const swaggerUi = require("swagger-ui-express");
const Router = express.Router();
const swaggerDocument = require("../../docs/swagger.json");

Router.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = Router;
