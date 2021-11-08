const express = require("express");
const PORT = 8080 || process.env.PORT;
const app = express();
require("dotenv").config();
const API_VERSION = process.env.API_VERSION;
const crawlerControlMiddleware = require("./middleware/crawlerControl");

const newsRoute = require("./routes/news");

// Executes the crawler every 2 minutes
crawlerControlMiddleware();

app.use(`/${API_VERSION}/news`, newsRoute);


app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
