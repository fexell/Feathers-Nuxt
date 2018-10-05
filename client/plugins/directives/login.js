
import Vue from 'vue'

export const _Login = () => {

	// v-login
    Vue.directive('login', {

		// Bind it
        bind: ( el, binding, vnode ) => {

			// Add a submit event listener to the form
            el.addEventListener('submit', ( e ) => {

				// Prevent the form from posting normally
                e.preventDefault()

				// Init objects to populate
				let obj       			= {},
					userObj				= {}

				// Data constants
				const mods      		= binding.modifiers
				const validateData		= vnode.context.$data.validate()

				// Set the (Feathers) strategy to local
				obj['strategy']			= 'local'

				// Validate the form
				const validate			= () => {

					return new Promise(( resolve, reject ) => {

						for( const key in validateData ) {

							// Show an error notification in case the login failed
							if( !validateData[ key ] ) return reject('Login rejected; invalid ' + key + '.')

						}

						// Resolve the promise
						resolve()

					})

				}

				// Get the inputs and their data
                for( const key in mods ) {

					obj[ key ] = vnode.context[ key ]

					// In case there is a mismatch between the modifier and the data prop, display a console error
					if( !obj[ key ] ) return console.error('Could not find vnode context of ' + key + '.')

				}

				// Run our validate function, which returns a promise
				validate()
				.then(() => {

					Vue.app.authenticate( obj )
					.then(response => {

						// Provide the accessToken to the user object
						userObj['accessToken']	= response.accessToken

						// Verify the JWT token
						return Vue.app.passport.verifyJWT( response.accessToken )

					})
					.then(payload => {

						// Provide the userId to the user object
						userObj['userId']		= payload.userId

						// Return the userId
						return Vue.app.service('users').get( payload.userId )

					})
					.then(user => {

						// Set the user
						Vue.app.set('user', user)

						// Provide the username and email to the user object
						userObj['username']		= user.username
						userObj['email']		= user.email

						// Commit the Login to Vuex
						Vue.$Store.commit('Login', userObj)

					})
					.catch((error) => {

						// Show an error => will be displayed as a notification
						Vue.Logger('error', error)

					})

				})
				.catch((error) => {

					// In case the login gets rejected
					Vue.Logger('error', error)

				})

            })

        }

    })

}

export default _Login()
