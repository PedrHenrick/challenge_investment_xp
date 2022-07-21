FROM node:alpine

WORKDIR /public

COPY package*.json .

RUN npm install

COPY . .

RUN rm -rf ./src

CMD ["npm", "start"];
