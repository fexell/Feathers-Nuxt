import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import io from 'socket.io-client'



const _Connection = {

	install( Vue, options ) {

		Vue.connection = () => {

			Vue.feathers 		= feathers
			Vue.socketio 		= socketio
			Vue.io 				= io

			Vue.app 			= Vue.feathers()
			// Vue.socket 			= Vue.io('http://localhost:3030')

			Vue.socket 			= Vue.use(VueSocketIO, Vue.io('http://localhost:3030'))

			Vue.app.configure(Vue.socketio(Vue.socket))

		}

		Vue.prototype.$_connection 			= Vue.connection()

	}

}

/*
Vue.feathers = feathers
Vue.socketio = socketio
Vue.io = io

Vue.app = feathers()
Vue.socket = Vue.io('http://localhost:3030')

Vue.app.configure(Vue.socketio(Vue.socket))

Vue.use(Vue.app)
*/

Vue.use(_Connection)