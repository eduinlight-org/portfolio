ARG NODE_VERSION
FROM node:${NODE_VERSION}

RUN npm install -g pnpm@10.33.0

RUN apt-get update \
  && apt-get upgrade -yq \
  && apt-get install -yq build-essential python3 procps

ARG UID
ARG GID

RUN usermod -u ${UID} node; groupmod -g ${GID} node || true

WORKDIR /home/node/app
RUN chown -R ${UID}:${GID} /home/node

USER node
