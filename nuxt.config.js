//
// This is the "nuxt.config.js" file for this Feathers JS + Nuxt JS boilerplate.
// You can read more about the "nuxt.config.js" file in Nuxt's API which
// can be found here: https://nuxtjs.org/api .
//
module.exports = {
  
  // Nuxt Build - https://nuxtjs.org/api/configuration-build
  build: {
    
  },

  // Nuxt CSS - https://nuxtjs.org/api/configuration-css
  css: [
    '@/assets/sass/main.sass'
  ],

  // Nuxt Dev - https://nuxtjs.org/api/configuration-dev
  dev: ( process.env.NODE_ENV !== 'production' ),

  // Nuxt Env - https://nuxtjs.org/api/configuration-env
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3030'
  },

  // Nuxt Head - https://nuxtjs.org/api/configuration-head
  head: {
    title: 'App',
    titleTemplate: '%s - Feathers + Nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  },

  // Nuxt Loading - https://nuxtjs.org/api/configuration-loading
  loading: {
    color: '#141414',
    height: '2px'
  },

  // Nuxt Plugins (can be custom plugins as well) - https://nuxtjs.org/api/configuration-plugins
  plugins: [
    '~/plugins/login.js'
  ],

  // Nuxt Render - https://nuxtjs.org/api/configuration-render
  render: {
    // Gzip compression. Can be set to a value from 0 - 9.
    gzip: {
      threshold: 9 // 9 is the "best" compression.
    },
    // Enables http2: https://developers.google.com/web/fundamentals/performance/http2/
    http2: {
      push: true
    },
    bundleRenderer: {
      shouldPreload: ( file, type ) => {
        return ['script', 'style', 'font'].includes( type )
      }
    }
  },

  // Nuxt srcDir - https://nuxtjs.org/api/configuration-srcdir
  srcDir: 'client/'
  
}