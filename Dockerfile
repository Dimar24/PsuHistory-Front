FROM node:16

# set working directory
RUN mkdir /usr/share/app
WORKDIR /usr/share/app

# add `/usr/share/app/node_modules/.bin` to $PATH
ENV PATH /usr/share/app/node_modules/.bin:$PATH
# install and cache app dependencies
COPY package.json /usr/share/app/package.json
#COPY package-lock.json /usr/share/app/package-lock.json
RUN npm install

# add app
COPY . /usr/share/app
EXPOSE 4200 49153
CMD ["ng", "--host=0.0.0.0","--watch", "--poll=2000", "serve"]
