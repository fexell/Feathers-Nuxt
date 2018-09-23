import Vue from 'vue'
import logger from '../../src/logger'

// Start of the const _Logger for Vue to use
const _Logger = {

	install( Vue, options ) {

		// Bind Logger to the Vue instance
		Vue.Logger = async (type, message, bind) => {

			bind = bind || null

			switch(type) {

				// Log errors
				case 'error':
					logger.error(message, bind)

					// Emit the error, including message
					Vue.app.emit('error', message)
					
					break

				// Log warnings
				case 'warn':
					logger.warn(message, bind)

					// Emit the warning, including message
					Vue.app.emit('warn', message)

					break

				// Log information
				case 'info':
					logger.info(message, bind)

					// Emit the information, including message
					Vue.app.emit('info', message)

					break

				// Log verbosely
				case 'verbose':
					logger.verbose(message, bind)

					// Emit the verbose, including message
					Vue.app.emit('verbose', message)

					break

				// Log debug message
				case 'debug':
					logger.debug(message, bind)

					// Emit the debug message
					Vue.app.emit('debug', message)

					break

				// Log silly
				case 'silly':
					logger.silly(message, bind)

					// Emit the silly message
					Vue.app.emit('silly', message)

					break

			}

		}

		Vue.prototype.$_logger = Vue.Logger

	}

}

Vue.use(_Logger)