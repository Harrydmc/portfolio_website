FROM node:lts-alpine3.19
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "start"]