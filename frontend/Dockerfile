FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

ENV PORT=3007
EXPOSE 3007

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3007"]
