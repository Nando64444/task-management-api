# ETAPA 1: dependencias
FROM node:22-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# ETAPA 2: build (aquí se llama "builder")
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules/
COPY . .
RUN npx prisma generate
RUN npm run build

# ETAPA 3: producción (la imagen final)
FROM node:20-alpine
RUN apk add --no-cache openssl
# O más completo si hay otros problemas de compat:
# RUN apk add --no-cache libc6-compat openssl
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app/dist ./dist/
COPY --from=builder /app/node_modules ./node_modules/
COPY --from=builder /app/prisma ./prisma/
COPY --from=builder /app/package*.json ./

RUN npm prune --production

RUN addgroup -g 1001 nodejs && adduser -S nestjs -u 1001 -G nodejs
RUN chown -R nestjs:nodejs /app/node_modules/@prisma && chmod -R 775 /app/node_modules/@prisma

USER nestjs

EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && exec node dist/main"]