FROM node:16 AS build
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY . .

# run tests
# RUN ng test --watch=false

RUN npm run build


FROM nginx:1.21.0
COPY ./config/nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
COPY --from=build /usr/src/app/dist/PsuHistory-Front/ .
