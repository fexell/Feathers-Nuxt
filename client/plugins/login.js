import Vue from 'vue'
import Vuex from 'vuex'

const Login = () => {

	Vue.Login = ( email, password ) => {

		// Return a promise to access the accesstoken in the "correct way"
		return new Promise(resolve => {

			const email_regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
			const email_test = email_regex.test( email )

			const password_regex = /^((?=.*\d{1,})(?=.*[A-Z]{1,})(?=.*[a-z]{1,})(?=.*[^\w\d\s:])([^\s]){6,64})(?<!([^ -~]))$/m
			const password_test = password_regex.test( password )

			// Just a bit of simple <validation>

			// Nothing should be left empty
			if( !email || !password ) return Vue.Logger('error', "You need to fill out both email and password to log in.")

			// Check email
			else if( !email_test ) return Vue.Logger('error', "Invalid email.")

			// Check password
			else if( !password_test ) {

				Vue.Logger('error', "Invalid password")
				Vue.Logger('error', 'Password needs to be between 6 - 64 characters, contain one upper- and lowercase letter, a number and a symbol.')

				return

			}

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

				Vue.app.emit('success', 'You are now logged in, ' + user.email)

			})
			.catch((error) => {

				Vue.Logger('error', error.message)

			})

		}, reject => {

			// In case something went horribly wrong
			return reject('Something went wrong. Error code: 1')

		})

	}

	Vue.mixin({

		methods: {

			// Provide the login method globaly
			Login: function( email, password ) {

				Vue.Login( email, password )
				.then((response) => {

					// On response, commit to vuex
					return this.$store.commit('login', response)

				})
				.catch((error) => {

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