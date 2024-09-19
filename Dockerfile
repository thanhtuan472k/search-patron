# Start from the latest node base image
FROM node:18-alpine as builder

# Set the Current Working Directory inside the container
WORKDIR /app

# Install ts
RUN npm install -g typescript

# Copy package.json and yarn.lock first, for caching deps
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Use nginx to serve the built application
FROM nginx

WORKDIR /usr/share/nginx/html

# Expose port
EXPOSE 80

# Copy nginx configuration file
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy the built application from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html