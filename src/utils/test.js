const crawler = require("./crawl");

async function main() {
    await crawler.businessmirror();
    await crawler.manilabulletin();
    const results = crawler.results;
    const filteredResults = [];
    for(const index in results){
      const source = "businessmirror";
      const element = results[index];
      const retrieveSource = results[index].source;

      if(retrieveSource == source){
        filteredResults.push(element);
      }
    };
    console.log(filteredResults);
    
}

main();
