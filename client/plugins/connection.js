import Vue from 'vue'
import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import io from 'socket.io-client'
import auth from '@feathersjs/authentication-client'

export const _Connection = () => {

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

}

export default _Connection()
