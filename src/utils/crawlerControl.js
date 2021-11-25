const crawler = require("./crawl");

// Milliseconds of 25 minutes
const milliseconds = 1500000;

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
