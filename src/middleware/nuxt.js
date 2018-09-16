
const { Nuxt, Builder } = require('nuxt')

const isProd = (process.env.NODE_ENV === 'production')

const config = require('../../nuxt.config')

// Change "!isProd" to "isProd" for production ready, which disables
// errors, Vue Devtools, etc.
config.dev = !isProd
const nuxt = new Nuxt(config)

if(config.dev) {
  
  new Builder(nuxt).build()
  .then(() => process.emit('nuxt:build:done'))
  .catch((error) => {
    
    console.error(error)
    process.exit(1)
    
  })
  
} else {
  
  process.nextTick(() => process.emit('nuxt:build:done'))
  
}

module.exports = nuxt
