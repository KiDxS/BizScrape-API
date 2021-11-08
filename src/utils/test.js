const crawler = require("./crawl");

async function main() {
  await crawler.businessmirror();
  await crawler.manilabulletin();
  let results = crawler.results;
  console.log(results);
}

main();
