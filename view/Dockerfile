# FROM node:latest-alpine as build
# WORKDIR /app
# COPY package.json /app
# RUN yarn
# COPY . .
# EXPOSE 3000
# CMD [ "yarn", "start" ]

# docker build -t react-image-b2c-store .                                  creaCte docker image
# docker image rm [Image ID]                                               delete docker image
# docker run -d -p 3000:3000 --name react-app react-image-b2c-store        create docker container
# docker rm react-app -f                                                   delete docker container


FROM node:14.17-alpine as react_build 
#also say 
WORKDIR /app
#copy the react app to the container
COPY ["package.json", "./"]
RUN ["yarn"]
COPY . /app/ 

# #prepare the contiainer for building react 
RUN npm run build 

#prepare nginx
FROM nginx:1.16.0-alpine

COPY --from=react_build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

#fire up nginx
EXPOSE 80 
CMD ["nginx","-g","daemon off;"]