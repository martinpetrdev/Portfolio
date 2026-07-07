ARG NODE_VERSION=22-alpine
ARG PNPM_VERSION=latest-11

FROM node:${NODE_VERSION} AS dependencies
ARG PNPM_VERSION

RUN apk add --no-cache python3 make g++

RUN npm install -g pnpm@${PNPM_VERSION}

WORKDIR /app
COPY package.json /app
COPY pnpm-lock.yaml /app
COPY pnpm-workspace.yaml /app

RUN --mount=type=cache,target=/root/.local/share/pnpm/store pnpm install --frozen-lockfile

FROM node:${NODE_VERSION} AS builder
ARG PNPM_VERSION

RUN npm install -g pnpm@${PNPM_VERSION}

WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules
COPY . /app
ENV NODE_ENV=production

RUN pnpm build

FROM node:${NODE_VERSION} AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3001
ENV HOST="0.0.0.0"

# Copy dist outputs and dependencies
COPY --from=builder --chown=node:node /app/dist ./dist
COPY --from=builder --chown=node:node /app/node_modules ./node_modules
COPY --from=builder --chown=node:node /app/package.json ./package.json

USER node

EXPOSE 3001
EXPOSE 2222

CMD ["node", "dist/main.js"]
