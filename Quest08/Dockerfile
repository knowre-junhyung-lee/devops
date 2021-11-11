FROM node:14-alpine


# 앱 디렉터리 생성
WORKDIR /usr/src/app

# 앱 소스 추가
COPY http-server.js .

EXPOSE 3000
CMD [ "node", "http-server.js" ]
