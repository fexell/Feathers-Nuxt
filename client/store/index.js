import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

// This is absolutely needed - otherwise localStorage will return undefined
import localStorage from 'localstorage-memory'

Vue.use(Vuex)

export const _Store = () => {

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

					window.localStorage.setItem('feathers-jwt', state.accessToken)

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
						setItem: ( key, value ) => Cookies.set( key, value, { expires: 3, secure: false } ),
						removeItem: key => Cookies.remove( key )

					},
					reducer: state => ({

						// Exclude the accessToken from the cookie, for safety reasons
						email: state.email,
						userId: state.userId,
						username: state.username

					})

				})

			]

	})

}

// Store the $Store in the Vue instance, to be able to use it in plugins
Vue.$Store = _Store()

// Export the _Store
export default _Store
