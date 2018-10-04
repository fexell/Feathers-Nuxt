
import Vue from 'vue'

export const _Status = () => {

    Vue.mixin({

		computed: {

			username() {

				return Vue.$Store.state.username

			},

			accessToken() {

				// Are we logged in or not?
				return Vue.$Store.state.accessToken

			}

		}

	})

}

export default _Status()
