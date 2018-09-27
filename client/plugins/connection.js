import Vue from 'vue'
import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import io from 'socket.io-client'
import auth from '@feathersjs/authentication-client'



const _Connection = () => {

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

	Vue.prototype.$_connection 			= Vue.Connection()

}

Vue.use(_Connection)