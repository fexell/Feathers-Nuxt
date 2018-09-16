import Vue from 'vue'

const _Connection = {

	install( Vue, options ) {

		Vue.connection = async () => {

			var optionsDefault = {

				header: 'Authorization',
				path: '/authentication',
				jwtStrategy: 'jwt',
				service: 'users',
				cookie: 'feathers-jwt',
				storageKey: 'feathers-jwt',
				storage: window.localStorage

			}

			Vue.feathers = require('@feathersjs/feathers')
			Vue.socketio = require('@feathersjs/socketio-client')
			Vue.io = require('socket.io-client')
			Vue.auth = require('@feathersjs/authentication-client')

			Vue.socket = Vue.io('http://localhost:3030')
			Vue.app = Vue.feathers()

			Vue.app.configure(Vue.socketio(Vue.socket))
			Vue.app.configure(Vue.auth( optionsDefault ))

			Vue.prototype.$_feathers = Vue.feathers
			Vue.prototype.$_socketio = Vue.socketio
			Vue.prototype.$_io = Vue.io
			Vue.prototype.$_socket = Vue.socket
			Vue.prototype.$_app = Vue.app
			Vue.prototype.$_auth = Vue.auth

			console.log(Vue.app)

			return await Vue.app

		}

		Vue.authenticate = async () => {

			Vue.socket.emit('authenticate', {

				strategy: 'jwt',
				accessToken: window.localStorage.getItem('feathers-jwt')

			}, (message, data) => {

				console.log(data)

			})

		}

		Vue.prototype.$_connection = Vue.connection()
		Vue.prototype.$_authenticate = Vue.authenticate()

	}

}

Vue.use(_Connection)