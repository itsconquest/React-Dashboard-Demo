#Dockerfile used to build frontend image
FROM node:alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN yarn install

ADD src /usr/src/app/src
ADD public /usr/src/app/public