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

			// Vue.socket 			= Vue.use(VueSocketIO, Vue.io('http://localhost:3030'))

			Vue.app.configure(Vue.socketio(Vue.socket))

		}

		Vue.Logger = async (type, message, bind) => {

			bind = bind || null

			switch(type) {

				// Log errors
				case 'error':
					logger.error(message, bind)

					Vue.app.emit('error', message)
					
					break

				// Log warnings
				case 'warn':
					logger.warn(message, bind)
					break

				// Log information
				case 'info':
					logger.info(message, bind)
					break

				// Log verbosely
				case 'verbose':
					logger.verbose(message, bind)
					break

				// Log debug message
				case 'debug':
					logger.debug(message, bind)
					break

				// Log silly
				case 'silly':
					logger.silly(message, bind)
					break

				// Log default = info
				default:
					logger.info(message, bind)
					break

			}

		}

		Vue.prototype.$_connection 			= Vue.Connection()
		Vue.prototype.$_logger 				= Vue.Logger
		//Vue.prototype.$_emit 				= Vue.Emit()
		//Vue.prototype.$_on 					= Vue.On()

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