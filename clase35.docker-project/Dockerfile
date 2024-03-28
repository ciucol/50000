FROM node

WORKDIR /my-app

COPY package*.json .

RUN npm i

COPY . .

EXPOSE 3000

CMD ["node", "src/index.js"]