FROM node:current-alpine

COPY package*.json ./
RUN npm install

COPY . .
CMD ["npm", "start"]