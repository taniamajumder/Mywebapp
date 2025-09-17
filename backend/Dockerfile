# Use Node.js LTS
FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --production

# Copy app source
COPY . .

EXPOSE 5001
CMD ["node", "server.js"]
