FROM node:9.2.0

WORKDIR /app

RUN npm install -g truffle

COPY . .
RUN npm install

EXPOSE 3000

CMD npm start
