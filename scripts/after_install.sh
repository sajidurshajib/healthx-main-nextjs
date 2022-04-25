#!/bin/bash

cd /var/www/healthxweb
rm -rf /var/www/healthxweb/package-lock.json
rm -rf /var/www/healthxweb/.next/cache

npm install 
npm run build 
pm2 restart healthxweb