
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

// This is absolutely needed - otherwise localStorage will return undefined
import localStorage from 'localstorage-memory'

Vue.use(Vuex)

// Persist storage, set the key and storage
const persist = new VuexPersist({

    key: 'feathers-jwt',
    storage: localStorage

})

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

				RefreshToken( state, data ) {

					return state.accessToken = data

				},

				// On logout clear the localStorage
				logout( state, response ) {

					return state.accessToken = localStorage.clear()

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

				persist.plugin,
				createPersistedState({

					key: 'user',
					storage: {

						getItem: key => Cookies.get( key ),
						setItem: ( key, value ) => Cookies.set( key, value, { expires: 3, secure: false } ),
						removeItem: key => Cookies.remove( key )

					},
					reducer: state => ({

						email: state.email,
						userId: state.userId,
						username: state.username

					})

				})

			]

	})

}

Vue.$Store = _Store()

export default _Store
