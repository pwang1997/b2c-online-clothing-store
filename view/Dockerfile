FROM node:14.17
WORKDIR /app
COPY package.json /app
RUN yarn install
COPY . .
EXPOSE 3000
CMD [ "yarn", "start" ]

# docker build -t react-image-b2c-store .                                  creaCte docker image
# docker image rm [Image ID]                                               delete docker image
# docker run -d -p 3000:3000 --name react-app react-image-b2c-store        create docker container
# docker rm react-app -f                                                   delete docker container