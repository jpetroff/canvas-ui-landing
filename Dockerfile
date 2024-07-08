# syntax=docker/dockerfile:1
FROM node:alpine

ARG appDir=/app

EXPOSE 8880

RUN mkdir $appDir

WORKDIR $appDir

ADD docker-start.sh /

RUN chmod +x /docker-start.sh

RUN apk add --no-cache git

RUN npm install pm2 express -g

CMD /docker-start.sh