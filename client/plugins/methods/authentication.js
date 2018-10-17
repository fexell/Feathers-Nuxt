import Vue from 'vue'
import * as Cookies from 'js-cookie'
import localStorage from 'localstorage-memory'

export const _Authentication = () => {

	// Authenticate a user based on the JWT from localStorage
	Vue.Authenticate = async () => {

		// Create the user object to populate
		let userObj = {}

		// Get the user cookie
		const cookie = Cookies.get('UserData')
		// Get authentication token
		const authToken = localStorage.getItem('feathers-jwt')
		// Verify the authentication token
		const verify = Vue.app.passport.payloadIsValid(authToken)

		// If authentication token and its verification returns nothing
		if (!authToken && !verify) {
			localStorage.clear();
			sessionStorage.clear()
		}

		// If authentication token "feathers-jwt" exists and is verifiable
		if (authToken && verify && cookie) {

			// To prevent FOUC (Flash of unstyled content)
			document.body.classList.add('hide')

			// Start the authentication
			return Vue.app.authenticate({

					strategy: 'jwt',
					accessToken: authToken

				})
				.then((data) => {

					// Creates a this.$verified option, which can be good for quick verification on the client side.
					Vue.prototype.$verified = true

					// Store accessToken to the user object
					userObj['accessToken'] = authToken

					return Vue.app.passport.verifyJWT(data.accessToken)

				})
				.then((payload) => {

					// Store userId to the user object
					userObj['userId'] = payload.userId

					return Vue.app.service('users').get(payload.userId)

				})
				.then((user) => {

					// Store email and username to the user object
					userObj['email'] = user.email
					userObj['username'] = user.username

					// Commit the login to Vuex
					Vue.$Store.commit('Login', userObj)

					// Set the user
					Vue.app.set('user', user)

					// Remove the hide class
					document.body.classList.remove('hide')

				})
				// In case authentication fails
				.catch((error) => {

					// Unset the verified prototype
					Vue.prototype.$verified = false

					// Remove all storaged items
					localStorage.clear()
					sessionStorage.clear()

					// Remove the hide class
					document.body.classList.remove('hide')

					// Emit an error notification.
					return Vue.Toast({
						title: 'Error',
						message: error.message || 'Authentication by reading from localstorage failed.',
						type: 'error'
					})

				})

		}

	}

}

export default _Authentication()
