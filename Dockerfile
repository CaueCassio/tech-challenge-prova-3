FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: Runtime
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY --from=build /app/dist ./dist

EXPOSE 8080

CMD ["npm", "start"]
