#!/bin/bash

# update the web server (assuming it's using systemd)
yum update -y

#remove all files before used

rm -rf /var/www/html/*

cp /app/build/* /var/www/html
cd /var/www/html
service httpd restart