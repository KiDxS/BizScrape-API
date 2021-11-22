<h1 align="center">
  <br>
  <img src="https://raw.githubusercontent.com/KiDxS/BizNews-API/dev/docs/img/logo.png?token=AKL2UL22A2LJXT4BT673ZCTBUNZRQ" height="200" width="200">
  <br>
  BizNews API
</h1>
<h4 align="center">
  An API to fetch business news from multiple sources in the Philippines. 
</h4>
<div align="center">
  <a href="https://web.facebook.com/KidZenChan/">
    <img src="https://img.shields.io/badge/chat-on%20facebook-orange">
  </a>
  <a href="https://github.com/KiDxS/BizNews-API/issues/new?assignees=&labels=suggestion&template=suggestion.md&title=%5BSuggestion%5D">
    <img src="https://img.shields.io/badge/send-suggestions-green">
  </a>
</div>
<p align="center">
  <a href="#how-to-setup-for-ourselves">How to setup for ourselves</a> |
  <a href="#key-features">Key Features</a>
</p>
<img align="center" src="https://raw.githubusercontent.com/KiDxS/BizNews-API/dev/docs/img/BizNews-API.gif?token=AKL2UL5Z27Z54SXBNAVR6UTBUQSTQ">

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
git clone https://github.com/KiDxS/BizNews-API

# Install docker & docker-compose
apt install docker docker-compose | pacman -S docker docker-compose

# Build the image and run a container
docker-compose up
```

