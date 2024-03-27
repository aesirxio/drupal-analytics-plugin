# Drupal analytics plugin

Drupal plugin for tracking and storing the tracking data in the 1st party 
Aesirx Analytics server.

## Requirements 

This module requires no modules outside of Drupal core.

## Installation

If your site is managed via Composer, use Composer to download the
aesirx_analytics module running composer require aesirx/aesirx_analytic.

Otherwise, copy/upload the aesirx_analytics module to the modules/custom
directory of your Drupal installation.

For further information check the instruction manual on
`https://analytics.aesirx.io/install-guide/drupal`

## Configuration

Go to Configuration (/admin/config) and find the Aesirx Analytics under the
Webservice for editing (/admin/config/services/aesirx_analytics).

Edit the configuration for your requirements.

First, you will need to select if you are going to use Internal or External
1stParty server.

- Internal - there will be a prompt to install the CLI Library which is
necessary to have it all internal. Also, you will need to add the Licence Key
for Aesirx Analytics and CLIENT_ID and CLIENT_SECRET from
`https://dapp.shield.aesirx.io/licenses`. 
- External - You will need to add the URL of your external 1stParty server and
enter the CLIENT_ID and CLIENT_SECRET from `https://dapp.shield.aesirx.io/licenses`.

The Consent checkbox is for the Consent pop-up on the frontpage and
Shield of Privacy option.

At the end of the configuration are Drupal specific options for
tracking or removing tracking for specific pages and roles.

Save the configuration.

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
