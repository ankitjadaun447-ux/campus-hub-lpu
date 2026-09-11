# Stage 1: Build Frontend
FROM node:24-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Production Server
FROM node:24-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev && npm install tsx
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server ./server
COPY --from=builder /app/src/data ./src/data
RUN mkdir -p data

EXPOSE 3001
ENV PORT=3001
ENV NODE_ENV=production

CMD ["npx", "tsx", "server/index.ts"]
