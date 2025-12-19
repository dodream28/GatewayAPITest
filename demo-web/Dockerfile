FROM nginx:1.27-alpine

# custom nginx config
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# static site
COPY site/ /usr/share/nginx/html/

EXPOSE 8080
