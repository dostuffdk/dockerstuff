FROM php:7.0-fpm

RUN apt-get update && apt-get install -y \
    libmcrypt-dev

RUN docker-php-ext-install pdo_mysql \
    && docker-php-ext-install json \
    && docker-php-ext-install mcrypt
