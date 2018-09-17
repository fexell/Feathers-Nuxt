import Vue from 'vue'

const Login = {

	install( Vue, options ) {

		Vue.directive('login', {

			bind: ( el, binding, vnode ) => {

				el.addEventListener('submit', (event) => {

					event.preventDefault()

					if( !vnode.context.email || !vnode.context.password ) return Vue.logger.error("You need to fill out both email and password to log in.")
					else if( Vue.app.passport.payloadIsValid( window.localStorage.getItem('feathers-jwt') ) === false ) return Vue.logger.error("You are already logged in.")

					Vue.app.authenticate({

						strategy: 'local',
						email: vnode.context.email,
						password: vnode.context.password

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