import createPersistedState from 'vuex-persistedstate'

let PersistedState

if( process.browser ) {

	PersistedState = createPersistedState({

		key: 'store',
		storage: localStorage

	})

}

export default PersistedState
