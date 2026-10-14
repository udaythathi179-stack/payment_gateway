FROM node:20-alpine
WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev || true
COPY index.html style.css payment.js students_data.json server.js ./
COPY robots.txt ./
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s CMD wget -qO- http://127.0.0.1:3000/health | grep -q ok || exit 1
CMD ["npm", "start"]
