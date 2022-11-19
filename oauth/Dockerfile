FROM node:lts-alpine
WORKDIR /oauth
COPY ["package.json", "./"]
RUN ["yarn"]
COPY [".", "./"]
EXPOSE 3001
CMD [ "yarn", "start" ]