
import Vue from 'vue'

export const _Status = () => {

    Vue.mixin({

		computed: {

			accessToken() {

				// Are we logged in or not?
				return Vue.$Store.getters.accessToken

			}

		}

	})

}

export default _Status()
