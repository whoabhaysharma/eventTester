FROM ghcr.io/puppeteer/puppeteer:latest
ENV PUPPETEER_EXECUTABLE_PATT=/usr/bin/google-chrome-stable
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
CMD ["node", "app.js"]