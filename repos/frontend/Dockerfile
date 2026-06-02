ARG NODE_VERSION=22-alpine
ARG PNPM_VERSION=latest-11

FROM node:${NODE_VERSION} AS dependencies
ARG PNPM_VERSION

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
ENV NEXT_TELEMETRY_DISABLED=1

RUN pnpm build

FROM node:${NODE_VERSION} AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

COPY --from=builder --chown=node:node /app/public ./public

RUN mkdir .next
RUN chown node:node .next
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

USER node

CMD ["node", "server.js"]