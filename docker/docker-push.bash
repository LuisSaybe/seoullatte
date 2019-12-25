#!/bin/bash

echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker build --rm -f docker/Dockerfile -t luissaybe/joseon .
docker push luissaybe/joseon:latest
docker logout
