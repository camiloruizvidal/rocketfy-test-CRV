FROM node:20-alpine

WORKDIR /app
COPY package.json ./
RUN npm install
RUN npm install -g @adonisjs/cli
COPY . .
EXPOSE 3333

CMD ["adonis", "serve", "--dev", "--host", "0.0.0.0"]
