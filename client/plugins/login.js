import Vue from 'vue'
import Vuex from 'vuex'

const Login = () => {

	Vue.Login = ( email, password ) => {

		// Return a promise to access the accesstoken in the "correct way"
		return new Promise(resolve => {

			Vue.$_Stream.Login( email, password )
			.then((message) => {

				// Start the authentication
				Vue.app.authenticate({

					strategy: 'local',
					email: email,
					password: password

				})
				.then((response) => {

					window.localStorage.setItem('feathers-jwt', response.accessToken)

					// Resolve promise
					resolve( response.accessToken )

					return Vue.app.passport.verifyJWT(response.accessToken)

				})
				.then((payload) => {

					return Vue.app.service('users').get(payload.userId)

				})
				.then((user) => {

					Vue.app.set('user', user)

					Vue.app.emit('success', 'You are now logged in, ' + user.username)

				})
				.catch((error) => {

					Vue.Logger('error', error.message)

				})

			})
			.catch((error) => {

				Vue.Logger('error', error)

			})

		})

	}

	Vue.mixin({

		methods: {

			// Provide the login method globaly
			Login: function( email, password ) {

				Vue.Login( email, password )
				.then( response => {

					// On response, commit to vuex
					return this.$store.commit('login', response)

				})
				.catch( error => {

					return Vue.Logger('error', error)

				})

			},

			// Logout
			Logout: function() {

				localStorage.removeItem('feathers-jwt')

				return this.$store.commit('logout')

			}

		}

	})

}

Vue.use(Login)