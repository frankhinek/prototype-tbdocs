FROM node:16-alpine

RUN mkdir /app
WORKDIR /app

COPY package.json /app
RUN npm install

COPY ./bin /app/bin
RUN npm link

VOLUME /app/docs /app/build

ENTRYPOINT ["tbdoc", "build"]
