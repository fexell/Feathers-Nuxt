import Vue from 'vue'

export const Login = ( el ) => {

	Vue.loginMethod = () => {

	}

	Vue.directive('login', {

		bind: ( el, binding, vnode ) => {



		}

	})

	Vue.mixin({

		created: () => {

			console.log('Testing Vue.mixin in login.js.')

		}

	})

	Vue.prototype.$loginMethod = ( options ) => {



	}

}

Vue.use(Login)