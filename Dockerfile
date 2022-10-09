FROM node:16-alpine
RUN npm i -g pm2
ENV NODE_ENV=production BACKEND_PORT=3030
COPY ./www /www
COPY ./backend /backend
COPY ./nginx /nginx
RUN npm i --prefix ./backend
WORKDIR /backend
CMD pm2 start index.js && pm2 startup && pm2 save