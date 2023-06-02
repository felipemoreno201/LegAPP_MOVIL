FROM node:16-bullseye

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 19006

CMD [ "npm", "start" ] 