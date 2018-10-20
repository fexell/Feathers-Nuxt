
import Vue from 'vue'

export const _Status = () => {

	Vue.mixin({

		computed: {

			Token() {

				// Are we logged in or not?
				return this.$store.state.accessToken

			}

		}

	})

}

export default _Status()
