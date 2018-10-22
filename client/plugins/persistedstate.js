import createPersistedState from 'vuex-persistedstate'
import { CookieStorage } from 'cookie-storage'

const cookieStorage = new CookieStorage()

let PersistedState

if( process.browser ) {

	PersistedState = createPersistedState({

		key: 'store',
		/* eslint-disable-next-line */
		storage: {

			getItem: key => cookieStorage.getItem( key ),
			setItem: ( key, value ) => cookieStorage.setItem( key, value ),
			removeItem: key => cookieStorage.removeItem( key )

		}

	})

}

export default PersistedState
