import Vue from 'vue'

export const _Logout = () => {

	// v-logout
	Vue.directive('logout', {

		// Bind the logout to a click event
		bind: ( el ) => {

			el.addEventListener('click', () => {

				// Run the Logout action in Vuex
				/* eslint-disable-next-line */
				return $nuxt.$store.dispatch('Logout')

			})

		}

	})

}

export default _Logout()
