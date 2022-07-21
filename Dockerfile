FROM node

WORKDIR /public

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "start"];
