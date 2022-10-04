FROM node:14.17 
WORKDIR /oauth
COPY package.json /oauth
RUN yarn install
COPY . .
EXPOSE 3001
CMD [ "yarn", "start" ]