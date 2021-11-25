# BizScrape-API
An API that allows you to fetch business news coming from multiple sources that are in the Philippines.

## Features
1. Scrape business news from multiple sources.
2. Filter for a specific source from the database.
3. Show the results of the scraping by providing a simple endpoint that can received a GET request.

## Design
1. When returning the results it must follow the following structure:
    ```
    [{
        "success": boolean,
        "title": title of article,
        "url": url of the article,
        "source": source of the article
    },
    {
        "success": boolean,
        "title": title of article,
        "url": url of the article,
        "source": source of the article
    }]
    ```
    which is an array of objects
2. The endpoints must follow the following structure:
    ```
    https://example.com/{api_version}/resource
    ```