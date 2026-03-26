FROM node:20-slim

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 8081

ENV EXPO_NO_DOCTOR=1

CMD ["npm", "start"]
