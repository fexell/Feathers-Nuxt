// This is still a work in progress

import Vue from 'vue'

export const _Storage = () => {

	Vue.$SessionStorage = ( obj ) => {

		for( const key in obj ) {

			/* eslint-disable-next-line */
			sessionStorage.setItem( key, obj[ key ] )

		}

	}

}

export default _Storage()
