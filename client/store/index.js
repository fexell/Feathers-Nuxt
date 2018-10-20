/* eslint-disable */

import Vue from 'vue'
import Vuex from 'vuex'
import * as Cookies from 'js-cookie'
import PersistedState from '../plugins/persistedstate'

export const state = () => ({

	userId: null,
	email: null,
	username: null,
	accessToken: null,

})

export const mutations = {

	// This is instead of Nuxt's nuxtServerInit.
	// Please, do not nuxtServerInit anywhere here,
	// since it will break the site.
	INIT_STORE: function( state ) {

		if( state.accessToken ) {
			
			this.replaceState( Object.assign(state, JSON.parse(localStorage.getItem('store'))) )

		}

	},

	// Set the user, as well as all needed data
	SET_USER: function( state, data ) {

		for( const key in state ) {

			state[ key ] = data[ key ]

		}

		// Redirect the user to dashboard
		$nuxt._router.replace('/dashboard')

		// Display a success notification if the user is successfully authenticated
		Vue.app.emit('success', 'You have been sucessfully logged in, <span>' + data.username + '</span>.')

	},

	// Unset the user upon log out
	UNSET_USER: function( state ) {

		localStorage.clear()
		window.localStorage.clear()

		for( const key in state ) {

			state[ key ] = null

		}

		Vue.app.emit('success', 'You have been successfully logged out!')

		$nuxt._router.replace('/')

	}

}

export const actions = {

	// The login dispatch function.
	// "data" needs to contain the Feathers JS "strategy", as well as the data to authenticate against
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

			commit('SET_USER', obj)

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
	async Logout({ commit }) {

		commit('UNSET_USER', null)

		Promise.resolve()

	},

	async INIT_STORE({ commit, dispatch, state }) {

		let store = JSON.parse( localStorage.getItem('store') )

		if( !state.userId || !state.email || !state.username || !state.accessToken || state.accessToken !== store.accessToken ) return dispatch('Logout')

		Vue.app.passport.verifyJWT( state.accessToken )
			.then(() => {

				commit('INIT_STORE')

			})
			.catch(() => {

				commit('UNSET_USER')

			})

		Promise.resolve()

	}

}

export const getters = {

	accessToken( state ) {

		return state.accessToken

	}

}

export default function() {
	
	return new Vuex.Store({

		state,
		mutations,
		actions,
		getters,
		plugins: [ PersistedState ] // See [ plugins/persistedstate.js ], to see what the code does

	})

}