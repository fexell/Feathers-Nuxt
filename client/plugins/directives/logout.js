import Vue from 'vue'

export const _Logout = () => {

	Vue.directive('logout', {

		bind: ( el, binding, vnode ) => {

			el.addEventListener('click', () => {

				return Vue.$Store.dispatch('Logout')

			})

		}

	})

}

export default _Logout()
