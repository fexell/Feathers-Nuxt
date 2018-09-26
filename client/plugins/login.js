import Vue from 'vue'

const Login = {

	install( Vue, options ) {

		Vue.directive('login', {

			bind: ( el, binding, vnode ) => {

				el.addEventListener('submit', (event) => {

					event.preventDefault()

					if( !vnode.context.email || !vnode.context.password ) return Vue.Logger('error', "You need to fill out both email and password to log in.")
					else if( Vue.app.passport.payloadIsValid( window.localStorage.getItem('feathers-jwt') ) === false ) return Vue.Logger('error', "You are already logged in.")

					Vue.app.authenticate({

						strategy: 'local',
						email: vnode.context.email,
						password: vnode.context.password

					})
					.then((response) => {

						window.localStorage.setItem('feathers-jwt', response.accessToken)

						return Vue.app.passport.verifyJWT(response.accessToken)

					})
					.then((payload) => {

						return Vue.app.service('users').get(payload.userId)

					})
					.then((user) => {

						Vue.app.emit('authentication successful')
						Vue.app.set('user', user)

					})
					.catch((error) => {

						Vue.Logger('error', error)

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