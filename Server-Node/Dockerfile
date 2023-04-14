FROM node:17

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm i nodemon

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]