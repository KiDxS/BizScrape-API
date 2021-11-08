const crawler = require("../utils/crawl");

// Millisecond of 2 minutes
const minutes = 20000;

const main = async () => {
  setInterval(async () => {
    try {
      const results = await crawler.results;
      // Resets the array
      results.length = 0;
      console.log("running setInterval");
      await crawler.businessmirror();
      await crawler.manilabulletin();
    } catch (err) {
      console.error(err);
    }
  }, minutes);
};

module.exports = main;
