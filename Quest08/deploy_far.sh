#!/bin/bash
TAG="0.0.6"

docker build -t jhlee5391/http-server:${TAG} .
docker push jhlee5391/http-server:${TAG}

aws ecs register-task-definition \
    --cli-input-json file://task.json

aws ecs update-service --cluster junhyung-test-ecs --service test-service --task-definition http-server
