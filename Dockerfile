FROM node:latest

WORKDIR /app

ENV NODE_OPTIONS=--openssl-legacy-provider

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]