# node image https://hub.docker.com/_/node
# this is build phase
FROM node:alpine as builder

# Create app directory
WORKDIR /app

COPY ./package.json .

# remove proxy if there's any, if not there's error for React
RUN npm config set proxy null
RUN npm config set https-proxy null
RUN npm config set registry http://registry.npmjs.org/

RUN npm install

COPY . . 

RUN npm run build

# all the stuff will be in /app/build after build
FROM nginx
# from which dir 
COPY --from=builder /app/build /usr/share/nginx/html