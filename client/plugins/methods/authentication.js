import Vue from 'vue'
import * as Cookies from 'js-cookie'

export const _Authentication = () => {

	// Authenticate a user based on the JWT from localStorage
	Vue.Authenticate = async () => {

		const cookie = Cookies.getJSON('vuex')

		$nuxt.$store.dispatch( 'AuthenticateJWT', cookie.accessToken )

	}

}

export default _Authentication()
