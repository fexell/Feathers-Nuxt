
import Vue from 'vue'
import * as Cookies from 'js-cookie'

export const _Authentication = () => {

    // Authenticate a user based on the JWT from localStorage
	Vue.Authenticate = async () => {

		let userObj = {}

		const cookie = Cookies.get('user')
		const authToken = global.localStorage.getItem('feathers-jwt')
		const verify = Vue.app.passport.payloadIsValid( authToken )

		console.log( cookie )

		// If authentication token "feathers-jwt" exists and is verifiable
		if( authToken && verify && cookie ) {

			// Start the authentication
			return Vue.app.passport.verifyJWT( authToken )
			.then((data) => {

				// Creates a this.$verified option, which can be good for quick verification on the client side.
				Vue.prototype.$verified = true

				userObj['accessToken'] = authToken

				Vue.$Store.commit('Login', userObj)

				// Emit a success notification.
				return Vue.Toast({ title: 'Success', message: 'Authentication was successful.', type: 'success' })

			})
			// In case authentication fails
			.catch((error) => {

				console.error( error )

				Vue.prototype.$verified = false

				// Remove all storaged items.
				localStorage.removeItem('feathers-jwt')
				sessionStorage.removeItem('userId')

				// Emit an error notification.
				return Vue.Toast({ title: 'Error', message: error.message || 'Authentication by reading from localstorage failed.', type: 'error' })

			})

		}

	}

}

export default _Authentication()
