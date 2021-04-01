FROM node:latest as build
WORKDIR /app/frontend
COPY ./frontend/ ./

FROM nginx:stable-alpine
COPY --from=build /app/frontend/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]