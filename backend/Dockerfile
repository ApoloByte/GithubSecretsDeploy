FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --only=production

COPY . .

ENV PORT=3507
EXPOSE 3507

CMD ["npm", "start"]
