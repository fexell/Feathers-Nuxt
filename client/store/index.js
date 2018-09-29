
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import localStorage from 'localstorage-memory'

Vue.use(Vuex)

const persist = new VuexPersist({

    key: 'feathers-jwt',
    storage: localStorage

})

const store = () => {

	return new Vuex.Store({

		state: {

            isLoggedIn: JSON.parse(localStorage.getItem('feathers-jwt'))

        },

        mutations: {

            isLoggedIn( state, token ) {

                state.isLoggedIn = token

            },

            login( state, token ) {

                return state.isLoggedIn = token

            },

            logout( state, response ) {

                return state.isLoggedIn = localStorage.clear()

            }

        },

        getters: {

            isLoggedIn: state => {

                return state.isLoggedIn

            }

        },

        plugins: [ persist.plugin ]

    })

}

Vue.use(store)

export default store
