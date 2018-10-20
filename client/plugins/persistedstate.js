import createPersistedState from 'vuex-persistedstate'
// import localStorage from 'localstorage-memory'

let PersistedState

if( process.browser ) {

	PersistedState = createPersistedState({

		key: 'store',
		storage: localStorage

	})

}

export default PersistedState
