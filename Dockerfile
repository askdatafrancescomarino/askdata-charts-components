FROM nginx:latest
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY ./ /usr/share/nginx/html/
RUN chown -R nginx /usr/share/nginx/html
RUN chmod -r /usr/share/nginx/html 755
