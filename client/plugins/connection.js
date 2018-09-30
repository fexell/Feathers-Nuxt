import Vue from 'vue'
import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import io from 'socket.io-client'
import auth from '@feathersjs/authentication-client'

const _Connection = () => {

	// Connect to Feathers socket (not a new socket) and bind some of Feathers functions/packages to the Vue instance
	Vue.Connection = () => {

		Vue.feathers 		= feathers // This binds "feathers" to the Vue instance.
		Vue.socketio 		= socketio // This binds "feathers socketio" to the Vue instance.
		Vue.io 				= io // This binds "socket.io-client" to the Vue instance.
		Vue.auth			= auth // This binds "feathers/authentication-client" to the Vue instance.

		Vue.socket 			= Vue.io('http://localhost:3030') // This creates a global socket, on the Vue instance. Usage example: Vue.socket.emit('create', 'users'...)
		Vue.app 			= Vue.feathers() // This binds the actual important part of feathers to the Vue instance. Usage example: Vue.app.emit(), Vue.app.service('users'), ...

		Vue.app.configure(Vue.socketio(Vue.socket))
		Vue.app.configure(Vue.auth({ service: 'users' }))

	}

	// Authenticate a user based on the JWT from localStorage
	Vue.Authenticate = async () => {

		const authToken = global.localStorage.getItem('feathers-jwt')
		const verify = Vue.app.passport.payloadIsValid( authToken )
		
		// If authentication token "feathers-jwt" exists and is verifiable
		if( authToken && verify ) {

			// Start the authentication
			return Vue.app.passport.verifyJWT( authToken )
			.then((data) => {

				// Creates a this.$verified option, which can be good for quick verification on the client side.
				Vue.prototype.$verified = true

				// Let's create a session from the 'userId', just because we can, and might need it later.
				sessionStorage.setItem('userId', data.userId)

				// Emit a success notification.
				return Vue.Toast({ title: 'Success', message: 'Authentication was successful.', type: 'success' })

			})
			// In case authentication fails
			.catch((error) => {

				console.error( error )

				Vue.prototype.$verified = false

				// Remove all storaged items.
				localStorage.removeItem('feathers-jwt')
				sessionStorage.removeItem('userId')

				// Emit an error notification.
				return Vue.Toast({ title: 'Error', message: error.message || 'Authentication by reading from localstorage failed.', type: 'error' })

			})

		}

	}

	// A vue directive to update the authentication on each page reload/refresh
	Vue.directive('update-authentication', {

		inserted: function() {

			Vue.Authenticate() // Check ~/plugins/authentication.js for more info

		}

	})

	Vue.mixin({

		computed: {

			isLoggedIn() {

				// Are we logged in or not?
				return this.$store.getters.isLoggedIn

			}

		}

	})

	// Bind the connection to Vue's prototype (and this.$_connection),
	// and run the connection asap.
	Vue.prototype.$_connection 			= Vue.Connection()

}

// Use our connection plugin
Vue.use(_Connection)