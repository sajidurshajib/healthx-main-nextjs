#!/bin/bash

cd /var/www/healthxweb
rm -rf /var/www/healthxweb/package-lock.json
rm -rf /var/www/healthxweb/.next/cache

/root/.nvm/versions/node/v14.19.1/bin/npm install 
/root/.nvm/versions/node/v14.19.1/bin/npm run build 
/root/.nvm/versions/node/v14.19.1/bin/pm2 restart all