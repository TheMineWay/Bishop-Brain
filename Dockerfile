# Stage 1: Build React app
FROM node:20.10.0-alpine3.18 as build
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

# Stage 2: Serve React app with Nginx
FROM nginx:latest
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy SSL certificate and key
COPY ./ssl/certificate.crt /etc/nginx/cert/
COPY ./ssl/private.key /etc/nginx/cert/

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]