
#build front end
FROM node:14-alpine AS client_build

WORKDIR /app

COPY ./frontend /app/

RUN npm install
RUN npm i -g @angular/cli
CMD ["node" , "server"]

#build back end
FROM node:14-alpine AS server_build

WORKDIR /app

COPY ./backend /app/
COPY --from=client_build /. /.

RUN npm i node
RUN npm i express
RUN npm i mongoose
RUN npm install --production

CMD [ "ng", "serve" ]

#build docker
FROM alpine

WORKDIR /app
RUN apk add --no-cache nodejs

COPY --from=server_build /app ./

EXPOSE 4200
