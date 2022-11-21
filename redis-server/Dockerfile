FROM node:lts-alpine
WORKDIR /node-redis-server
COPY ["package.json", "./"]
RUN ["npm", "install"]
COPY . .
EXPOSE 4000
CMD ["npm", "start"]