# Utilisez l'image officielle de Node.js 20
FROM node:20-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source
COPY . .

# Builder l'application
RUN npm run build

# Exposer le port 3000 (ou le port que vous utilisez en développement)
EXPOSE 3000

# Commande pour servir l'application (avec le serveur de développement Vite)
CMD ["npm", "run", "dev"]