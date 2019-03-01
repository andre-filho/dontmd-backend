FROM node:10.14

EXPOSE 3000

WORKDIR /backend

COPY . /backend

RUN yarn install -f

RUN rm -rf /backend/nginx

CMD yarn run server
