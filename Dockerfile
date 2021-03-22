FROM node:12-alpine

WORKDIR /home/api

COPY package.json .

COPY yarn.lock .

COPY . .

RUN npm install

CMD npm run start:dev
