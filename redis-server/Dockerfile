FROM node:lts-alpine
WORKDIR /node-redis-server
COPY . .
RUN npm ci --only=production
EXPOSE 4000
CMD["npm", "start"]