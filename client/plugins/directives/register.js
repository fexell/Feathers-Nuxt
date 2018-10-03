
import Vue from 'vue'

export const _Register = () => {

    Vue.directive('register', {

        bind: ( el, binding, vnode ) => {

            el.addEventListener('submit', e => {

				e.preventDefault()

				let obj = {}

				const inputs			= el.querySelectorAll('input')
				const exp				= binding.expression
				const validateData		= vnode.context.$data.validate

				console.log( typeof validateData )

                for( const key in binding.modifiers ) {

					obj[ key ] = vnode.context[ key ]

					if( typeof validateData !== 'undefined' ) {

						for( const i in validateData ) {

							if( key === i ) {

								const test = validateData[ i ].test( vnode.context[ key ] ) ? console.log('True') : Vue.Logger('error', 'Invalid' + i)

							}

						}

					}

					if( !obj[ key ] ) return console.error('Could not find vnode context of ' + key + '.')

				}

				if( obj ) Vue.socket.emit('create', 'users', obj, (error, message) => {

					if( error ) return Vue.Logger('error', error.message.replace(/^\w+\:$/i, ''))

					Vue.app.emit('success', 'User <span style="color:#7fb3d5;">' + message.username + '</span> has been successfully created. You can now log in!')

				})

            })

        }

    })

}

export default _Register()
