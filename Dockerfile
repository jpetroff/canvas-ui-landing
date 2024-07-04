FROM node:alpine

ARG appDir=/app
ARG gitBranch=release

RUN mkdir $appDir

WORKDIR $appDir

RUN apk add --no-cache git

RUN npm install pm2 -g

RUN git clone https://github.com/jpetroff/canvas-ui-landing $appDir && \
		git checkout $gitBranch

CMD ['pm2-docker', 'serve', './dist', '8880']
