import Vue from 'vue'

export const _Logout = () => {

	// v-logout
	Vue.directive('logout', {

		// Bind the logout to a click event
		bind: ( el, binding, vnode ) => {

			el.addEventListener('click', () => {

				// Run the Logout action in Vuex
				return Vue.$Store.dispatch('Logout')

			})

		}

	})

}

export default _Logout()
