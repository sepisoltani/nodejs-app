FROM node:16
WORKDIR /var/www/nodejs-app/
COPY . .
RUN npm install -g typescript
RUN npm install -g ts-node
RUN npm install -g nodemon
WORKDIR /var/www/nodejs-app/src
RUN npm install
EXPOSE 3000
WORKDIR /var/www/nodejs-app/src
CMD [ "npm", "run", "start:watch" ]