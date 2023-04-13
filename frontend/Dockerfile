# Build
FROM --platform=$BUILDPLATFORM node:18-alpine as builder
WORKDIR /app
COPY tsconfig.json tsconfig.json
COPY tsconfig.app.json tsconfig.app.json
COPY package*.json ./
COPY angular.json angular.json
RUN npm install glob rimraf
RUN npm install
COPY src src
RUN npm install
RUN npm install @angular/cli
RUN npm run build --prod --output-path=/app/dist

# Targets
FROM nginx as portal
COPY --from=builder /app/dist/* /usr/share/nginx/html

# docker build -t <tag> --target <target> .
