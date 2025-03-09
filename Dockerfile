FROM harbor.dats.tech/proxy/nginxinc/nginx-unprivileged:1.27

COPY ./dist /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
