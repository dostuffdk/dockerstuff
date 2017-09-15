# dockerstuff

Opinionated Docker starting point for development with: 

- nginx
- PHP 7
- MySQL
- phpMyAdmin
- webpack
- PostCSS with cssnext
- babel

## Requirements

- **Docker** (with docker-compose), **npm** and **webpack** installed on your development machine.

## Usage

- Clone the project
- Run `docker-compose up --build`
- Run `npm install`
- Run `webpack`
- Ready to go on `http://localhost`. Open `website/index.php` and `assets/app.js` in your editor and have fun.

## PostCSS notice

PostCSS is configured to use cssnext and imports.

## webpack notice

Using the extract-text-plugin, styles are put into a seperate css file rather than just included in the javascript bundle.

## Folder structure

- `website` is what nginx sees: the document root. Place your "main" PHP or HTML file(s) here along with whatever the browser needs access to.
- `website/js` and `website/css` are destinations for the webpacked bundles.
- `assets` is for your javascript and CSS files that webpack should crunch on.

## MySQL

A database is created.

Connect using following info:

- Host: `mysql`
- Database: `project`
- User: `project`
- Password: `project`

## phpMyAdmin

Available at port 8080.

- Username: `root`
- Password: `1234`
