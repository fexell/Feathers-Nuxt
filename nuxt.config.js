/* eslint-disable */

//
// This is the "nuxt.config.js" file for this Feathers JS + Nuxt JS boilerplate.
// You can read more about the "nuxt.config.js" file in Nuxt's API which
// can be found here: https://nuxtjs.org/api .
//

const config = require('config')

module.exports = {

	// Nuxt Build - https://nuxtjs.org/api/configuration-build
	build: {
		extend: (config, { isDev, isClient }) => {
			config.node = {
				fs: "empty"
			}
		},
		removeAttributeQuotes: false,
  		removeComments: false,
	},

	css: [
		'~/assets/sass/main.sass',
	],

	// Nuxt Dev - https://nuxtjs.org/api/configuration-dev
	dev: ( process.env.NODE_ENV !== 'production' ),

	// Nuxt Env - https://nuxtjs.org/api/configuration-env
	env: {
		baseUrl: process.env.BASE_URL || 'http://localhost:3030',
		NODE_ENV: 'dev'
	},

	// Nuxt Head - https://nuxtjs.org/api/configuration-head
	head: {
		title: 'App',
		titleTemplate: '%s - Feathers + Nuxt',
		link: [
			{ rel: 'icon', type: 'image/png', href: '/favicon.png' },
			{ rel: 'stylesheet', href: '//fonts.googleapis.com/icon?family=Material+Icons' },
			{ rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900|Abril+Fatface' },
		],
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1.0005' },
			{ hid: 'description', name: 'description', content: 'Meta description' },
		],
	},

	mode: 'spa',

	loader: 'sass-loader',

	// Nuxt Loading - https://nuxtjs.org/api/configuration-loading
	loading: {
		color: '#222222',
		height: '4px'
	},

	// Nuxt Plugins (can be custom plugins as well) - https://nuxtjs.org/api/configuration-plugins
	plugins: [
		'~/plugins/default.js',

		{ src: '~/plugins/notifications.js', ssr: false },
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
		}
	},

	router: {
		base: '/'
	},

	// Nuxt srcDir - https://nuxtjs.org/api/configuration-srcdir
	srcDir: 'client/',

	server: {
		port: config.port,
		host: config.host
	},

	serverMiddleware: [
		'../src'
	]

}
