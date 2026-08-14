ARG NODE_VERSION=22

FROM node:${NODE_VERSION}-alpine AS base
RUN npm install -g pnpm@10.33.0
WORKDIR /app
COPY . .

FROM base AS build
ARG VITE_SITE_URL
ENV VITE_SITE_URL=${VITE_SITE_URL}
RUN pnpm install --frozen-lockfile
RUN pnpm build

FROM base AS install-prod
RUN pnpm install --frozen-lockfile --prod --ignore-scripts

FROM node:${NODE_VERSION}-alpine AS prod
WORKDIR /app
COPY --from=install-prod /app/node_modules ./node_modules
COPY --from=build /app/build ./build
COPY --from=build /app/package.json ./package.json
ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=3000
EXPOSE 3000
CMD ["npx", "react-router-serve", "./build/server/index.js"]
