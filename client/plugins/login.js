import Vue from 'vue'

// const feathers 		= require('@feathersjs/feathers')
// const rest 			= require('@feathersjs/rest-client')
// const auth 			= require('@feathersjs/authentication-client')

// const superagent 	= require('superagent')
// const localStorage 	= require('localstorage-memory')

// const app 		= feathers()

const Login = {

	install( Vue, options ) {

		Vue.loginUser = ( el, binding, vnode ) => {

			Vue.app.authenticate({

				strategy: 'local',
				email: vnode.context.$data.email,
				password: vnode.context.$data.password

			})
			.then((response) => {

				Vue.logger.info(response.accessToken)
				return Vue.app.passport.verifyJWT(response.accessToken)

			})
			.then((payload) => {

				Vue.logger.info('JWT Payload %s', payload)
				return Vue.app.service('users').get(payload.userId)

			})
			.then((user) => {

				Vue.app.set('user', user)
				Vue.logger.info('User %s', Vue.app.get('user'))

			})
			.catch((error) => {

				Vue.logger.error(error)

			})

		}

		Vue.directive('login', {

			bind: ( el, binding, vnode ) => {

				el.addEventListener('submit', (event) => {

					event.preventDefault()

					Vue.loginUser( el, binding, vnode )

				})

			}

		})

		Vue.mixin({

			directives: {

				Login

			}

		})

	}

}

Vue.use(Login)