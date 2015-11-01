# What to steam
Decide what game to steam. Built with React and Redux.

## Setup
1. Install <a href="http://nodejs.org/">Node js</a>.
2. Go in the project directory and ```npm install```
3. Change the config values in app/js/config.dev.js and app/js/config.prod.js

## Linting
For linting, we are using eslint and the excellent [airbnb config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) as a base.

To use the linting on Sublime text 3, install these plugins
* Sublimelinter
* SublimeLinter-contrib-eslint

## Web server
To start the web server
```
npm start
```
Open the browser and go to [http://localhost:3000](http://localhost:3000)

## Build
To build in production
```
npm run build
```