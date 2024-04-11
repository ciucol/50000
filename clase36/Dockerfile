FROM node

WORKDIR /my-app

COPY package*.json .

RUN npm i

COPY . .

EXPOSE 8080

CMD ["node", "src/app.js"]