
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

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

			state:{

				// Get the localStorage value
				userId: '',
				username: '',
				email: '',
				accessToken: JSON.parse(localStorage.getItem('feathers-jwt'))

			},

			mutations: {

				// Is the user logged in?
				accessToken( state, token ) {

					state.accessToken = token

				},

				// Login the user and change the token to the user's "feathers-jwt" key
				Login( state, data ) {

					for( const key in data ) {

						state[ key ] = data[ key ]

					}

					console.log( state['username'] )

					window.localStorage.setItem('feathers-jwt', state.accessToken)

				},

				// On logout clear the localStorage
				logout( state, response ) {

					return state.accessToken = localStorage.clear()

				}

			},

			actions: {



			},

			getters: {

				accessToken: state => {

					// Get the "accessToken" state
					return state.accessToken

				},

				userId: state => {

					return state.userId

				},

				username: state => {

					return state.username

				},

				email: state => {

					return state.email

				}

			},

			// Use the VuePersist plugin
			plugins: [ persist.plugin ]

	})

}

Vue.$Store = _Store()

export default _Store
