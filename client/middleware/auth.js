import * as Cookies from 'js-cookie'
export default async ({ store, redirect }) => {

	if( process.client ) {

		console.log('Hello from the client side.')

	} else if( !process.client ) {

		console.log('Hello from the server side.')

	}

}
