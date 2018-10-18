import Vue from 'vue'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

export default ({ store }) => {

	store.subscribe(( mutations, state ) => {

		localStorage.setItem('store', JSON.stringify( state ))

	})

	createPersistedState({ key: 'store', storage: { getItem: key => Cookies.get( key ), setItem: ( key, value ) => Cookies.set( key, value, { secure: false } ), removeItem: key => Cookies.remove( key ) } })( store )

	store.$Cookie = Cookies.getJSON('store')

}
