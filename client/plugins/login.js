import Vue from 'vue'

const feathers 		= require('@feathersjs/feathers')
const rest 			= require('@feathersjs/rest-client')
const auth 			= require('@feathersjs/authentication-client')

const superagent 	= require('superagent')
const localStorage 	= require('localstorage-memory')

const client 		= feathers()

export const Login = ( el ) => {

	Vue.directive('login', {

		bind: ( el, binding, vnode ) => {

			el.addEventListener('submit', (event) => {

				event.preventDefault()

				client.configure(rest('http://localhost:3030').superagent(superagent))
				.configure(auth({ storage: window.localStorage }))

				client.authenticate({

					strategy: 'local',
					email: vnode.context.$data.email,
					password: vnode.context.$data.password

				})
				.then(response => {
					console.log('Authenticated!', response)
					return client.passport.verifyJWT(response.accessToken)
				})
				.then(payload => {
					console.log('JWT Payload', payload)
					return client.service('users').get(payload.userId)
				})
				.then(user => {
					client.set('user', user)
					console.log('User', client.get('user'))
				})
				.catch((error) => {
					console.error('Error authenticating!', error)
				})

			})

		}

	})

	Vue.mixin({
		data: () => {
			return {
				service: null
			}
		}
	})

}

Vue.use(Login)