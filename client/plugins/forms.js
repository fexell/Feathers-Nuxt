import Vue from 'vue'

export const _Forms = () => {

	// The main objects to add data to
	let obj = new Object()
	obj.forms = new Object()

	const Login = ( data ) => {

		$nuxt.$store.dispatch('Login', data)

	}

	const Signup = ( data ) => {

		$nuxt.$store.dispatch('Signup', data)

	}

	const Find = ( target, data ) => {

		$nuxt.$store.dispatch('Find', target, data)

	}

	Vue.directive('form', {

		// Once inserted...
		inserted: (el, binding, vnode) => {

			// Add keys and values to the main object
			obj.forms.elements = vnode.context.$el.querySelectorAll('input')
			obj.forms.el = el
			obj.forms.mods = binding.modifiers
			obj.forms.args = binding.arg
			obj.forms.data = vnode.context.$data
			obj.forms.validation = vnode.context.$data.validation()

			// Create an input data object for easier management
			obj.forms.inputData = (() => {

				let o = new Object()

				obj.forms.elements.forEach((el, i) => {

					o[ i ] = {

						el: el, // The input element
						value: el.value, // The input value
						vname: (( vname = new Array() ) => { for ( const key in obj.forms.mods ) { vname.push( key ) } return vname[ i ] })(), // Get the vnode name
						valid: (( valid = new Array() ) => { for ( const key in obj.forms.mods ) { valid.push( obj.forms.validation[ key ] ) } return valid[ i ] })() // Get the validation boolean

					}

					return o[ i ]

				})

				// Return the object as a promise
				return new Promise((resolve) => {

					resolve( o )

				})

			})() // Run this function right away

			// When submitting the form
			el.addEventListener('submit', (e) => {

				e.preventDefault()

				for( const key in obj.forms.validation ) {

					if( !obj.forms.validation[ key ] ) return Vue.app.emit('error', 'Invalid ' + key + '.')

				}

				switch (obj.forms.args) {

					case 'login': {

						Login({

							strategy: 'local',
							email: obj.forms.data.email,
							password: obj.forms.data.password

						})

						break

					}

					case 'signup': {

						Signup({

							username: obj.forms.data.username,
							email: obj.forms.data.email,
							password: obj.forms.data.password

						})

						break

					}

					case 'find': {

						Find('users', { username: obj.forms.data.username })

						break

					}

				}

			})

			// Return the obj so we can access its data in this entire plugin
			return obj

		},

		// When something updates in the form
		update: (el, binding, vnode) => {

			obj.forms.validation = vnode.context.$data.validation()

			// Run our promise
			obj.forms.inputData.then(data => {

				// For each object in inputData
				for (const key in data) {

					// Only update the input value and valid boolean, since everything else is already set and should stay the same
					Object.assign(data[key], {

						value: vnode.context.$data[data[key].vname],
						valid: vnode.context.$data.validation()[data[key].vname]

					})

					// Toggle the 'valid' or 'invalid' class on our inputs (this is only to give a visual representation to the user/visitor)
					const toggleValid = data[key].valid ? data[key].el.classList.add('valid') || data[key].el.classList.replace('invalid', 'valid') : data[key].el.classList.add('invalid') || data[key].el.classList.replace('valid', 'invalid')

				}

			})

		}

	})

}

export default _Forms()
