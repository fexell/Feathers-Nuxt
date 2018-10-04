
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

export const store = () => {

		return new Vuex.Store({

			state: function() {

				return {

					// Get the localStorage value
					userId: '',
					username: '',
					email: '',
					accessToken: JSON.parse(localStorage.getItem('feathers-jwt'))

				}

			},

			mutations: {

				// Is the user logged in?
				accessToken( state, token ) {

					state.accessToken = token

				},

				// Login the user and change the token to the user's "feathers-jwt" key
				Login( state, data ) {

					return () => {

						for( const key in data ) {

							state[ key ] = data[ key ]

						}

					}

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

				}

			},

			// Use the VuePersist plugin
			plugins: [ persist.plugin ]

	})

}

export default store
