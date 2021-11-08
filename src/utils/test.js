const crawl = require("./crawl");

async function main() {
    await crawler.businessmirror();
    await crawler.manilabulletin();
    let results = crawl.results;
    console.log(results);

}
main();