const crawler = require("../utils/crawl");

const main = async (req, res, next) => {
    try {
        const { source } = req.params;
        const results = await crawler.results;
        // If source is not undefined or null
        if (source) {
            const filteredResults = [];
            // Loops through the array
            for (const index in results) {
                const element = results[index];
                // Declares retrieveSource to be a variable for accessing the source property of the elements.
                const retrieveSource = results[index].source;
                // Compares whether the value of the source property is the same with the source query parameter.
                if (retrieveSource == source) {
                    // Pushes the element to the filteredResults array.
                    filteredResults.push(element);
                }
            }
            return res.status(200).json({
                success: true,
                message: "The results are retrieved.",
                data: filteredResults,
            });
        }
        // If source is undefined or null
        else {
            return res.status(200).json({
                success: true,
                message: "The results are retrieved.",
                data: results,
            });
        }
    } catch (err) {
        console.log(err);
    }
};

module.exports = main;
