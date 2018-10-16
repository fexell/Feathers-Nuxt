import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

// This is absolutely needed - otherwise localStorage will return undefined
import localStorage from 'localstorage-memory'

Vue.use(Vuex)

const _Store = () => {

		return new Vuex.Store({

			state: {

				// Get the localStorage value
				userId: '',
				username: '',
				email: '',
				accessToken: localStorage.getItem('feathers-jwt')

			},

			mutations: {

				// Is the user logged in?
				accessToken( state, token ) {

					state.accessToken = token

				},

				// Login the user and change the token to the user's "feathers-jwt" key
				Login( state, data ) {

					for( let key in data ) {

						state[ key ] = data[ key ]

						sessionStorage.setItem( key, data[ key ] )

					}

					// Store the access token in localStorage
					window.localStorage.setItem('feathers-jwt', state.accessToken)

					// Show a success notification that they are now logged in
					Vue.app.emit('success', Vue.$_Messages.success.login.withUsername( state.username ))

				},

				// On logout clear the localStorage
				Logout( state ) {

					// Remove all stored information
					window.localStorage.clear()
					sessionStorage.clear()
					Cookies.remove('UserData')

					// Unset all state data
					for( const key in state ) {

						state[ key ] = null

					}

					$nuxt._router.replace('/')

					Vue.app.emit('success', 'You are now logged out!')

				}

			},

			actions: {

				// Run the Logout mutation
				Logout: ( context ) => {

					context.commit('Logout')

				}

			},

			getters: {

				accessToken: state => {

					// Get the "accessToken" state
					return state.accessToken

				},

				email: state => {

					return state.email

				}

			},

			// Use the VuePersist plugin
			plugins: [

				createPersistedState({

					// The name of the cookie
					key: 'UserData',

					// Storage type (= cookie)
					storage: {

						// Set a cookie with the user information
						getItem: key => Cookies.get( key ),
						setItem: ( key, value ) => Cookies.set( key, value, { expires: 3, secure: false, samesite: 'lax' } ),
						removeItem: key => Cookies.remove( key )

					},
					reducer: state => ({

						// Exclude the accessToken from the cookie, for safety reasons
						email: state.email,
						userId: state.userId,
						username: state.username,
						accessToken: state.accessToken

					})

				})

			]

	})

}

// Store the $Store in the Vue instance, to be able to use it in plugins
Vue.$Store = _Store()

// Export the _Store
export default _Store
