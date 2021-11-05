const express = require("express");
const Router = express.Router();
const newsController = require("../controllers/news");

Router.get("/", (req,res) => {
    newsController.allSources(req,res);
});

module.exports = Router;