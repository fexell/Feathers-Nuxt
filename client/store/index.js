/* eslint-disable */

import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'cookie'
import localStorage from 'localstorage-memory'
import * as Cookies from 'js-cookie'
import createPersistedState from 'vuex-persistedstate'

export const state = () => ({

	userId: null,
	email: null,
	username: null,
	accessToken: null,

})

export const mutations = {

	INIT_STORE: function( state ) {

		if( localStorage.getItem('store') ) {

			this.replaceState( Object.assign(state, JSON.parse(localStorage.getItem('store'))) )

		}

	},

	SET_USER: function( state, user ) {

		for( const key in state ) {

			state[ key ] = user[ key ]

		}

		$nuxt._router.replace('/dashboard')

		Cookies.set('jwt', state.accessToken)

		Vue.app.emit('success', 'You have been sucessfully logged in, ' + user.username + '.')

	},

	UNSET_USER: function( state ) {

		localStorage.clear()
		Cookies.remove('jwt')
		window.localStorage.clear()

		for( const key in state ) {

			state[ key ] = null

		}

		Vue.app.emit('success', 'You have been successfully logged out!')

	}

}

export const actions = {

	async Login( { commit }, data ) {

		try {

			let obj = new Object()

			Vue.app.authenticate({

				strategy: 'local',
				email: data.email,
				password: data.password,

			})
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

		} catch ( e ) {

			throw e

		}

	},

	async AuthenticateJWT({ commit }, token) {

		const obj = new Object()

		Vue.app.authenticate({

			strategy: 'jwt',
			accessToken: token,

		})
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

	},

	async Logout({ commit }) {

		commit('UNSET_USER', null)

	}

}

export const getters = {

	accessToken( state ) {

		return state.accessToken

	}

}

export const store = new Vuex.Store()
//export const store = new Vuex.Store({ plugins: [ createPersistedState({ key: 'vuex', storage: { getItem: key => Cookies.get( key ), setItem: ( key, value ) => Cookies.set( key, value, { secure: false } ), removeItem: key => Cookies.remove( key ) } }) ] })
