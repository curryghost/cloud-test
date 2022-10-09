FROM nginx:1.23.1-alpine
ENV NODE_ENV=production
COPY ./www /www
COPY ./nginx etc/nginx
EXPOSE 80