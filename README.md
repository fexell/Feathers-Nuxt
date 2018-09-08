# Feathers JS + Nuxt JS

> Feathers JS + Nuxt JS
  
This project uses the lastest @feathersjs (@feathersjs/cli) and latest NuxtJS. It's also setup using .gzip-compression (0) and SCSS. Change the gzip threshold in "nuxt.config.js" to desired compression ( https://www.npmjs.com/package/compression ). This is lightly based off of the FeathersJS tutorial, found here https://blog.feathersjs.com/ssr-vuejs-app-with-feathers-and-nuxt-bb7dfd3e6397 , but updated to use the latest versions of Feathers and Nuxt.  
NuxtJS: https://nuxtjs.org/  
FeathersJS: https://feathersjs.com/  
  
> Backend: [FeathersJS](https://feathersjs.com/)  
> Frontend: [NuxtJS](https://nuxtjs.org/)
> Database: [MongoDB (using Mongoose)](https://mongoosejs.com/)

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/feahtersjs-nuxtjs-app; npm install
    ```

3. Start your app

    ```
    npm start
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

## Changelog

__0.1.0__

- Initial release

## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).
