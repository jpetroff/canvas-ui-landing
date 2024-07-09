## Intro

[Canvas UI](https://canvas.designpr.one) landing page repository

## Run

Using dev contriners from VSCode

```
yarn start
```

## Build 

```
yarn build:server
yarn build:client
```

## Deploy

Create docker container from `Dockerfile`

Add docker-start.sh file
```
#!/bin/sh

cd /app

git clone https://github.com/jpetroff/canvas-ui-landing /app && \
git checkout release

npm install express compression sirv

sed -i 's|%%GTAG%%|<!--your GA tag-->|g' ./dist/client/index.html

NODE_ENV=production pm2-runtime start ./server.js
```

## License

[MIT](LICENSE) © Evgenii Petrov
