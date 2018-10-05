
import Vue from 'vue'

export const _Status = () => {

    Vue.mixin({

		computed: {

			accessToken() {

				// Are we logged in or not?
				return Vue.$Store.state.accessToken

			}

		}

	})

}

export default _Status()
