
const path = require('path')

module.exports = {
  
  build: {
    extend: ( config, { isDev, isClient } ) => {
      config.node = {
        fs: "empty"
      }
    },
    styleResources: {
      sass: './assets/sass/main.sass'
    }
  },
  dev: ( process.env.NODE_ENV !== 'production' ),
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3030'
  },
  head: {
    title: 'App',
    titleTemplate: '%s - Nuxt.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  },
  loading: {
    color: '#141414',
    height: '2px'
  },
  modules: [
    ['nuxt-sass-resources-loader', [
      './assets/sass/main.sass'
    ]]
  ],
  srcDir: 'client/'
  
}