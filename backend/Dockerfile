FROM node
COPY . /usr/share/
WORKDIR /usr/share/
RUN npm install
RUN npm install node
RUN npm install express
RUN npm i -g @angular/cli
CMD [ "node", "server.js" ]