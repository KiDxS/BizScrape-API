const crawler = require("../utils/crawl");

const main = async (req, res, next) => {
  try {
    const source = req.query.source;
    if (source === undefined) {
      const results = await crawler.results;
      return res.status(200).json(results);
    } else {
      console.log(source);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = main;
