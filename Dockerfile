FROM node:alpine

WORKDIR /public

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "transpile", "&&", "rm -rf", "src", "&&", "npm", "start"];
