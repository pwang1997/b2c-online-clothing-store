FROM node:lts-alpine
WORKDIR /node-redis-server
COPY . .
RUN npm install
EXPOSE 4000
CMD ["npm", "start"]