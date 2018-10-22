/* eslint-disable */

//
// TODO: Add more accessible Feathers Service events, such as "get", "remove", "update", "patch", etc.
//

import Vue from 'vue'
import PersistedState from '../plugins/persistedstate'
import { CookieStorage } from 'cookie-storage'

const cookieStorage = new CookieStorage()

export const state = () => ({

	userId: undefined,
	email: undefined,
	username: undefined,
	accessToken: undefined,

})

export const mutations = {

	// This is instead of Nuxt's nuxtServerInit.
	// Please, do not nuxtServerInit anywhere here,
	// since it will break the site.
	INIT_STORE: function( state ) {

		this.replaceState( Object.assign( state, JSON.parse( cookieStorage.getItem('store') ) ) )

		Vue.app.emit('success', 'Re-authentication was successful!')

	},

	// Set the user, as well as all needed data
	SET_USER: function( state, data ) {

		for( const key in state ) {

			state[ key ] = data[ key ]

		}

		// Redirect the user to dashboard
		if( window.location.pathname === '/login' ) $nuxt._router.replace('/dashboard', null, null)

		// Display a success notification if the user is successfully authenticated
		Vue.app.emit('success', 'Welcome in, <span>' + data.username + '</span>.')

	},

	// Unset the user upon log out
	UNSET_USER: function( state ) {

		// Set all states to undefined
		for( const key in state ) {

			state[ key ] = undefined

		}

		if( window.location.pathname === '/dashboard' ) $nuxt._router.replace('/', null, null)

		// Let Feathers handle the logout process of clearing storaged data, etc.
		Vue.app.logout()

	}

}

export const actions = {

	// The login dispatch function.
	// "data" needs to contain the Feathers' "strategy", as well as the data to authenticate against
	async Login( { commit }, data ) {

		let obj = new Object()

		Vue.app.authenticate( data )
		.then( response => {

			obj.accessToken = response.accessToken

			return Vue.app.passport.verifyJWT( response.accessToken )

		})
		.then( payload => {

			obj.userId = payload.userId

			return Vue.app.service('users').get( payload.userId )

		})
		.then( user => {

			obj.email = user.email
			obj.username = user.username

			Vue.app.set('user', user)

			commit( 'SET_USER', obj )

		})
		.catch( error => {

			Vue.app.emit('error', error.message)

		})

		Promise.resolve()

	},

	// The signup dispatch function
	async Signup({ dispatch }, data) {

		Vue.socket.emit('create', 'users', data, (error, message) => {

			// Replace, for example, "email:" with empty string
			if( error ) return Vue.Logger('error', error.message.replace(/\w+\:/i, ''))

			Vue.app.emit('success', 'User <span>' + message.username + '</span> has been successfully created. You\'ll be logged in shortly.')

			// Automatically login the user if successfully created - uncomment or remove this bit
			// of code if you want the new user to log in manually
			dispatch('Login', { strategy: 'local', email: data.email, password: data.password })

		})

	},

	async Find({ commit }, target, data) {

		Vue.socket.emit('find', target, data, ( error, data ) => {

			if( error ) return Vue.Logger('error', error.message.replace(/\w+\:/i, ''))

			console.log( data )

		})

	},

	// The logout dispatch function
	async Logout({ commit, state }) {

		// Set the token as the previous token
		Vue.app.service('users').patch( state.userId, { accessToken: state.accessToken, prevToken: state.accessToken } )
			.then(data => {

				console.log( data )

			})

		// Commmit to unset all the user state data
		commit('UNSET_USER')

		// Clear the localStorage
		cookieStorage.clear()

		// Display a message that they've successfully logged out
		Vue.app.emit('success', 'You have been successfully logged out!')

		Promise.resolve()

	},

	async Init({ commit, state }) {

		if( cookieStorage.getItem('jwt') && cookieStorage.getItem('store') || state.accessToken ) {

			Vue.app.passport.getJWT()
				.then( jwt => {

					// In case of the JWT that is trying to authenticate is the previous one
					// then throw them an error.
					Vue.app.service('users').get( state.userId )
						.then( data => {

							if( data.prevToken === cookieStorage.getItem('jwt') || data.prevToken === state.accessToken ) {

								commit('UNSET_USER')

								return Vue.app.emit('error', 'You cannot authenticate by using an old token.')

							}

						})

					return Vue.app.passport.verifyJWT( jwt )

				})
				.then( payload => {

					return Vue.app.passport.payloadIsValid( payload )

				})
				.then(() => {

					return commit('INIT_STORE')

				})
				.catch(() => {

					return Vue.app.logout()

				})

		}

		Promise.resolve()

	}

}

// Getters
export const getters = {

	accessToken( state ) {

		return state.accessToken

	}

}

export const plugins = [
	PersistedState
]
