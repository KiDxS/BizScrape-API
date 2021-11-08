const axios = require("axios");
const cheerio = require("cheerio");

const results = [];

exports.manilabulletin = async () => {
  try {
    const source = "manilabulletin";
    const url = "https://mb.com.ph/category/business/business-news/";
    const html_response = await axios.get(url);
    const html = await html_response.data;
    const $ = cheerio.load(html);

    const articles = await $("h4.title").find("a");
    articles.each((index, element) => {
      const title = $(element).text();
      const url = $(element).attr("href");
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

exports.businessmirror = async () => {
  try {
    const source = "businessmirror";
    const url = "https://businessmirror.com.ph/category/business/";
    const html_response = await axios.get(url);
    const html = await html_response.data;

    // loads the html to cheerio
    const $ = cheerio.load(html);
    // scrapes for any h2 tags that has a tag children
    const articles = await $("h2.cs-entry__title").find("a");

    articles.each((index, element) => {
      // takes the text or string
      const title = $(element).text();
      // takes the url link
      const url = $(element).attr("href");
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
exports.results = results;
