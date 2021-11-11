#!/bin/bash
TAG="0.0.6"

docker build -t jhlee5391/http-server:${TAG} .
docker push jhlee5391/http-server:${TAG}

aws ssm send-command --document-name "AWS-RunShellScript" --document-version "1" --targets '[{"Key":"InstanceIds","Values":["i-06306cd2c6fff02a6"]}]' --parameters '{"workingDirectory":[""],"executionTimeout":["3600"],"commands":["cd /home/webApp","docker-compose down","sed -i \"s/0.0.5/0.0.6/g\" docker-compose.yml","docker-compose up -d",""]}' --timeout-seconds 600 --max-concurrency "50" --max-errors "0" --region ap-northeast-2
