# Basis-Image für das Frontend
FROM node:18-alpine AS build

# Arbeitsverzeichnis setzen
WORKDIR /app

# Kopiere package.json und installiere Abhängigkeiten
COPY package.json package-lock.json ./
RUN npm install

# Kopiere den restlichen Code und baue das Frontend
COPY . .
RUN npm run build

# Verwende ein leichtes NGINX-Image als Server
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Port 80 freigeben als Standard
EXPOSE 80
