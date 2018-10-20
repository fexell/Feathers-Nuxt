
import Vue from 'vue'

export const _Regex = () => {

	// Regexes'
	Vue.$Regex = {

		username: /^[-\w\.\$@\*\!]{5,30}$/,
		email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
		password: /^((?![^ -~])((?=.*\d{1,})(?=.*[A-Z]{1,})(?=.*[a-z]{1,})(?=.*[^\w\d\s:])([^\s]){6,64}))$/m

	}

	// Test against the regexes'
	Vue.$Test = {

		// Simple username regex function that returns "false" or "true"
		username: ( username ) => {

			return Vue.$Regex.username.test( username )

		},

		// Simple email regex function that returns "false" or "true"
		email: ( email ) => {

			return Vue.$Regex.email.test( email )

		},

		// Simple password regex function that returns "false" or "true"
		password: ( password ) => {

			return Vue.$Regex.password.test( password )

		}

	}

}

export default _Regex()
