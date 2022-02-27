#!/bin/bash
cp -r /var/www/node_modules_cache/node_modules/. /var/www/nodejs-app/src/node_modules/
exec npm run start:dev:pm2