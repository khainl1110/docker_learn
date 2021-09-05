# node image https://hub.docker.com/_/node
FROM node:16-alpine3.11

# Create app directory
WORKDIR /app

COPY ./package.json .

# remove proxy if there's any 
RUN npm config set proxy null
RUN npm config set https-proxy null
RUN npm config set registry http://registry.npmjs.org/

RUN npm install

COPY . . 

CMD ["npm", "start"]