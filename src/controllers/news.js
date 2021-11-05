const crawler = require("../utils/crawl");

const crawlAllSources = async () => {
  try {
    await crawler.businessmirror();
  } catch (err) {
    console.error(err);
  }
};

const main = async (req, res) => {
  try {
    const source = req.query.source;
    if (source === undefined) {
      const results = crawler.results;
      await crawlAllSources();
      return res.status(200).json(results);
    } else {
      console.log(source);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = main;
