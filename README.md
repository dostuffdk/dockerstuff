dockerstuff
=================

Docker starting point for development: PHP (7), phpMyAdmin, webpack, SASS (SCSS) and babel (ES2015).

Requirements:

- Docker (with docker-compose), npm and Webpack installed on your development machine.

Usage:

- Clone the project
- Run `docker-compose up --build`
- Run `npm install`
- Run `webpack`
- Ready to go: Build your stuff within the `website` (for HTML and PHP) and `assets` (for Javascript and SASS) folder. ES2015 is transpiled via Babel. Remember to webpack your assets while developing.

## MySQL

A database is created.

For connecting, use following info:

- Host: `mysql`
- Database: `project`
- User: `project`
- Password: `project`

## phpMyAdmin

Available at port 8080.
Username: `root`
Password: `1234`
