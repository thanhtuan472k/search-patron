# First stage
FROM node:18-alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# second stage
FROM nginx
COPY --from=builder '/app/build' '/usr/share/nginx/html'