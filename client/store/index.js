
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

const store = () => {

	return new Vuex.Store({

		state: {

            // Get the localStorage value
            isLoggedIn: JSON.parse(localStorage.getItem('feathers-jwt'))

        },

        mutations: {

            // Is the user logged in?
            isLoggedIn( state, token ) {

                state.isLoggedIn = token

            },

            // Login the user and change the token to the user's "feathers-jwt" key
            login( state, token ) {

                return state.isLoggedIn = token

            },

            // On logout clear the localStorage
            logout( state, response ) {

                return state.isLoggedIn = localStorage.clear()

            }

        },

        getters: {

            isLoggedIn: state => {

                // Get the "isLoggedIn" state
                return state.isLoggedIn

            }

        },

        // Use the VuePersist plugin
        plugins: [ persist.plugin ]

    })

}

Vue.use(store)

export default store
