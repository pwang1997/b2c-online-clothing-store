FROM node:14.17-alpine
WORKDIR /oauth
COPY ["package.json", "yarn.lock", "./"]
RUN ["yarn"]
COPY [".", "./"]
EXPOSE 3001
CMD [ "yarn", "start" ]