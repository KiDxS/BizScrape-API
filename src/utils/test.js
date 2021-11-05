const crawl = require("./crawl");

async function main() {
    await crawl.businessmirror();
    let results = crawl.results;
    console.log(results);

}
main();