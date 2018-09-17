import Vue from 'vue'

const Persist = {

	install( Vue, options ) {

		Vue.directive('persist', {

			update: ( el, binding, vnode ) => {

				window.localStorage.setItem(binding.arg, el.value)

			}

		})

	}

}

Vue.use(Persist)