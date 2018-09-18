import Vue from 'vue'

const _Validation = {

	install( Vue, options ) {

		Vue.directive('form-validate', {

			bind: function( el, binding, vnode ) {

				el.addEventListener('submit', (event) => {

					event.preventDefault()

				})

			}

		})

	}

}

Vue.use(_Validation)