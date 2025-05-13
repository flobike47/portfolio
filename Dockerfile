FROM --platform=linux/amd64 node:18.3 as build

WORKDIR /usr/src/app

COPY . ./

RUN npm install -g vite

RUN npm install

RUN npx tailwindcss -i ./style.css -o ./dist/output.css --watch

RUN npm run build

RUN cp .htaccess dist/.htaccess
RUN cp ./dist/output.css ./output.css
# Stage 2

FROM --platform=linux/arm64 httpd:2.4

COPY --from=build /usr/src/app/dist /usr/local/apache2/htdocs

RUN echo "LoadModule rewrite_module modules/mod_rewrite.so" >> /usr/local/apache2/conf/httpd.conf \
    && echo "<Directory \"/usr/local/apache2/htdocs\">" >> /usr/local/apache2/conf/httpd.conf \
    && echo "    AllowOverride All" >> /usr/local/apache2/conf/httpd.conf \
    && echo "</Directory>" >> /usr/local/apache2/conf/httpd.conf

EXPOSE 80

CMD ["httpd-foreground"]