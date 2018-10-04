
import Vue from 'vue'
import Vuex from 'vuex'

export const _Login = () => {

    Vue.directive('login', {

        bind: ( el, binding, vnode ) => {

            el.addEventListener('submit', ( e ) => {

                e.preventDefault()

				let obj       			= {}
				let userObj				= {}

				const mods      		= binding.modifiers
				const validateData		= vnode.context.$data.validate()

				obj['strategy']			= 'local'

				const validate			= () => {

					return new Promise(( resolve, reject ) => {

						for( const key in validateData ) {

							if( !validateData[ key ] ) return reject('Login rejected; invalid ' + key + '.')

						}

						resolve()

					})

				}

                for( const key in mods ) {

					obj[ key ] = vnode.context[ key ]

					if( !obj[ key ] ) return console.error('Could not find vnode context of ' + key + '.')

				}

				validate()
				.then(() => {

					Vue.app.authenticate( obj )
					.then(response => {

						Vue.Logger('success', 'Authenticated!')

						userObj['accessToken']	= response.accessToken

						return Vue.app.passport.verifyJWT( response.accessToken )

					})
					.then(payload => {

						Vue.Logger('success', payload)

						userObj['userId']		= payload.userId

						return Vue.app.service('users').get( payload.userId )

					})
					.then(user => {

						Vue.app.set('user', user)

						userObj['username']		= user.username
						userObj['email']		= user.email

						Vue.$Store.commit('Login', userObj)

						Vue.Logger('success', 'User' + Vue.app.get('user'))

					})
					.catch((error) => {

						Vue.Logger('error', error)

					})

				})
				.catch((error) => {

					Vue.Logger('error', error)

				})

            })

        }

    })

}

export default _Login()
