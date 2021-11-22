const crawler = require("./crawl");

// Milliseconds of 2 minutes
const minutes = 120000;

const main = async () => {
    setInterval(async () => {
        try {
            const results = crawler.results;
            // Resets the array
            results.length = 0;
            console.log("running the crawler");
            await crawler.businessmirror();
            await crawler.manilabulletin();
        } catch (err) {
            console.error(err);
        }
    }, minutes);
};

module.exports = main;
