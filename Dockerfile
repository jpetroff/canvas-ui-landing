
FROM node:alpine

WORKDIR /app

RUN apk add --no-cache git

RUN git clone https://github.com/jpetroff/canvas-ui-landing

RUN npm install pm2 -g

CMD ['pm2', 'serve', './dist', '8880']
