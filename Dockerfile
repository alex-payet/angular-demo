FROM node:16-alpine as build-step

RUN mkdir -p /angular-demo/src
WORKDIR /angular-demo
COPY *.js* /angular-demo
RUN npm install

COPY src /angular-demo/src

RUN npm run build --prod

FROM nginx:1.17.1-alpine
COPY --from=build-step /angular-demo/dist/angular-test /usr/share/nginx/html

