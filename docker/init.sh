#!/bin/bash

cd $SOURCE_DIRECTORY

if [ $ENABLE_NGINX != "" ]
then
  nginx -c /root/nginx.conf
fi

node server.js
