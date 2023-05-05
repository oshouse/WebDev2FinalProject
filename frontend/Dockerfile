FROM node
COPY . usr/share/
WORKDIR /usr/share/
RUN npm install
RUN npm i -g @angular/cli
CMD [ "ng", "serve" ]