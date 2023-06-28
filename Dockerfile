FROM node:14-alpine
WORKDIR /app
COPY index.html style.css script.js .
COPY images ./images
RUN ls
RUN npm install -g http-server
CMD ["http-server", "-p", "80"]

