import Vue from 'vue'

var window = window || global

export const app = Vue.app
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

			Vue.logger = require('../../src/logger.js')

			Vue.socket = Vue.io('http://localhost:3030')
			Vue.app = Vue.feathers()

			Vue.app.configure(Vue.socketio(Vue.socket))
			Vue.app.configure(Vue.auth( optionsDefault ))

			Vue.prototype.$_feathers = Vue.feathers
			Vue.prototype.$_socketio = Vue.socketio
			Vue.prototype.$_io = Vue.io
			Vue.prototype.$_auth = Vue.auth
			Vue.prototype.$_logger = Vue.logger
			Vue.prototype.$_socket = Vue.socket
			Vue.prototype.$_app = Vue.app

			return Vue

		}

		Vue.disconnect = () => {

			Vue.socket.close()

		}

		Vue.authenticate = async () => {

			if( !window.localStorage.getItem('feathers-jwt') ) return Vue.logger.error("Couldn't find localstorage data.")
			else {

				Vue.socket.emit('authenticate', {

					strategy: 'jwt',
					accessToken: window.localStorage.getItem('feathers-jwt')

				}, (message, data) => {

					Vue.logger.log('info', 'Access token: %s', data.accessToken)

					return Vue.app.passport.verifyJWT(data.accessToken)
					.then(payload => Vue.logger.log('info', 'UserID: %s', payload.userId))
					.catch(error => Vue.logger.error(error))

				})

			}

		}

		Vue.prototype.$_connection = Vue.connection()
		Vue.prototype.$_authenticate = Vue.authenticate()

	}

}

Vue.use(_Connection)