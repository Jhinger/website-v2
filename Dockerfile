
ARG NODE_VERSION=18.17.1
FROM node:${NODE_VERSION}-alpine AS base

FROM base AS deps
RUN apk add --no-cache 
WORKDIR /src
COPY package.json package-lock.json ./
RUN npm ci

FROM base AS dev
WORKDIR /src
COPY --from=deps /src/node_modules ./node_modules
COPY . .

FROM base AS builder
WORKDIR /src
COPY --from=deps /src/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /src
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /src/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /src/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /src/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000

CMD HOSTNAME="0.0.0.0" node server.js
