import createPersistedState from 'vuex-persistedstate'

let PersistedState

if( process.browser ) {

	PersistedState = createPersistedState({

		key: 'store',
		/* eslint-disable-next-line */
		storage: localStorage,
		reducer: state => ({

			accessToken: state.accessToken

		})

	})

}

export default PersistedState
