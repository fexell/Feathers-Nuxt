import Vue from 'vue'

// const feathers 		= require('@feathersjs/feathers')
// const rest 			= require('@feathersjs/rest-client')
// const auth 			= require('@feathersjs/authentication-client')

// const superagent 	= require('superagent')
// const localStorage 	= require('localstorage-memory')

// const app 		= feathers()

export const Login = ( el ) => {

	Vue.directive('login', {

		bind: ( el, binding, vnode ) => {

			el.addEventListener('submit', (event) => {

				event.preventDefault()

				Vue.app.authenticate({

					strategy: 'local',
					email: vnode.context.$data.email,
					password: vnode.context.$data.password

				})
				.then(response => {
					console.log('Authenticated!', response)
					return Vue.app.passport.verifyJWT(response.accessToken)
				})
				.then(payload => {
					console.log('JWT Payload', payload)
					return Vue.app.service('users').get(payload.userId)
				})
				.then(user => {
					Vue.app.set('user', user)
					console.log('User', Vue.app.get('user'))
				})
				.catch((error) => {
					console.error('Error authenticating!', error)
				})

			})

		}

	})

}

Vue.use(Login)