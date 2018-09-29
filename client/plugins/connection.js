import Vue from 'vue'
import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import io from 'socket.io-client'
import auth from '@feathersjs/authentication-client'

import Vuex from 'vuex'

const _Connection = () => {

	// Connect to Feathers socket and bind some of Feathers functions/packages to the Vue instance
	Vue.Connection = () => {

		Vue.feathers 		= feathers
		Vue.socketio 		= socketio
		Vue.io 				= io
		Vue.auth			= auth

		Vue.socket 			= Vue.io('http://localhost:3030')
		Vue.app 			= Vue.feathers()

		Vue.app.configure(Vue.socketio(Vue.socket))
		Vue.app.configure(Vue.auth({ service: 'users' }))

	}

	// Authenticate a user based on the JWT from localStorage
	Vue.Authenticate = async () => {

		const authToken = global.localStorage.getItem('feathers-jwt')
		const verify = Vue.app.passport.payloadIsValid( authToken )
		
		if( authToken && verify ) {

			return Vue.app.passport.verifyJWT( authToken )
			.then((data) => {

				console.log( data )

				Vue.prototype.$verified = true

				sessionStorage.setItem('userId', data.userId)

				return Vue.Toast({ title: 'Success', message: 'Authentication was successful.', type: 'success' })

			})
			.catch((error) => {

				console.error( error )

				Vue.prototype.$verified = false

				localStorage.removeItem('feathers-jwt')
				sessionStorage.removeItem('userId')

				return Vue.Toast({ title: 'Error', message: error.message || 'Authentication by reading from localstorage failed.', type: 'error' })

			})

		}

	}

	// Bind it to an element - v-update-authentication. This one is already included in the <nuxt/> tag,
	// reauthenticating every time <nuxt/> view updates.
	// Binding it to any lifecycle hook would make it update too many times,
	// resulting in badly executed code. This happens because a global Vue plugin is called at every request from a component.
	Vue.directive('update-authentication', {

		inserted: function() {

			Vue.Authenticate()

		}

	})

	Vue.mixin({

		computed: {

			isLoggedIn() {

				return this.$store.getters.isLoggedIn

			}

		}

	})

	// Bind the connection to Vue's prototype (and this.$_connection),
	// and run the connection asap.
	Vue.prototype.$_connection 			= Vue.Connection()
	// Vue.prototype.$_vuex				= Vue._Vuex()

}

// Use our connection plugin
Vue.use(_Connection)