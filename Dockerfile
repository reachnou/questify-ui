# pull the official base image
FROM node:alpine
# set working direction
WORKDIR /app
# add app
COPY . ./

EXPOSE 3000
# start app
CMD ["npx", "serve", "-s", "build"]