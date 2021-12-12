FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g nodemon
RUN npm install

COPY . .

EXPOSE 8080

CMD [ "nodemon", "src/app.js" ]