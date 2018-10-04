
import Vue from 'vue'

export const _Authentication = () => {

    // Authenticate a user based on the JWT from localStorage
	Vue.Authenticate = async () => {

		const authToken = global.localStorage.getItem('feathers-jwt')
		const verify = Vue.app.passport.payloadIsValid( authToken )

		// If authentication token "feathers-jwt" exists and is verifiable
		if( authToken && verify ) {

			// Start the authentication
			return Vue.app.passport.verifyJWT( authToken )
			.then((data) => {

				// Creates a this.$verified option, which can be good for quick verification on the client side.
				Vue.prototype.$verified = true

				// Let's create a session from the 'userId', just because we can, and might need it later.
				sessionStorage.setItem('userId', data.userId)

				Vue.$Store.commit('Login', { accessToken: authToken })

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
