# Drupal analytics plugin

Drupal plugin for tracking and storing the tracking data in the 1st party 
Aesirx Analytics server.

## Setup of the Drupal analytics on the site

Please check the instruction manual on `https://analytics.aesirx.io/install-guide/drupal`


## For local setup of the plugin

To install this you will need to clone this repo locally with command:

`git clone https://github.com/aesirxio/drupal-analytics-plugin.git`

## PHP set up

After that you can run the next commands.

`yarn install` - initialize libraries

`yarn build` - for building Joomla zip installer (PHP 7.2 or higher)

`yarn watch` - for watching changes in the JS when developing

## Docker set up

### Linux

Alternatively can be used docker-compose with npm and php included,
see available commands in `Makefile`:
_Before build docker container please make sure you set correct
USER_ID and GROUP_ID in .env file_

`make init` - initialize libraries

`make build` - for building Joomla zip installer (PHP 7.2 or higher)

`make watch` - for watching changes in the JS when developing

### Windows

If you don't have Makefile set uo on Windows you can use direct docker commands.

`docker-compose run php-npm yarn install` - initialize libraries

`docker-compose run php-npm yarn build` - for building Joomla zip installer
(PHP 7.2 or higher)

`docker-compose run php-npm yarn watch` - for watching changes in the JS
when developing

## Installing and Set up

After running the build the package will be created in the `dist` folder.
