const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
const cors = require("cors");
require("dotenv").config();

const API_VERSION = process.env.API_VERSION;
const crawlerControlUtil = require("./utils/crawlerControl");

// Middlewares
app.use(cors());

// Route
const newsRoute = require("./routes/news");
const swaggerRoute = require("./routes/swagger-doc");

// Executes the crawler every 12 hours
crawlerControlUtil();

app.use(`/${API_VERSION}/news`, newsRoute);

app.use("/", swaggerRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
