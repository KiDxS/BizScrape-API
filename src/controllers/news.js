const crawler = require("../utils/crawl");

const main = async (req, res, next) => {
    try {
        const { source } = req.params;
        const results = crawler.results;
        // If source is not undefined or null
        if (source) {
            const filteredResults = [];
            for (const element of results) {
                const elementSource = element.source;
                if (elementSource == source) {
                    filteredResults.push(element);
                }
            }
            return res.status(200).json({
                success: true,
                message: "The results have been retrieved.",
                data: filteredResults,
            });
        }
        // If source is undefined or null
        else {
            return res.status(200).json({
                success: true,
                message: "The results have been retrieved.",
                data: results,
            });
        }
    } catch (err) {
        console.log(err);
    }
};

module.exports = main;
