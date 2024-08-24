#!/bin/bash
cp /app/build/* /var/www/html
cd /var/www/html
service httpd restart