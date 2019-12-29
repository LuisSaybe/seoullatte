#!/bin/bash

if [ $TRAVIS_BRANCH == "master" ]
then
  envsubst < web/js/settings-production.js > web/js/settings-production.js
fi

echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker build --rm -f docker/Dockerfile -t luissaybe/joseon .
docker push luissaybe/joseon:latest
docker logout
