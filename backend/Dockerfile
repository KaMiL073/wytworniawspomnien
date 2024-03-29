# Docker and Node.js Best Practices:
# https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md

#
# Builder
#

FROM node:16-alpine AS builder

RUN mkdir -p /directus && chown -R node:node /directus
RUN apk --no-cache add git
USER node
WORKDIR /directus
COPY package*.json .
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV
RUN npm install

#
# Image
#

FROM node:16-alpine

USER node
ENV TZ='Europe/Warsaw'
WORKDIR /directus
COPY --from=builder --chown=node:node /directus/node_modules ./node_modules
COPY --chown=node:node . .
ARG NODE_ENV=production
ARG LOG_LEVEL=warn
ARG LOG_STYLE=raw
ENV NODE_ENV=$NODE_ENV \
    LOG_LEVEL=$LOG_LEVEL \
    LOG_STYLE=$LOG_STYLE
EXPOSE 8055
RUN ["chmod", "+x", "./dev/start_dev.sh"]
RUN ["chmod", "+x", "./dev/start.sh"]
RUN ["chmod", "a+rwx", "./uploads"]
ENTRYPOINT ["./dev/start.sh"]
