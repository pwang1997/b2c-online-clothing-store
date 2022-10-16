FROM node:14.17-alpine
WORKDIR /payment
COPY ["package.json", "package-lock.json", "./"]
RUN ["npm", "install"]
COPY [".", "./"]
EXPOSE 5000
CMD [ "npm", "start" ]