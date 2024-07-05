# syntax=docker/dockerfile:1
FROM node:alpine

ARG appDir=/app
ARG gitBranch=release

EXPOSE 8880

RUN mkdir $appDir

WORKDIR $appDir

RUN apk add --no-cache git

RUN npm install pm2 -g

RUN touch ./start.sh && chmod +x ./start.sh

COPY <<-"EOT" ./start.sh
#!/bin/sh
git clone https://github.com/jpetroff/canvas-ui-landing ${appDir} && \
git checkout ${gitBranch}

pm2 serve ./dist 8880 --no-daemon
EOT

ENTRYPOINT './start.sh'
