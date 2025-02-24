# Basis-Image für den Build
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

# Kopiere die gebauten Dateien in das Standard-Nginx-HTML-Verzeichnis
COPY --from=build /app/dist /usr/share/nginx/html

# Kopiere eine benutzerdefinierte Nginx-Konfiguration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Port 80 freigeben
EXPOSE 80

# Starten von Nginx im Vordergrund
CMD ["nginx", "-g", "daemon off;"]
