import Vue from 'vue'
import * as Cookies from 'js-cookie'
export default ({ store, redirect }) => {

	if( store.state.accessToken ) redirect('/dashboard')

}
