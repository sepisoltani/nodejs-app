FROM node:16

# Create app directory
WORKDIR /var/www/nodejs-app/

COPY * .
# Install app dependencies

RUN npm install -g typescript
RUN npm install -g ts-node
CMD ["cd", "src"]
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source



EXPOSE 3000
CMD ["cd", "/var/www/nodejs-app/src"]
CMD [ "npm", "start" ]