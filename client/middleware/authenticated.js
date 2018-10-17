import Vue from 'vue'

export default function({ store, redirect }) {

    if( !!isAuth() ) {

		console.log( 'Auth: ' + isAuth() )

		return redirect('/dashboard')

	}

	function isAuth() {

		return process.client ? Vue.$Store.state.accessToken : undefined

	}

}
