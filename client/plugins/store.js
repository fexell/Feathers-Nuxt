
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

// Vue.use(Vuex)

let vuexLocalStorage = null

if( process.browser ) {

    vuexLocalStorage = new VuexPersist({

        key: 'feathers-jwt',
        storage: window.localStorage,

    })

}

Vue.store = () => {

	return new Vuex.Store({

		state: {

            isLoggedIn: !!localStorage.getItem('feathers-jwt')

        },

        mutations: {

            LOGIN( state ) {

                state.pending = true

            },

            LOGIN_SUCCESS( state ) {

                state.isLoggedIn = true
                state.pending = false

            },

            LOGOUT( state ) {

                state.isLoggedIn = false

            }

        },

        actions: {

            login({ commit }, creds) {

                commit(LOGIN)

                return new Promise(resolve => {

                    setTimeout(() => {

                        localStorage.setItem('feathers-jwt', 'JWT')

                        commit(LOGIN_SUCCESS)

                        resolve()

                    }, 1000)

                })

            },

            logout({ commit }) {

                localStorage.removeItem('feathers-jwt')

                commit(LOGOUT)

            }

        },

        getters: {

            isLoggedIn: state => {

                return state.isLoggedIn

            }

        },

        plugins: process.browser ? [vuexLocalStorage.plugin] : []

    })

}

