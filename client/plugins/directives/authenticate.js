
import Vue from 'vue'

export const _Authenticate = () => {

    // A vue directive to update the authentication on each page reload/refresh
	Vue.directive('update-authentication', {

		inserted: function() {

			Vue.Authenticate()

		}

	})

}

export default _Authenticate()
