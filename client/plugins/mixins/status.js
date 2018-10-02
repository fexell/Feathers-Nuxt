
import Vue from 'vue'

export const _Status = () => {

    Vue.mixin({

		computed: {

			isLoggedIn() {

				// Are we logged in or not?
				return this.$store.getters.isLoggedIn

			}

		}

	})

}

export default _Status()