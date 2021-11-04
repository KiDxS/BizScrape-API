const axios = require("axios");
const cheerio = require("cheerio");

const results = [];

exports.businessmirror = async () => {
  try {
    const source = "businessmirror";
    const url = "https://businessmirror.com.ph/category/business/";
    let html_response = await axios.get(url);
    let html = html_response.data;

    // loads the html to cheerio
    let $ = cheerio.load(html);
    // scrapes for any h2 tags that has a tag children
    let article = $("h2").find("a");

    article.each((index, element) => {
      // takes the text or string
      let title = $(element).text();
      // takes the url link
      let url = $(element).attr("href");
      // pushes them to the results array as objects
      results.push({
        title: title,
        url: url,
        source: source,
      });
    });
  } catch (err) {
    console.error(err);
  }
};

/*
TO DO: Learn how to get a class or a attribute from a nested classes.
exports.manilaTimes = async () => {
    try{
        const source = "manilatime"
        const url = "https://www.manilatimes.net/business";
        let html_response = await axios.get(url);
        let html = html_response.data;
        let $ = cheerio.load(html);
        let article_link = $(".col-md-9 col-xs-12");
        console.log(article_link);
        article_link.each((index, element) => {
            let url = $(element).attr("href");
            let title = $(element).attr("title");
            console.log({
                success: true,
                title,
                url,
                source: source
            });
            
        });

    } catch (err) {
        console.log(err);
    }
};

*/
exports.results = async () => {
  return results;
};