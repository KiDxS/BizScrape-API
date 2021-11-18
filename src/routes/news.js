const express = require("express");
const Router = express.Router();
const newsController = require("../controllers/news");
const { validate, validateSource } = require("../middleware/validator");

Router.get("/", validateSource(), validate, newsController);

Router.get("/:source", newsController);

module.exports = Router;
