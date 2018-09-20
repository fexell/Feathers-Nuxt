import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import io from 'socket.io-client'
import logger from '../../src/logger'



const _Connection = {

	install( Vue, options ) {

		Vue.Connection = () => {

			Vue.feathers 		= feathers
			Vue.socketio 		= socketio
			Vue.io 				= io

			Vue.socket 			= Vue.io('http://localhost:3030')
			Vue.app 			= Vue.feathers()

			Vue.app.configure(Vue.socketio(Vue.socket))

		}

		Vue.prototype.$_connection 			= Vue.Connection()

	}

}

Vue.use(_Connection)