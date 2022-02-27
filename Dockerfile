FROM node:16
WORKDIR /var/www/nodejs-app/
COPY src/package.json /var/www/node_modules_cache/
COPY . .
RUN npm install -g typescript
RUN npm install -g ts-node
RUN npm install -g nodemon
WORKDIR /var/www/node_modules_cache/
RUN npm install
EXPOSE 3000
WORKDIR /var/www/nodejs-app/src
ENTRYPOINT [ "bash","command.sh" ]