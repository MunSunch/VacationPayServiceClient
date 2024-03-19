FROM arm64v8/nginx:alpine
WORKDIR /opt/app
COPY ./src /usr/share/nginx/html
RUN 'nginx'