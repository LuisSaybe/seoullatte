#!/bin/bash

if [ $TRAVIS_BRANCH == "master" ]
then
  envsubst < web/js/settings/production.json > web/js/settings/production-copy.json
  cat web/js/settings/production-copy.json > web/js/settings/production.json

  echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
  docker build --rm -f docker/Dockerfile -t luissaybe/seoullatte .
  docker push luissaybe/seoullatte:latest
  docker logout
fi
