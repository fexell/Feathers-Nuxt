import Vue from 'vue'

// const feathers 				= require('@feathersjs/feathers')
// const socketio 				= require('@feathersjs/socketio-client')
// const io 					= require('socket.io-client')
// const auth 					= require('@feathersjs/authentication-client')

// const app 					= feathers()

const feathers 	= require('@feathersjs/feathers')
const socketio	= require('@feathersjs/socketio-client')
const io 		= require('socket.io-client')
const auth 		= require('@feathersjs/authentication-client')
const socket 	= io('http://localhost:3030')

export const AuthenticateClient = () => {

	Vue.authClient = () => {

		const app 		= feathers()
		app.configure(socketio(socket))
		app.configure(auth({ storageKey: 'feathers-jwt', storage: window.localStorage }))
		app.authenticate()
		.then(response => {

			console.log('Authenticated!', response)
			return app.passport.verifyJWT(response.accessToken)

		})
		.catch((error) => {

			console.error( error )

		})

	}

}

Vue.use(AuthenticateClient)