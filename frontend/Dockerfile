FROM node:17-alpine

ENV PORT 3000
ENV TZ='Europe/Warsaw'

WORKDIR /usr/src/app

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV


COPY package*.json /usr/src/app

RUN npm install

COPY . /usr/src/app

ARG NEXT_PUBLIC_URL=
ENV NEXT_PUBLIC_URL=$NEXT_PUBLIC_URL


ENTRYPOINT ["./node_modules/.bin/next"]

CMD ["dev"]