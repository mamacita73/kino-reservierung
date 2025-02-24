# Basis-Image für das Frontend
FROM node:18-alpine AS build

WORKDIR /app

# Kopiere package.json und installiere Abhängigkeiten
COPY package.json package-lock.json ./
RUN npm install

# Kopiere den gesamten Code und baue das Frontend
COPY . .
RUN npm run build

# Verwende ein leichtes NGINX-Image als Server
FROM nginx:alpine

# Nginx Konfiguration kopieren
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Gebaute Dateien kopieren
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
