const express = require("express");
const Router = express.Router();
const newsController = require("../controllers/news");
const { validate, validateSource } = require("../middleware/validator");

Router.get("/", newsController);

Router.get("/:source", validateSource(), validate, newsController);

module.exports = Router;
