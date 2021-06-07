FROM node:16 AS build-env
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install

# add app
COPY . /usr/src/app

# run tests
# RUN ng test --watch=false

# generate build
RUN npm run build

# Build runtime image
FROM nginx:1.21.0
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
COPY --from=build-env /usr/src/app/dist/PsuHistory-Front/ .

# expose port 80
EXPOSE 80