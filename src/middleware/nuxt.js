/* eslint-disable */
const { Nuxt, Builder } = require('nuxt')
const isProd = process.env.NODE_ENV === 'production' ? true : false
const config = require('../../nuxt.config')
const nuxt = new Nuxt( config )

if( isProd ) {
	
	new Builder(nuxt).build()
	.then(() => process.emit('nuxt:build:done'))
	.catch(( error ) => {
		
		console.error( error )
		process.exit( 1 )
		
	})
	
} else {
	
	process.nextTick(() => process.emit('nuxt:build:done'))
	
}

module.exports = nuxt
