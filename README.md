<h1 align="center">
  <br>
  <img src="https://raw.githubusercontent.com/KiDxS/BizScrape-API/dev/docs/img/logo.png" height="200" width="200">
  <br>
  BizScrape API
</h1>
<h4 align="center">
  An API to fetch business news from multiple sources in the Philippines. 
</h4>
<div align="center">
  <a href="https://web.facebook.com/KidZenChan/">
    <img src="https://img.shields.io/badge/chat-on%20facebook-orange">
  </a>
  <a href="https://github.com/KiDxS/BizScrape-API/issues/new?assignees=&labels=suggestion&template=suggestion.md&title=%5BSuggestion%5D">
    <img src="https://img.shields.io/badge/send-suggestions-green">
  </a>
  <a href="https://bizscrape-api.herokuapp.com">
    <img src="https://img.shields.io/badge/heroku-demo-blue">
  </a>
</div>
<p align="center">
  <a href="#how-to-setup-for-ourselves">How to setup for ourselves</a> |
  <a href="#key-features">Key Features</a>
</p>
<img align="center" src="https://raw.githubusercontent.com/KiDxS/BizScrape-API/master/docs/img/BizScrape-API.gif">

## Key Features
- Updates data for every 12 hours.
- Filteration for which source you want to receive data.
- Retrieves news from multiple sources.
  - [x] [manilabulletin](https://mb.com.ph/category/business/business-news)
  - [x] [businessmirror](https://businessmirror.com.ph/category/business/)
  - [ ] [inquirer](https://business.inquirer.net/category/latest-stories)
  - [ ] [manilatimes](https://www.manilatimes.net/business)

## How to setup for ourselves
```
# Clone the repo
git clone https://github.com/KiDxS/BizScrape-API

# Edit the .env if you want to change the time when to fetch results from the sources (Default: every 25 mins)

# Build the image and run a container
docker-compose up
```

