const express = require("express");
const Router = express.Router();
const newsController = require("../controllers/news");

Router.get("/", newsController);

module.exports = Router;
