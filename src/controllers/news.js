const crawler = require("../utils/crawl");

const main = async (req, res, next) => {
    try {
        const source = req.query.source;
        const results = await crawler.results;
        if (source === undefined) {
            return res.status(200).json(results);
        } else {
            const filteredResults = [];
            for (const index in results) {
                const element = results[index];
                const retrieveSource = results[index].source;

                if (retrieveSource == source) {
                    filteredResults.push(element);
                }
            }
            return res.status(200).json(filteredResults);
        }
    } catch (err) {
        console.log(err);
    }
};

module.exports = main;
