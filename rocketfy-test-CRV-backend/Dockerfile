FROM node:20-alpine

WORKDIR /app
COPY package.json ./
RUN npm install

COPY . .
EXPOSE 3333

CMD ["node", "ace", "serve", "--watch", "--encore-args=--host", "0.0.0.0"]

