FROM php:7.0-fpm

RUN apt-get update && apt-get install -y \
    libmcrypt-dev

RUN docker-php-ext-install pdo_mysql \
    && docker-php-ext-install json \
    && docker-php-ext-install mcrypt

RUN apt-get install -y nodejs npm

RUN npm install -g webpack@1.x
RUN npm install
