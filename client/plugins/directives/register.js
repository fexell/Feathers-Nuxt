
import Vue from 'vue'

export const _Register = () => {

	// Bind v-register to the form element
    Vue.directive('register', {

		// Bind directly
        bind: ( el, binding, vnode ) => {

			// Add event listener to form onsubmit
            el.addEventListener('submit', e => {

				// Prevent form from submitting
				e.preventDefault()

				// Create object to later store the keys in
				let obj = {}

				// Get the data from the validate function (which returns an object)
				const validateData		= vnode.context.$data.validate()

				// A validate function to check values are valid (returns a Promise)
				const validate			= function() {

					return new Promise(( resolve, reject ) => {

						for( const key in validateData ) {

							// If validation fails, reject with a message
							if( !validateData[ key ] ) return reject('Sign up rejected; invalid ' + key + '.')

						}

						resolve()

					})

				}

				// Populate the object with binding.modifiers keys
                for( const key in binding.modifiers ) {

					obj[ key ] = vnode.context[ key ]

					if( !obj[ key ] ) return console.error('Could not find vnode context of ' + key + '.')

				}

				// Run the validate function
				validate()
				.then(() => {

					// If the promise is resolved
					Vue.socket.emit('create', 'users', obj, (error, message) => {

						// Replace, for example, "email:" with empty string
						if( error ) return Vue.Logger('error', error.message.replace(/^\w+\:$/i, ''))
						
						Vue.app.emit('success', 'User <span style="color:#7fb3d5;">' + message.username + '</span> has been successfully created. You can now log in!')

					})

				}, error => {

					// If the promise is rejected
					Vue.Logger('error', error)

				})

            })

        }

    })

}

export default _Register()
