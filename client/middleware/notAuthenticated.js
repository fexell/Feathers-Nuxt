import Vue from 'vue'

export default function({ store, redirect }) {

    if( !isAuth() ) {

		console.log( 'Not auth: ' + isAuth() )

		return redirect('/login')

	}

	function isAuth() {

		return Vue.$Store.state.accessToken

	}

}
