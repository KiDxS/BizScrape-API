const crawler = require("./crawl");

// Milliseconds of 12 hours
const milliseconds = 1000 * 120;

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
    }, milliseconds);
};

module.exports = main;
