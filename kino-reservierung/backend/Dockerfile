# Basis-Image für Node.js verwenden
FROM node:18-alpine

# Arbeitsverzeichnis im Container setzen
WORKDIR /app

# Kopiere package.json und installiere Abhängigkeiten
COPY package.json package-lock.json ./
RUN npm install

# Kopiere den restlichen Code ins Arbeitsverzeichnis
COPY . .

# Port für das Backend freigeben
EXPOSE 7000

# Befehl zum Starten des Servers
CMD ["node", "server.js"]
