FROM node:14.17-alpine
WORKDIR /oauth
COPY ["package.json", "./"]
RUN ["yarn"]
COPY [".", "./"]
EXPOSE 3001
CMD [ "yarn", "start" ]